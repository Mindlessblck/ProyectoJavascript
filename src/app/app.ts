import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './component/header/header';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Header],
  templateUrl: './app.html',
  styleUrls: ['./app.css'] // Cambiado de styleUrl a styleUrls
})
export class App {
  protected readonly title = signal('proyecto-javascript');
}
