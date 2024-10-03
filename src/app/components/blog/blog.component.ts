import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { map, Observable } from 'rxjs';
import { Generic } from '../../shared/models/generic.model';
import { BlogService } from './blog.service';

/**
 *
 */
@Component({
  selector: 'app-blog',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterModule, CommonModule],
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent {
  public blogData$: Observable<Generic>;

  constructor(private content: BlogService) {
    this.blogData$ = this.content.getData$().pipe(map((response) => response.data));
  }
}
