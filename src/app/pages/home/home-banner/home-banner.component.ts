import { CommonModule } from '@angular/common';
import { afterNextRender, ChangeDetectionStrategy, Component } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { SignalPipe } from '../../../pipes/common/signal/signal.pipe';
import { HomeBannerService } from './home-banner.service';

/**
 *
 */
@Component({
  selector: 'app-home-banner',
  standalone: true,
  imports: [CarouselModule, CommonModule, SignalPipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './home-banner.component.html',
  styleUrls: ['./home-banner.component.scss']
})
export class HomeBannerComponent {
  public bannerData;
  bannerSlides?: OwlOptions;

  constructor(private content: HomeBannerService) {
    this.bannerData = this.content.getData();
    afterNextRender(() => {
      this.bannerSlides = {
        items: 1,
        dots: true,
        nav: false,
        loop: true,
        autoplay: true,
        animateIn: 'fadeIn',
        animateOut: 'fadeOut',
        autoplayHoverPause: true,
        navText: ["<i class='ph-caret-left'></i>", "<i class='ph-caret-right'></i>"]
      };
    });
  }
}
