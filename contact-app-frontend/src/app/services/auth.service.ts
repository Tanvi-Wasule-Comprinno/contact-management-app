import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = 'http://172.24.26.188:7070/api/users';

  constructor(private http: HttpClient) {}

  login(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, data);
  }
  register(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/register`, data);
  }
  // ✅ SAVE TOKEN
  saveToken(token: string): void {
    localStorage.setItem('token', token);
  }

  // ✅ GET TOKEN
  getToken(): string | null {
    return localStorage.getItem('token');
  }

  // ✅ LOGOUT
  logout(): void {
    localStorage.removeItem('token');
  }

  // ✅ CHECK LOGIN
  isLoggedIn(): boolean {
    return !!this.getToken();
  }
}
