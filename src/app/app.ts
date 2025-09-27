import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrls: ['./app.css'] // Cambiado de styleUrl a styleUrls
})
export class App {
  protected readonly title = signal('proyecto-javascript');
}
