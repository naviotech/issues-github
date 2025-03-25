import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, input, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { GithubIssue, State } from '../../interfaces/github-issues.interface';
import { IssueService } from '../../services/issue.service';

@Component({
  selector: 'issue-item',
  imports: [RouterLink, CommonModule],
  templateUrl: './issue-item.component.html',
})
export class IssueItemComponent {
  issue = input.required<GithubIssue>()
  issueService = inject(IssueService)

  get isOpen (){
    return this.issue().state === State.Open
  }
  prefetchData(){
    //this.issueService.prefetchIssue(this.issue().number.toString())
    this.issueService.setIssueData(this.issue())
  }

}
