import { NgModule } from '@angular/core';
import { SharedModule } from '../core/shared/shared.module';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { SessionModule } from '../core/session/session.module';
import { LoginService } from '../core/login/login.service';
import { AuthenticationGuard } from '../core/guards/authentication.guard';
import { AuthorizationGuard } from '../core/guards/authorization.guard';
import { Logger } from '../core/services/logger.service';
import { AdminLogger } from './services/admin-logger.service';
import { AdminNavBarModule } from './components/navbar/admin-navbar.module';

@NgModule({
  imports: [
    // App
    SessionModule.forChild({MINUTES_TO_SHOW_COUNTDOWN: 30}),
    AdminRoutingModule,
    AdminNavBarModule,
    SharedModule,
  ],
  declarations: [AdminComponent],
  exports: [],
  providers: [
    LoginService,
    AuthenticationGuard,
    AuthorizationGuard,
    [{ provide: Logger, useClass: AdminLogger }]
  ],
})
export class AdminModule {
  constructor() {}
}