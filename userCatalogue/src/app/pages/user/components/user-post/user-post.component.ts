import { Component, Input } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { IPost, initPost } from 'src/app/types/post.type';

@Component({
  selector: 'app-user-post',
  templateUrl: './user-post.component.html',
  styleUrls: ['./user-post.component.scss'],
})
export class UserPostComponent {
  @Input() post: IPost = initPost;

  comentaries: any[] = [];
  loading: boolean = false;

  constructor(private _postService: PostService) {}

  ngOnInit() {
    this.getPostComentary();
  }

  getPostComentary() {
    this.loading = true;

    this._postService.getPostCommentary(this.post.id).subscribe({
      next: (data: any) => {
        this.comentaries = data;
      },
      error: ({ e }: any) => console.log(e),
      complete: () => {
        this.loading = false;
      },
    });
  }
}
