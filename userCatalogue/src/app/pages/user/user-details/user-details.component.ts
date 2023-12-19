import { Component } from '@angular/core';
import { IUser, initUser } from '../../../types/user.types';
import { UserService } from 'src/app/services/user.service';
import { ActivatedRoute } from '@angular/router';
import { PostService } from 'src/app/services/post.service';
import { IPost, initPost } from 'src/app/types/post.type';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'],
})
export class UserDetailsComponent {
  user: IUser = initUser;
  posts: IPost[] = [];
  comentaries: any[] = [];
  loading: boolean = false;
  userId: number | null = null;

  constructor(
    private _userService: UserService,
    private _postService: PostService,
    private activeRouter: ActivatedRoute
  ) {
    let id = this.activeRouter.snapshot.paramMap.get('id') || null;
    if (id) {
      this.userId = parseInt(id);
    }
  }

  ngOnInit() {
    this.getUsers();
    this.getPost();
  }

  getUsers() {
    if (this.userId) {
      this.loading = true;

      this._userService.getUserById(this.userId).subscribe({
        next: (data: any) => {
          console.log(data);
          this.user = data;
        },
        error: ({ e }: any) => console.log(e),
        complete: () => {
          this.loading = false;
        },
      });
    }
  }

  getPost() {
    this._postService.getPostAll().subscribe({
      next: (data: any) => {
        this.posts = data.filter((p: IPost) => p.userId === this.userId);
      },
      error: ({ e }: any) => console.log(e),
      complete: () => {
        this.loading = false;
      },
    });
  }
}
