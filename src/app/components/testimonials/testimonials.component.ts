import { CommonModule } from '@angular/common';
import { afterNextRender, ChangeDetectionStrategy, Component } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { map, Observable } from 'rxjs';
import { Generic } from '../../shared/models/generic.model';
import { TestimonialsService } from './testimonials.service';

/**
 *
 */
@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CarouselModule, CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent {
  public testimonialsData$: Observable<Generic>;
  testimonialsSlides?: OwlOptions;

  constructor(private content: TestimonialsService) {
    this.testimonialsData$ = this.content.getData$().pipe(
      map((testimonialsData: Generic) => {
        return testimonialsData.data.attributes;
      })
    );
    afterNextRender(() => {
      this.testimonialsSlides = {
        items: 1,
        margin: 0,
        nav: false,
        loop: true,
        dots: true,
        autoplay: false,
        autoplayHoverPause: true,
        navText: ["<i class='ph-caret-left'></i>", "<i class='ph-caret-right'></i>"]
      };
    });
  }
}
