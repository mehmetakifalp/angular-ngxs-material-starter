import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './ui/layout/layout.component';
import { AppComponent } from './app.component';


const routes: Routes = [

  { path: '', redirectTo: 'home', canActivate: [], pathMatch: 'full' },
  {
    path: 'home',
    component: AppComponent
  },
  {
    path: '**',
    redirectTo: '/my-account/overview',
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
