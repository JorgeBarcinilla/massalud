import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BlogComponent } from '../../components/blog/blog.component';
import { EmergencySupportComponent } from '../../components/emergency-support/emergency-support.component';
import { FeaturesComponent } from '../../components/features/features.component';
import { ServicesComponent } from '../../components/services/services.component';
import { TestimonialsComponent } from '../../components/testimonials/testimonials.component';
import { WhyChooseUsComponent } from '../../components/why-choose-us/why-choose-us.component';
import { HomeBannerComponent } from './home-banner/home-banner.component';

/**
 *
 */
@Component({
  selector: 'app-home',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    HomeBannerComponent,
    EmergencySupportComponent,
    FeaturesComponent,
    WhyChooseUsComponent,
    ServicesComponent,
    TestimonialsComponent,
    BlogComponent
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor() {}
}
