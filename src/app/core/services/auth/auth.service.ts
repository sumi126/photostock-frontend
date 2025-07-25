import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegisterPayload, IAuth } from '../../interfaces/auth.interface';
import { BehaviorSubject } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { ConstService } from '../constants/const.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public baseURL: string;
  private authURL: string;
  private loggedIn = new BehaviorSubject<boolean>(this.hasToken());
  isLoggedIn$ = this.loggedIn.asObservable();
  route: any;
  constructor(private http: HttpClient, private router: Router, private activatedRoute:ActivatedRoute, private constant: ConstService) {
    this.baseURL = this.constant.url;
    this.authURL = this.constant.url + '/auth';
  }


  loginSuccess(token: string, redirectedRoute:string = '/profile', focusFragment:string = '') {
    localStorage.setItem('token', token);
    this.loggedIn.next(true);
    this.router.navigate([redirectedRoute], { fragment: focusFragment });
  }
  getImageData(id: any) {
    throw new Error('Method not implemented.');
  }
  checkUserSubscription() {
    throw new Error('Method not implemented.');
  }
  logoutSuccess() {
    localStorage.clear()

    this.loggedIn.next(false);
    this.router.navigate(['/login']);
  }


  hasToken(): boolean {
    return !!localStorage.getItem('token');
  }

  register(data: RegisterPayload) {
    console.log("Registration Payload", data)
    return this.http.post<IAuth>(this.authURL + "/register", data);
  }

  login(email: string, password: string) {
    return this.http.post<IAuth>(this.authURL + "/login", { email, password });
  }

  getUserSubscription(): 'none' | 'basic' | 'premium' {
    const user = JSON.parse(localStorage.getItem('user')!);
    return user?.subscription || 'none';
}
}