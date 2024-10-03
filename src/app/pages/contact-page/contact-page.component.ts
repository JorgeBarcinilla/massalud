import { ChangeDetectionStrategy, Component } from '@angular/core';

/**
 *
 */
@Component({
  selector: 'app-contact-page',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent {
  constructor() {}
}
