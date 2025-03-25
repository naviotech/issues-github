import { Component, inject } from '@angular/core';
import { IssuesService } from '../../services/issues.service';
import { LabelSelectorComponent } from '../../components/label-selector/label-selector.component';
import { IssueItemComponent } from '../../components/issue-item/issue-item.component';
import { State } from '../../interfaces/github-issues.interface';

@Component({
  selector: 'issues-list-page',
  imports: [LabelSelectorComponent, IssueItemComponent],
  templateUrl: './issues-list-page.component.html',
})
export default class IssuesListPageComponent {
  issuesService = inject(IssuesService);

  get labelsQuery() {
    return this.issuesService.labelsQuery;
  }

  get issuesQuery() {
    return this.issuesService.issuesQuery;
  }

  onChangeStrange(newSate: string) {
    const state =
      {
        all: State.All,
        open: State.Open,
        closed: State.Closed,
      }[newSate] ?? State.All;
    this.issuesService.showIssuesByState(state);
  }
}
