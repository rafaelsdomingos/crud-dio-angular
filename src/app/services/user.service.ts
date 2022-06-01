import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiURL = 'https://sheetdb.io/api/v1/b33busras4zv3'
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  }

  constructor( private httpClient: HttpClient ) { }

  
  //C.R.U.D - CREATE, READ, UPDATE, DELETE
  
  //Salva o usuario no banco de dados (CREATE)
  postUser(user: User): Observable<User>{
    return this.httpClient.post<User>(this.apiURL, user, this.httpOptions)
  }

  //retorna a lista de usuários da API (READ)
  getUsers(): Observable<User[]>{
    return this.httpClient.get<User[]>(this.apiURL);
  }

  //Editar usuários pelo ID (UPDATE)
  updateUser(id: string, user: User): Observable<User>{
    return this.httpClient.put<User>(`${this.apiURL}/id/${id}`, user, this.httpOptions);
  }

  //Exclui o usuário do banco de dados (DELETE)
  deleteUser(id: number): Observable<User>{
    return this.httpClient.delete<User>(`${this.apiURL}/id/${id}`);
  }

  //retorna um usuário pelo ID
  getUser(id: string): Observable<User[]>{
    return this.httpClient.get<User[]>(`${this.apiURL}/search?id=${id}`);
  }

  
}
