import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserRoutingModule } from './user-routing.module';
import { TableComponent } from 'src/app/components/table/table.component';
import { UserTableComponent } from './components/user-table/user-table.component';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { UserPostComponent } from './components/user-post/user-post.component';
import { CardComentaryComponent } from './components/card-comentary/card-comentary.component';



@NgModule({
  declarations: [
    UserDetailsComponent,
    UserListComponent,
    TableComponent,
    UserTableComponent,
    UserInfoComponent,
    UserPostComponent,
    CardComentaryComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule
  ]
})
export class UserModule { }
