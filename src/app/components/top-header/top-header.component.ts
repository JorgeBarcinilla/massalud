import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { Generic } from '../../shared/models/generic.model';
import { TopHeaderService } from './top-header.service';

/**
 *
 */
@Component({
  selector: 'app-top-header',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule],
  templateUrl: './top-header.component.html',
  styleUrls: ['./top-header.component.scss']
})
export class TopHeaderComponent {
  public topHeaderData$: Observable<Generic>;

  constructor(
    public router: Router,
    private content: TopHeaderService
  ) {
    this.topHeaderData$ = this.content.getData$().pipe(
      map((topHeaderData: Generic) => {
        return topHeaderData.data.attributes;
      })
    );
  }
}
