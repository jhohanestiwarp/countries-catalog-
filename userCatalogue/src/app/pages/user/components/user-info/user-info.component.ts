import { Component, Input } from '@angular/core';
import { IUser, initUser } from 'src/app/types/user.types';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss'],
})
export class UserInfoComponent {
  @Input() user: IUser = initUser;
}
