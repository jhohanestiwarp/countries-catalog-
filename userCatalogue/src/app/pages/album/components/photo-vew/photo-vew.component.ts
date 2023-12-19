import { Component, Inject, OnInit } from '@angular/core';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
} from '@angular/material/dialog';
import { NgIf } from '@angular/common';
import { DialogData } from 'src/app/types/album.type';
import { AlbumService } from 'src/app/services/album.service';

@Component({
  selector: 'app-photo-vew',
  templateUrl: './photo-vew.component.html',
  styleUrls: ['./photo-vew.component.scss'],
})
export class PhotoVewComponent {
  loading: boolean = false;
  photo: any = {};
  constructor(
    private _albumService: AlbumService,
    public dialogRef: MatDialogRef<PhotoVewComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  ngOnInit() {
    this.getPhotoById();
  }

  getPhotoById() {
    this.loading = true;

    this._albumService.getAlbumById(this.data.photoId).subscribe({
      next: (data: any) => {
        this.photo = data;
      },
      error: ({ e }: any) => console.log(e),
      complete: () => {
        this.loading = false;
      },
    });
  }
}
