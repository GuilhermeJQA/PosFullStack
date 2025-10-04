import { Component } from '@angular/core';
import { LoginForm } from '../login-form/login-form'; // ajuste o caminho se necessário

@Component({
  selector: 'app-login-template',
  templateUrl: './login-template.html',
  styleUrls: ['./login-template.scss'],
  imports: [LoginForm] 
})
export class LoginTemplate {}