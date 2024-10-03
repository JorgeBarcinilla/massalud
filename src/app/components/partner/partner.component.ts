import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Generic } from '../../shared/models/generic.model';
import { PartnerService } from './partner.service';

/**
 *
 */
@Component({
  selector: 'app-partner',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule],
  templateUrl: './partner.component.html',
  styleUrls: ['./partner.component.scss']
})
export class PartnerComponent {
  public partnerData$: Observable<Generic>;

  constructor(private content: PartnerService) {
    this.partnerData$ = this.content.getData$().pipe(
      map((partnerData: Generic) => {
        return partnerData.data.attributes;
      })
    );
  }
}
