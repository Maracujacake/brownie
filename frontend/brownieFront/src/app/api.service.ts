import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl = 'http://backend:3000';

  constructor(private http: HttpClient) { }

  login(id: number, senha: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/users/login`, { id, senha });
  }

  register(nome: string, senha: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/users/create`, { nome, senha },  { responseType: 'text' });
  }

  getTasks(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/tasks/${id}`);
  }
}
