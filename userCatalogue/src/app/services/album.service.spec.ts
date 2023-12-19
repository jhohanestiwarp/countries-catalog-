import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { AlbumService } from './album.service';

describe('AlbumService', () => {
  let service: AlbumService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AlbumService],
    });

    service = TestBed.inject(AlbumService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrieve all albums', inject(
    [HttpTestingController, AlbumService],
    (httpMock: HttpTestingController, albumService: AlbumService) => {
      const dummyAlbums = [
        {
          id: 1,
          title: 'Album 1',
        },
      ];

      albumService.getAlbumAll().subscribe((albums) => {
        expect(albums).toEqual(dummyAlbums);
      });

      const req = httpMock.expectOne(`https://jsonplaceholder.typicode.com/photos`);
      expect(req.request.method).toBe('GET');
      req.flush(dummyAlbums);
    }
  ));

  it('should retrieve an album by ID', inject(
    [HttpTestingController, AlbumService],
    (httpMock: HttpTestingController, albumService: AlbumService) => {
      const dummyAlbum = {
        id: 1,
        title: 'Album 1',
        // ... other properties
      };

      albumService.getAlbumById(1).subscribe((album) => {
        expect(album).toEqual(dummyAlbum);
      });

      const req = httpMock.expectOne(`https://jsonplaceholder.typicode.com/photos/1`);
      expect(req.request.method).toBe('GET');
      req.flush(dummyAlbum);
    }
  ));
});
