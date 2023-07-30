"use strict";(self.webpackChunkmy_suitcase=self.webpackChunkmy_suitcase||[]).push([[195],{7195:(z,T,t)=>{t.r(T),t.d(T,{LoginModule:()=>J});var r=t(6223),h=t(1782),_=t(5879),O=t(2018),E=t(4166),u=t(1543),m=t(1508),C=t(4973),c=t(8006),I=t(2939),N=t(6814),P=t(8882),F=t(1584),f=t(2032),l=t(1580);function $(e,i){1&e&&(_.TgZ(0,"mat-error"),_.SDv(1,15),_.qZA())}function U(e,i){1&e&&(_.TgZ(0,"mat-error"),_.tHW(1,16),_._UZ(2,"strong"),_.N_p(),_.qZA())}function b(e,i){1&e&&(_.TgZ(0,"mat-error"),_.tHW(1,21),_._UZ(2,"strong"),_.N_p(),_.qZA())}function v(e,i){if(1&e&&(_.TgZ(0,"mat-form-field",2)(1,"mat-label"),_.SDv(2,17),_.qZA(),_._UZ(3,"input",18),_.YNc(4,b,3,0,"mat-error",4),_.TgZ(5,"mat-hint",19),_.SDv(6,20),_.qZA()()),2&e){const o=_.oxw();_.xp6(4),_.Q6J("ngIf",o.loginForm.get("password").hasError("required"))}}function Y(e,i){1&e&&(_.TgZ(0,"div",22),_._UZ(1,"input",23),_.TgZ(2,"label",24),_.SDv(3,25),_.qZA()())}function y(e,i){if(1&e){const o=_.EpF();_.TgZ(0,"a",26),_.NdJ("click",function(){_.CHM(o);const a=_.oxw();return _.KtG(a.toggleMode())}),_.SDv(1,27),_.qZA()}}function Z(e,i){if(1&e){const o=_.EpF();_.TgZ(0,"a",26),_.NdJ("click",function(){_.CHM(o);const a=_.oxw();return _.KtG(a.toggleMode())}),_.SDv(1,28),_.qZA()}}const D=function(e){return{"disabled-button":e}},A=new _.OlP("BASE_ROUTE"),k=[{path:"",component:(()=>{class e{constructor(o,n,a,S,g,d){this._loginService=o,this._authenticationGuard=n,this._router=a,this.baseRoute=S,this.fb=g,this._snackBar=d,this.loginMode=!0}ngOnInit(){this.loginForm=this._setLoginForm()}_setLoginForm(){return this.fb.group({keepSession:[null],email:[null,r.kI.compose([r.kI.required,r.kI.email])],password:new r.p4(null,[r.kI.required,r.kI.minLength(6),r.kI.maxLength(20)])})}_setRememberForm(){return this.fb.group({email:[null,r.kI.compose([r.kI.required,r.kI.email])]})}toggleMode(){this.loginMode=!this.loginMode,this.loginForm=this.loginMode?this._setLoginForm():this._setRememberForm()}goTo(o){this._router.navigate([o])}submit(){this.loginForm.valid&&this._loginService.login(this.loginForm.value).subscribe(o=>{o?this._router.navigate([this._authenticationGuard.lastIntendedTargetRoute?this._authenticationGuard.lastIntendedTargetRoute:this.baseRoute]):this._showGeneralError()},o=>{o.error===E.G.USER_NOT_FOUND?this._snackBar.open(E.j.USER_NOT_FOUND.title,"",{duration:O.Hu}):this._showGeneralError()})}_showGeneralError(){this._snackBar.open(u.v.GENERAL_ERROR.title,u.v.GENERAL_ERROR.message,{duration:O.qY})}}return e.\u0275fac=function(o){return new(o||e)(_.Y36(m.r),_.Y36(C.Q),_.Y36(c.F0),_.Y36(A),_.Y36(r.QS),_.Y36(I.ux))},e.\u0275cmp=_.Xpm({type:e,selectors:[["app-login"]],decls:22,vars:11,consts:function(){let i,o,n,a,S,g,d,M,R,p,G,L;return i="Introduce your email",o="Go ahead!",n="I am new, Let's start!",a=" the e-mail format is not valid ",S=" The field Email is " + "\ufffd#2\ufffd" + "requered" + "\ufffd/#2\ufffd" + "",g="Password",d="Introduce your password",M="Password must contain between 6 and 20 characters and include 1 lowercase, 1 capitalcase, 1 number and 1 special character",R=" The field password is " + "\ufffd#2\ufffd" + "requered" + "\ufffd/#2\ufffd" + "",p="Remember me",G="Did you forget the password?",L="I already remember the passoword :)",[[1,"form-contact","col-lg-6","col-xl-6","offset-xl-1",3,"formGroup"],[1,"search-wrapper"],["appearance","outline",1,"full-width","login-field"],["type","email","matInput","","autocomplete","off","formControlName","email","placeholder",i],[4,"ngIf"],["class","full-width login-field","appearance","outline",4,"ngIf"],["class","form-check",4,"ngIf"],[1,"button-block"],["type","submit",1,"button","border-1","mt-3",3,"disabled","ngClass","click"],o,["type","submit",1,"button","border-1","mt-3",3,"click"],n,["href","javascript:void(0)","class","nav-link","role","button","aria-haspopup","true","aria-expanded","false",3,"click",4,"ngIf","ngIfElse"],["registerMode",""],["alt","login image","src","assets/img/login/undraw_travelers.svg",1,"login-img"],a,S,g,["type","password","matInput","","autocomplete","off","formControlName","password","placeholder",d],[1,"hint-password"],M,R,[1,"form-check"],["type","checkbox","id","rememberme","formControlName","keepSession",1,"form-check-input"],["for","rememberme",1,"form-check-label"],p,["href","javascript:void(0)","role","button","aria-haspopup","true","aria-expanded","false",1,"nav-link",3,"click"],G,L]},template:function(o,n){if(1&o&&(_._UZ(0,"navbar-component"),_.TgZ(1,"form",0)(2,"div",1)(3,"mat-form-field",2)(4,"mat-label"),_._uU(5,"Email"),_.qZA(),_._UZ(6,"input",3),_.YNc(7,$,2,0,"mat-error",4),_.YNc(8,U,3,0,"mat-error",4),_.qZA(),_.YNc(9,v,7,1,"mat-form-field",5),_.YNc(10,Y,4,0,"div",6),_.TgZ(11,"div",7)(12,"button",8),_.NdJ("click",function(){return n.submit()}),_.SDv(13,9),_.qZA(),_.TgZ(14,"button",10),_.NdJ("click",function(){return n.goTo("register")}),_.SDv(15,11),_.qZA()(),_.TgZ(16,"small"),_.YNc(17,y,2,0,"a",12),_.YNc(18,Z,2,0,"ng-template",null,13,_.W1O),_.qZA()(),_._UZ(20,"img",14),_.qZA(),_._UZ(21,"footer-component")),2&o){const a=_.MAs(19);_.xp6(1),_.Q6J("formGroup",n.loginForm),_.xp6(6),_.Q6J("ngIf",n.loginForm.get("email").hasError("email")&&!n.loginForm.get("email").hasError("required")),_.xp6(1),_.Q6J("ngIf",n.loginForm.get("email").hasError("required")),_.xp6(1),_.Q6J("ngIf",n.loginMode),_.xp6(1),_.Q6J("ngIf",n.loginMode),_.xp6(2),_.Q6J("disabled",!n.loginForm.valid)("ngClass",_.VKq(9,D,!n.loginForm.valid)),_.xp6(5),_.Q6J("ngIf",n.loginMode)("ngIfElse",a)}},dependencies:[N.mk,N.O5,r._Y,r.Fj,r.Wl,r.JJ,r.JL,r.sg,r.u,P.w,F.c,f.Nt,l.KE,l.hX,l.bx,l.TO],styles:["[_nghost-%COMP%]   form[_ngcontent-%COMP%]{margin:auto;padding-top:10%}[_nghost-%COMP%]   .login-img[_ngcontent-%COMP%]{width:200px;display:block;margin:20px auto auto}.login-field[_ngcontent-%COMP%]:not(:first-child){margin-top:20px}.hint-password[_ngcontent-%COMP%]{margin-top:20px}.form-check[_ngcontent-%COMP%]{margin-top:50px;display:flex;padding:0;align-items:center}.form-check[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]{margin:0}.form-check[_ngcontent-%COMP%]   .form-check-input[_ngcontent-%COMP%]{margin-right:7px;position:relative}"]}),e})()}];let w=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=_.oAB({type:e}),e.\u0275inj=_.cJS({imports:[c.Bz.forChild(k),c.Bz]}),e})();var X=t(5319),x=t(8185);let J=(()=>{class e{constructor(){}}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=_.oAB({type:e}),e.\u0275inj=_.cJS({providers:[m.r,C.Q,X.N,{provide:A,useValue:"/"}],imports:[N.ez,h.m,x._.forRoot({MINUTES_TO_SHOW_COUNTDOWN:void 0}),w,r.UX,I.ZX,f.c]}),e})()}}]);