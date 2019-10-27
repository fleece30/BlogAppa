import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { RegisterPageComponent } from './components/register-page/register-page.component';
import { LoginComponent } from './components/login/login.component';
import { PopupComponent } from './components/popup/popup.component';
import { ResultsComponent } from './components/results/results.component';
import { HistoryComponent } from './components/history/history.component';
import { DeleteComponent } from './components/history/delete/delete.component';
import { EditComponent } from './components/history/edit/edit.component';

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
    path: 'results',
    component: ResultsComponent
  },
  {
    path: 'history',
    component: HistoryComponent
  },
  {
    path: 'delete/:id',
    component: DeleteComponent
  },
  {
    path: 'edit/:id',
    component: EditComponent
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
