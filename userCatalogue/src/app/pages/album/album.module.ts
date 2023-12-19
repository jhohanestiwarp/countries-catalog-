import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumListComponent } from './album-list/album-list.component';
import { AlbumRoutingModule } from './album-routing.module';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { PhotoVewComponent } from './components/photo-vew/photo-vew.component';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { PaisNewComponent } from './pais-new/pais-new.component';

@NgModule({
  declarations: [AlbumListComponent, PhotoVewComponent, PaisNewComponent],
  imports: [
    CommonModule,
    AlbumRoutingModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    ReactiveFormsModule
  ],
})
export class AlbumModule {}
