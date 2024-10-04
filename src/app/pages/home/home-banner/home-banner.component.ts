import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SignalPipe } from '../../../pipes/common/signal/signal.pipe';
import { HomeBannerService } from './home-banner.service';

/**
 *
 */
@Component({
  selector: 'app-home-banner',
  standalone: true,
  imports: [CommonModule, SignalPipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './home-banner.component.html',
  styleUrls: ['./home-banner.component.scss']
})
export class HomeBannerComponent {
  public bannerData;

  constructor(private content: HomeBannerService) {
    this.bannerData = this.content.getData();
  }
}
