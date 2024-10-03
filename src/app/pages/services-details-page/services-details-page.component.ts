import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MarkdownComponent, provideMarkdown } from 'ngx-markdown';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Generic } from '../../shared/models/generic.model';
/**
 *
 */
@Component({
  selector: 'app-services-details-page',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, MarkdownComponent],
  providers: [provideMarkdown()],
  preserveWhitespaces: true,
  templateUrl: './services-details-page.component.html',
  styleUrls: ['./services-details-page.component.scss']
})
export class ServicesDetailsPageComponent {
  public serviceDetailsData$: Observable<Generic> = new Observable<Generic>();
  private _apiUrl = environment.API_URL;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient
  ) {
    this.route.params.subscribe((param: Generic) => {
      const url = `${this._apiUrl}/services-posts?filters[slug][$eq]=${param.slug}&populate=*`;
      this.serviceDetailsData$ = this.http.get(url);
    });
  }
}
