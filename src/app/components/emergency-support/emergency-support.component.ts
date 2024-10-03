import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { Generic } from '../../shared/models/generic.model';
import { EmergencySupportService } from './emergency-support.service';

/**
 *
 */
@Component({
  selector: 'app-emergency-support',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule],
  templateUrl: './emergency-support.component.html',
  styleUrls: ['./emergency-support.component.scss']
})
export class EmergencySupportComponent {
  public emergencyData$: Observable<Generic>;

  constructor(
    public router: Router,
    private content: EmergencySupportService
  ) {
    this.emergencyData$ = this.content.getData$().pipe(
      map((emergencyData: Generic) => {
        return emergencyData.data.attributes;
      })
    );
  }
}
