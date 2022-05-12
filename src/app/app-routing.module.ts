import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AComponent } from './a/a.component';
import { BComponent } from './b/b.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: 'acomponent', component: AComponent },
      { path: 'bcomponent', component: BComponent },
      { path: '**', redirectTo: 'acomponent' }
    ])
  ],
  exports: [
    RouterModule,
  ],
  providers: [],

})
export class AppRoutingModule {}


