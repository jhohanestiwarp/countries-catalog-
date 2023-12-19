import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = `${environment.API_URL}`

  constructor(private http: HttpClient) { }

  getUsersAll(){
    return this.http.get(`${this.apiUrl}/users`)
  }

  getUserById(id: number){
    return this.http.get(`${this.apiUrl}/users/${id}`)
  }
}
