import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { SignalPipe } from '../../pipes/common/signal/signal.pipe';
import { ServicesService } from './services.service';

/**
 *
 */
@Component({
  selector: 'app-services',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterModule, CommonModule, SignalPipe],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {
  public servicesData;

  constructor(
    public router: Router,
    private servicesContent: ServicesService
  ) {
    this.servicesData = this.servicesContent.getData();
  }
}
