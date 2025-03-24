import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { GithubLabel } from '../../interfaces/github-label.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'issues-label-selector',
  imports: [CommonModule],
  templateUrl: './label-selector.component.html',
})
export class LabelSelectorComponent {
  labels = input.required<GithubLabel[]>()
}
