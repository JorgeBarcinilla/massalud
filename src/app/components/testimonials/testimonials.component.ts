import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Generic } from '../../shared/models/generic.model';
import { TestimonialsService } from './testimonials.service';

/**
 *
 */
@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent {
  public testimonialsData$: Observable<Generic>;

  constructor(private content: TestimonialsService) {
    this.testimonialsData$ = this.content.getData$().pipe(
      map((testimonialsData: Generic) => {
        return testimonialsData.data.attributes;
      })
    );
  }
}
