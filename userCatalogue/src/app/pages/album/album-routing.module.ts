import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlbumListComponent } from './album-list/album-list.component';
import { PaisNewComponent } from './pais-new/pais-new.component';

const routes: Routes = [
  {
    path: '',
    component: AlbumListComponent,
  },
  {
    path: 'new',
    component: PaisNewComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlbumRoutingModule { }
