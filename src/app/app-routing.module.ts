import { NgModule, SimpleChange } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './ui/layout/layout.component';
import { SimpleFormComponent } from './pages/forms/simple-form.component';


const routes: Routes = [

  { path: '', redirectTo: 'home', canActivate: [], pathMatch: 'full' },
  {
    path: 'home',
    component: LayoutComponent
  },
  {
    path: 'simple-form',
    component: SimpleFormComponent
  },
  {
    path: '**',
    redirectTo: 'home',
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
