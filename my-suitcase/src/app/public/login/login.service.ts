import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { User, UserLogin} from '../../core/models/user';
import { Subject, Observable, of } from 'rxjs';
import { catchError, retry, map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private readonly URL_API = environment.apiUrl + 'users/';
  private readonly URL_CHECK_EXISTING_USER = environment.apiUrl + 'login/';
  private _selectedUser: User;
  public logged$: Subject<User|boolean>;

  public constructor(
    private _http: HttpClient,
    private _router: Router,
  ) {
    this.logged$ = new Subject<User|boolean>();
  }

  public login (form: {email: string, password: string}): Observable<User|boolean> {
    const $loginResponse = new Subject<User|boolean>();
    (this._http.post(this.URL_CHECK_EXISTING_USER, form) as Observable<UserLogin>).subscribe((response: UserLogin|boolean) => {
      if (typeof response === 'object') {
        console.log('user logged', response.user);
        this._selectedUser = response.user;
        sessionStorage.setItem('activeUserToken', response.token);
        $loginResponse.next(response.user);
        this.logged$.next(response.user)
      } else {
        $loginResponse.next(response);
        this.logged$.next(response)
      }
    }, (error: any) => {
      $loginResponse.error(error);
    });
    return $loginResponse;
  }

  public setActiveUser(user: User) {
    this._selectedUser = user;
  }

  public getActiveUser(): User {
    return this._selectedUser;
  }

  public isLoggedIn(): boolean {
    return !!sessionStorage.getItem('activeUserToken');
  }

  public getToken(): string {
    return sessionStorage.getItem('activeUserToken');
  }

  public getUsers(): Observable<User[]> {
    return this._http.get(this.URL_API).pipe(
      retry(3),
      map(res => {
        if (!res) {
          throw new Error('there were not found users!');
        }
        return res;
      }),
      catchError((err: any) => {
        console.log(err.message);
        if (err instanceof HttpErrorResponse) {
          if (err.status === 401 || err.status === 500) {
            console.log('unauthorized request');
            this._router.navigate(['/login'])
          }
        }
        return of([])
      })
    ) as Observable<User[]>;
  }

  public getUser(_id: string): Observable<User> {
    return this._http.get(this.URL_API + _id).pipe(
      retry(3),
      map(res => {
        if (!res) {
          throw new Error('User not found');
        }
        return res;
      })
    ) as Observable<User>;
  }

  public addUser(user: User): Observable<any> {
    return this._http.post(this.URL_API, user).pipe(
      retry(3),
      map(res => {
        if (!res) {
          throw new Error('User couldnt get added');
        }
        return res;
      })
    ) as Observable<any>;
  }

  public updateUser(user: User): Observable<any> {
    return this._http.put(this.URL_API + user._id, user).pipe(
      retry(3),
      map(res => {
        if (!res) {
          throw new Error('User couldnt get updated');
        }
        return res;
      })
    ) as Observable<any>;
  }

  public deleteUser(_id: string): Observable<any> {
    return this._http.delete(this.URL_API + _id).pipe(
      retry(3),
      map(res => {
        if (!res) {
          throw new Error('User couldnt get deleted');
        }
        return res;
      })
    ) as Observable<any>;
  }

  public logout () {
    this._selectedUser = null;
    sessionStorage.removeItem('activeUserToken');
    this.logged$.next(false);
    this._router.navigate(['/']);
  }
}
