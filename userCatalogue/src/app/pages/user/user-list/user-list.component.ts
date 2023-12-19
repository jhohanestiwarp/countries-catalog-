import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { IUser } from '../../../types/user.types';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent {
  userList: IUser[] = [];
  userListFilter: IUser[] = [];
  loading: boolean = false;

  textFilter: string = '';

  constructor(private _userService: UserService) {}

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.loading = true;

    this._userService.getUsersAll().subscribe({
      next: (data: any) => {
        this.userListFilter = data;
        this.userList = data;
      },
      error: ({ e }: any) => console.log(e),
      complete: () => {
        this.loading = false;
      },
    });
  }

  filterHandler() {
    // alert(this.textFilter)

    this.userListFilter = this.userList.filter(
      (user) =>
        user.id.toString() == this.textFilter ||
        user.name.toLowerCase().includes(this.textFilter.toLowerCase())
    );
  }
}
