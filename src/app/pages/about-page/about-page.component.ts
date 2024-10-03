import { ChangeDetectionStrategy, Component } from '@angular/core';
import { EmergencySupportComponent } from '../../components/emergency-support/emergency-support.component';
import { GoalsComponent } from '../../components/goals/goals.component';
import { TestimonialsComponent } from '../../components/testimonials/testimonials.component';
import { ValuesComponent } from '../../components/values/values.component';
import { WhyChooseUsComponent } from '../../components/why-choose-us/why-choose-us.component';

/**
 *
 */
@Component({
  selector: 'app-about-page',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [EmergencySupportComponent, WhyChooseUsComponent, TestimonialsComponent, ValuesComponent, GoalsComponent],
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss']
})
export class AboutPageComponent {
  constructor() {}
}
