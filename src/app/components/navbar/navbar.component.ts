import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, HostListener, signal } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { map, Observable } from 'rxjs';
import { SignalPipe } from '../../pipes/common/signal/signal.pipe';
import { Generic } from '../../shared/models/generic.model';
import { NavbarService } from './navbar.service';

/**
 *
 */
@Component({
  selector: 'app-navbar',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterModule, CommonModule, SignalPipe],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  public navbarData$: Observable<Generic>;
  isSticky = signal(false);
  classApplied = signal(false);

  constructor(
    public router: Router,
    private content: NavbarService
  ) {
    this.navbarData$ = this.content.getData$().pipe(
      map((navbarData: Generic) => {
        return navbarData.data.attributes;
      })
    );
  }

  /**
   * Metodo para abrir el modal
   */
  toggleClass() {
    this.classApplied.update((value) => !value);
  }

  // Navbar Sticky
  /**
   * Metodo para hacer el navbar sticky
   */
  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (scrollPosition >= 50) {
      this.isSticky.update(() => true);
    } else {
      this.isSticky.update(() => false);
    }
  }
}
