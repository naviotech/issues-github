import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import { GithubLabel } from '../../interfaces/github-label.interface';
import { CommonModule } from '@angular/common';
import { IssuesService } from '../../services/issues.service';

@Component({
  selector: 'issues-label-selector',
  imports: [CommonModule],
  templateUrl: './label-selector.component.html',
})
export class LabelSelectorComponent {
  labels = input.required<GithubLabel[]>()
  issuesService = inject(IssuesService)

  isSelected(labelName:string){
    return this.issuesService.selectedLabels().has(labelName)
  }
  onToggleLabel(labelName:string){
    this.issuesService.toggleLabel(labelName)
  }
}
