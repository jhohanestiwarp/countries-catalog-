import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  private apiUrl = `${environment.API_URL}`

  constructor(private http: HttpClient) { }

  newPais(data: any){
    return this.http.post(`${this.apiUrl}/paises`, data)
  }

  getAlbumAll(){
    return this.http.get(`${this.apiUrl}/paises`)
  }

  deleteAlbum(id: string):Observable<any>{
    return this.http.delete(`${this.apiUrl}/paises/${id}`)
  }

  getAlbumById(id: number){
    return this.http.get(`${this.apiUrl}/photos/${id}`)
  }
}
