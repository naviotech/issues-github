import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map, tap } from 'rxjs';
import { IssueService } from '../../services/issue.service';
import { IssueComentComponent } from "../../components/issue-coment/issue-coment.component";

@Component({
  selector: 'issue-page',
  imports: [RouterLink, IssueComentComponent],
  templateUrl: './issue-page.component.html',
})
export default class IssuePageComponent {
  route = inject(ActivatedRoute);
  issueService = inject(IssueService);

  numberIssue = toSignal<string>(
    this.route.paramMap.pipe(
      map((params) => params.get('number') ?? ''),
      tap((number) => this.issueService.setIssueNumber(number))
    )
  );

  issueQuery = this.issueService.issueQuery
  issueQueryComment = this.issueService.issueCommentQuery
}
