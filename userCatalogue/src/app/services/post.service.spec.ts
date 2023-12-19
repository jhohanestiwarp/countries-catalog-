import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { PostService } from './post.service';

describe('PostService', () => {
  let service: PostService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PostService],
    });

    service = TestBed.inject(PostService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrieve all posts', inject(
    [HttpTestingController, PostService],
    (httpMock: HttpTestingController, postService: PostService) => {
      const dummyPosts = [
        {
          id: 1,
          title: 'Post 1',
        },
  
      ];

      postService.getPostAll().subscribe((posts) => {
        expect(posts).toEqual(dummyPosts);
      });

      const req = httpMock.expectOne(`https://jsonplaceholder.typicode.com/posts`);
      expect(req.request.method).toBe('GET');
      req.flush(dummyPosts);
    }
  ));

  it('should retrieve comments for a post by ID', inject(
    [HttpTestingController, PostService],
    (httpMock: HttpTestingController, postService: PostService) => {
      const dummyComments = [
        {
          id: 1,
          body: 'Comment 1',
        },
      ];

      postService.getPostCommentary(1).subscribe((comments) => {
        expect(comments).toEqual(dummyComments);
      });

      const req = httpMock.expectOne(`https://jsonplaceholder.typicode.com/posts/1/comments`);
      expect(req.request.method).toBe('GET');
      req.flush(dummyComments);
    }
  ));
});
