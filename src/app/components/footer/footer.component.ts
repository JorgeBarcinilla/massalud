import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Generic } from '../../shared/models/generic.model';
import { FooterService } from './footer.service';

/**
 *
 */
@Component({
  selector: 'app-footer',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  public footerData$: Observable<Generic>;

  constructor(private content: FooterService) {
    this.footerData$ = this.content.getData$().pipe(
      map((footerData: Generic) => {
        return footerData.data.attributes;
      })
    );
  }
}
