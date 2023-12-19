import { Component, Input, OnInit } from '@angular/core';
import { IUser } from '../../../../types/user.types';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss']
})
export class UserTableComponent {
  @Input() users: IUser[] = [];

  OnInit(){
    console.log(this.users)
  }
}
