import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private apiUrl = `${environment.API_URL}`

  constructor(private http: HttpClient) { }

  getPostAll(){
    return this.http.get(`${this.apiUrl}/posts`)
  }

  getPostCommentary(id: number){
    return this.http.get(`${this.apiUrl}/posts/${id}/comments`)
  }
}
