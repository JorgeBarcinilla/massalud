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
  selector: 'app-blog-details-page',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, MarkdownComponent],
  providers: [provideMarkdown()],
  preserveWhitespaces: true,
  templateUrl: './blog-details-page.component.html',
  styleUrls: ['./blog-details-page.component.scss']
})
export class BlogDetailsPageComponent {
  public blogDetailsData$: Observable<Generic> = new Observable<Generic>();
  private _apiUrl = environment.API_URL;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient
  ) {
    this.route.params.subscribe((param: Generic) => {
      const url = `${this._apiUrl}/blog-posts?filters[slug][$eq]=${param.slug}&populate=*`;
      this.blogDetailsData$ = this.http.get(url);
    });
  }
}
