import { inject, Injectable, signal } from '@angular/core';
import { injectQuery } from '@tanstack/angular-query-experimental';
import { getIssueByNumber } from '../actions/get-issue-by-number';
import { getIssueByComment } from '../actions/get-issue-comment';

@Injectable({
  providedIn: 'root'
})
export class IssueService {

  #issueNumber = signal<string|null>(null)

  issueQuery = injectQuery(() => ({
    queryKey: ['issue', this.#issueNumber()],
    queryFn: () => getIssueByNumber(this.#issueNumber()!),
    enabled: this.#issueNumber() !== null
    // para que la peticion no se dispare por defecto hasta que no cambie la señal de nullo a string
  }))

  setIssueNumber(issueId:string){
    this.#issueNumber.set(issueId)
  }

  issueCommentQuery = injectQuery(() => ({
    queryKey: ['issue', this.#issueNumber(), 'comments'],
    queryFn: () => getIssueByComment(this.#issueNumber()!),
    enabled: this.#issueNumber() !== null
    // para que la peticion no se dispare por defecto hasta que no cambie la señal de nullo a string
  }))
}
