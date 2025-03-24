import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { GithubIssue } from '../../interfaces/github-issues.interface';
import { MarkdownModule } from 'ngx-markdown';
@Component({
  selector: 'issue-coment',
  imports: [MarkdownModule],
  templateUrl: './issue-coment.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IssueComentComponent {
  comentIssue = input.required<GithubIssue>();
}
