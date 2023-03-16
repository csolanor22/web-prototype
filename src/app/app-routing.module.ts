import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginCardComponent } from './login-card/login-card.component';
import { MainComponent } from './main/main.component';
import { OlvidoPassComponent } from './olvido-pass/olvido-pass.component';
import { RegistrarseComponent } from './registrarse/registrarse.component';

const routes: Routes = [
  { path: 'registrarse', component: RegistrarseComponent },
  { path: '', component: LoginCardComponent },
  { path: 'forgot-pass', component: OlvidoPassComponent },
  { path: 'main', component: MainComponent }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
