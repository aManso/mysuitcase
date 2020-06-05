import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../../login/login.service';
import { User } from '../../../../core/models/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  // styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  public isAdmin:boolean;
  public isLogged = false;

  constructor(
    private _loginService: LoginService,
    private _router: Router,
  ) { }

  ngOnInit() {
    this.isLogged = !!this._loginService.isLoggedIn();
    const user = this._loginService.getActiveUser();
    this.isAdmin = this.isLogged && user && user.admin;
    this._loginService.logged$.subscribe((loggedUser: User|boolean) => {
      this.isLogged = !!loggedUser;
    });
  }

  public goTo(path: string) {
    this._router.navigate([path]);
  }
}
