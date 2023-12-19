import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { UserService } from './user.service';

describe('UserService', () => {
  let service: UserService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UserService],
    });

    service = TestBed.inject(UserService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrieve all users', inject(
    [HttpTestingController, UserService],
    (httpMock: HttpTestingController, userService: UserService) => {
      const dummyUsers = [
        {
          id: 1,
          name: 'John Doe',
          username: 'johndoe',
        },
      ];

      userService.getUsersAll().subscribe((users) => {
        expect(users).toEqual(dummyUsers);
      });

      const req = httpMock.expectOne(`https://jsonplaceholder.typicode.com/users`);
      expect(req.request.method).toBe('GET');
      req.flush(dummyUsers);
    }
  ));

  it('should retrieve a user by ID', inject(
    [HttpTestingController, UserService],
    (httpMock: HttpTestingController, userService: UserService) => {
      const dummyUser = {
        id: 1,
        name: 'John Doe',
        username: 'johndoe',
        // ... other properties
      };

      userService.getUserById(1).subscribe((user) => {
        expect(user).toEqual(dummyUser);
      });

      const req = httpMock.expectOne(`https://jsonplaceholder.typicode.com/users/1`);
      expect(req.request.method).toBe('GET');
      req.flush(dummyUser);
    }
  ));
});