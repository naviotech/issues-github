import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, input, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { GithubIssue, State } from '../../interfaces/github-issues.interface';

@Component({
  selector: 'issue-item',
  imports: [RouterLink, CommonModule],
  templateUrl: './issue-item.component.html',
})
export class IssueItemComponent {
  issue = input.required<GithubIssue>()

  get isOpen (){
    return this.issue().state === State.Open
  }
}
