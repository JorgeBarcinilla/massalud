import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { SignalPipe } from '../../pipes/common/signal/signal.pipe';
import { ValuesService } from './values.service';

/**
 *
 */
@Component({
  selector: 'app-values',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, SignalPipe],
  templateUrl: './values.component.html',
  styleUrls: ['./values.component.scss']
})
export class ValuesComponent {
  public valuesData;

  constructor(
    public router: Router,
    private content: ValuesService
  ) {
    this.valuesData = this.content.getData();
  }
}
