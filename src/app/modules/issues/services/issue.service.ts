import { inject, Injectable, signal } from '@angular/core';
import { injectQuery, QueryClient } from '@tanstack/angular-query-experimental';
import { getIssueByNumber } from '../actions/get-issue-by-number';
import { getIssueByComment } from '../actions/get-issue-comment';
import { GithubIssue } from '../interfaces/github-issues.interface';

@Injectable({
  providedIn: 'root',
})
export class IssueService {
  #issueNumber = signal<string | null>(null);
  #queryClient = inject(QueryClient);
  setIssueNumber(issueId: string) {
    this.#issueNumber.set(issueId);
  }

  issueQuery = injectQuery(() => ({
    queryKey: ['issue', this.#issueNumber()],
    queryFn: () => getIssueByNumber(this.#issueNumber()!),
    enabled: this.#issueNumber() !== null,
    // para que la peticion no se dispare por defecto hasta que no cambie la señal de nullo a string
    staleTime: 1000 * 60 * 5,
  }));

  issueCommentQuery = injectQuery(() => ({
    queryKey: ['issue', this.#issueNumber(), 'comments'],
    queryFn: () => getIssueByComment(this.#issueNumber()!),
    enabled: this.#issueNumber() !== null,
    // para que la peticion no se dispare por defecto hasta que no cambie la señal de nullo a string
  }));

  prefetchIssue(issueId: string) {
    this.#queryClient.prefetchQuery({
      queryKey: ['issue', issueId],
      queryFn: () => getIssueByNumber(issueId),
      staleTime: 1000 * 60 * 5,
    });
  }

  setIssueData(issue: GithubIssue) {
    this.#queryClient.setQueryData(['issue', issue.number.toString()], issue, {
      updatedAt: Date.now() + 1000 * 60,
    });
  }
}
