import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'
import { RegisterPageComponent } from './components/register-page/register-page.component';
import { HomeComponent } from './components/home/home.component';
import { AuthService } from './services/auth.service';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PopupComponent } from './components/popup/popup.component';
import { FormsModule } from '@angular/forms';
import { ResultsComponent } from './components/results/results.component';
import { HistoryComponent } from './components/history/history.component';
import { HistoryService } from './services/history.service';
import { EditComponent } from './components/history/edit/edit.component';
import { DeleteComponent } from './components/history/delete/delete.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterPageComponent,
    HomeComponent,
    LoginComponent,
    NavbarComponent,
    PopupComponent,
    ResultsComponent,
    HistoryComponent,
    EditComponent,
    DeleteComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [AuthService, HistoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
