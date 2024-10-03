import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NavigationCancel, NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { AngularQueryDevtools } from '@tanstack/angular-query-devtools-experimental';
import { NgxScrollTopComponent, NgxScrollTopModule } from 'ngx-scrolltop';
import { filter, Subscription } from 'rxjs';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TopHeaderComponent } from './components/top-header/top-header.component';

/**
 *
 */
@Component({
  selector: 'app-root',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    RouterOutlet,
    FooterComponent,
    NgxScrollTopModule,
    NavbarComponent,
    CommonModule,
    TopHeaderComponent,
    AngularQueryDevtools
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
  /*providers: [
    Location,
    {
      provide: LocationStrategy,
      useClass: PathLocationStrategy
    }
  ]*/
})
export class AppComponent implements OnInit, OnDestroy {
  @ViewChild(NgxScrollTopComponent) ngxScrollTop?: NgxScrollTopComponent;
  private _routerSubscription?: Subscription;

  constructor(public router: Router) {}

  /**
   * Metodo para inicializar el componente
   */
  ngOnInit() {
    this.recallJsFuntions();
  }

  /**
   * Metodo para destruir el componente
   */
  ngOnDestroy(): void {
    this._routerSubscription?.unsubscribe();
  }

  /**
   * Metodo para recordar las funciones de js
   */
  recallJsFuntions() {
    this._routerSubscription = this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd || event instanceof NavigationCancel))
      .subscribe((event) => {
        this.ngxScrollTop?.scrollToTop();
        if (!(event instanceof NavigationEnd)) {
          return;
        }
      });
  }
}
