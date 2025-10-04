import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginTemplate } from './pages/auth/login-template/login-template'; 
import { CadastroCliente } from './pages/cliente/cadastro-cliente/cadastro-cliente';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LoginTemplate, CadastroCliente],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('sistem-bank');
}