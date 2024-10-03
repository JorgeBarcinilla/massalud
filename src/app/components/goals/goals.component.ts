import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { Generic } from '../../shared/models/generic.model';
import { GoalsService } from './goals.service';

/**
 *
 */
@Component({
  selector: 'app-goals',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule],
  templateUrl: './goals.component.html',
  styleUrls: ['./goals.component.scss']
})
export class GoalsComponent {
  public goalsData$: Observable<Generic>;

  constructor(
    public router: Router,
    private content: GoalsService
  ) {
    this.goalsData$ = this.content.getData$().pipe(
      map((goalData: Generic) => {
        return goalData.data.attributes;
      })
    );
  }
}
