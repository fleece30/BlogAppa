import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { RegisterPageComponent } from './components/register-page/register-page.component';
import { LoginComponent } from './components/login/login.component';
import { PopupComponent } from './components/popup/popup.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'register',
    component: RegisterPageComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'popup',
    component: PopupComponent
  },
  {
    path: '**',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
