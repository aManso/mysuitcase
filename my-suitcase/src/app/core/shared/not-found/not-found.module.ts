import { NgModule } from '@angular/core';
import { NotFoundComponent } from './containers/not-found/not-found.component';
import { NotFoundRoutingModule } from './not-found-routing.module';

@NgModule({
  imports: [
    NotFoundRoutingModule,
  ],
  declarations: [
    NotFoundComponent,
  ],
  exports: [],
  providers: [],
})
export class NotFoundModule {
  constructor() {}
}
