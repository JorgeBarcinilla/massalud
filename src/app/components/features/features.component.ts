import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { Generic } from '../../shared/models/generic.model';
import { FeaturesService } from './features.service';

/**
 *
 */
@Component({
  selector: 'app-features',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule],
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent {
  public featuresData$: Observable<Generic>;

  constructor(
    public router: Router,
    private content: FeaturesService
  ) {
    this.featuresData$ = this.content.getData$().pipe(
      map((featuresData: Generic) => {
        return featuresData.data.attributes;
      })
    );
  }
}
