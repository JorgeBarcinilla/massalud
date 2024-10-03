import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { map, Observable } from 'rxjs';
import { Generic } from '../../shared/models/generic.model';
import { NotFoundService } from './not-found.service';

/**
 *
 */
@Component({
  selector: 'app-not-found',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterModule, CommonModule],
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent {
  public notFoundData$: Observable<Generic> = new Observable<Generic>();

  constructor(private content: NotFoundService) {
    this.notFoundData$ = this.content.getData$().pipe(
      map((notFoundData) => {
        return notFoundData.data.attribute;
      })
    );
  }
}
