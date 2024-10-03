import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ClientComponent } from '../../components/client/client.component';
import { PartnerComponent } from '../../components/partner/partner.component';
import { ServicesService } from '../../components/services/services.service';
import { SignalPipe } from '../../pipes/common/signal/signal.pipe';

/**
 *
 */
@Component({
  selector: 'app-services-page',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterModule, ClientComponent, PartnerComponent, CommonModule, SignalPipe],
  templateUrl: './services-page.component.html',
  styleUrls: ['./services-page.component.scss']
})
export class ServicesPageComponent {
  public servicesData;

  constructor(private content: ServicesService) {
    this.servicesData = this.content.getData();
  }
}
