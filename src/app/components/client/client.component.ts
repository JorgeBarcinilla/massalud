import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Generic } from '../../shared/models/generic.model';
import { ClientService } from './client.service';

/**
 *
 */
@Component({
  selector: 'app-client',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule],
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent {
  public clientData$: Observable<Generic>;

  constructor(private content: ClientService) {
    this.clientData$ = this.content.getData$().pipe(
      map((clientData) => {
        return clientData.data.attributes;
      })
    );
  }
}
