import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserPostComponent } from './user-post.component';
import { PostService } from 'src/app/services/post.service';
import { of, throwError } from 'rxjs';

describe('UserPostComponent', () => {
  let component: UserPostComponent;
  let fixture: ComponentFixture<UserPostComponent>;
  let postService: jasmine.SpyObj<PostService>;

  beforeEach(() => {
    const postServiceSpy = jasmine.createSpyObj('PostService', ['getPostCommentary']);

    TestBed.configureTestingModule({
      declarations: [UserPostComponent],
      providers: [{ provide: PostService, useValue: postServiceSpy }],
    });

    fixture = TestBed.createComponent(UserPostComponent);
    component = fixture.componentInstance;
    postService = TestBed.inject(PostService) as jasmine.SpyObj<PostService>;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch post commentaries on ngOnInit', () => {
    const dummyPost: any = { id: 1, title: 'Post 1' };
    const dummyCommentaries = [{ id: 1, text: 'Comment 1' }];

    postService.getPostCommentary.and.returnValue(of(dummyCommentaries));

    component.post = dummyPost;

    fixture.detectChanges();

    expect(postService.getPostCommentary).toHaveBeenCalledWith(dummyPost.id);
    expect(component.comentaries).toEqual(dummyCommentaries);
    expect(component.loading).toBeFalse();
  });

  it('should handle error when fetching post commentaries', () => {
    const dummyPost: any = { id: 1, title: 'Post 1' };
    const errorMessage = 'An error occurred';

    postService.getPostCommentary.and.returnValue(throwError({ e: errorMessage }));

    component.post = dummyPost;

    fixture.detectChanges();

    expect(postService.getPostCommentary).toHaveBeenCalledWith(dummyPost.id);
    expect(component.comentaries).toEqual([]);
    expect(component.loading).toBeFalse();
    expect(console.log).toHaveBeenCalledWith(errorMessage);
  });
});
