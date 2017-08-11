import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
  private token: string;

  constructor(private router: Router) { }
  loginUser(email: string, password:string)
  {
    this.token='dummyToken';
    localStorage.setItem('userToken', this.token);
    this.router.navigate(['/']);
  }
  logoutUser()
  {
    localStorage.removeItem('userToken');
    this.router.navigate(['/login']);
  }
  getToken()
  {
    return this.token;
  }
}
