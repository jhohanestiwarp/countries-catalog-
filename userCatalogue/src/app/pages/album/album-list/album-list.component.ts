import { Component } from '@angular/core';
import { AlbumService } from 'src/app/services/album.service';
import { MatDialog } from '@angular/material/dialog';
import { PhotoVewComponent } from '../components/photo-vew/photo-vew.component';

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.scss'],
})
export class AlbumListComponent {
  albums: any[] = [];
  photo: any = {};
  loading: boolean = false;

  constructor(private _albumService: AlbumService, public dialog: MatDialog) {}

  openDialog(id: number) {
    const dialogRef = this.dialog.open(PhotoVewComponent, {
      data: { photoId: id },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }

  ngOnInit() {
    this.getAlbums();
    console.log(this.albums)
  }

  getAlbums() {
    this.loading = true;

    this._albumService.getAlbumAll().subscribe({
      next: (data: any) => {
        this.albums = data.splice(1, 50);
        console.log(this.albums)
      },
      error: ({ e }: any) => console.log(e),
      complete: () => {
        this.loading = false;
      },
    });
  }

  deletePais(id: string){
    this._albumService.deleteAlbum(id).subscribe({
      next: (data: any) => {
        this.getAlbums();
      },
      error: ({ e }: any) => console.log(e),
      complete: () => {
        this.loading = false;
      },
    });
  }
}
