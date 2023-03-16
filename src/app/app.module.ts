import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { LoginCardComponent } from './login-card/login-card.component';
import { RegistrarseComponent } from './registrarse/registrarse.component';
import { AppRoutingModule } from './app-routing.module';
import { OlvidoPassComponent } from './olvido-pass/olvido-pass.component';
import { NavbarComponent } from './commons/navbar/navbar.component';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginCardComponent,
    RegistrarseComponent,
    OlvidoPassComponent,
    NavbarComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
