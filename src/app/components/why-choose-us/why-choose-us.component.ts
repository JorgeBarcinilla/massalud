import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { map, Observable } from 'rxjs';
import { Generic } from '../../shared/models/generic.model';
import { WhyChooseUsService } from './why-choose-us.service';

/**
 *
 */
@Component({
  selector: 'app-why-choose-us',
  standalone: true,
  imports: [RouterModule, CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './why-choose-us.component.html',
  styleUrls: ['./why-choose-us.component.scss']
})
export class WhyChooseUsComponent {
  public whyChooseUsData$: Observable<Generic>;

  constructor(private content: WhyChooseUsService) {
    this.whyChooseUsData$ = this.content.getData$().pipe(
      map((whyChooseUsData: Generic) => {
        return whyChooseUsData.data.attributes;
      })
    );
  }
}
