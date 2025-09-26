import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BuildSetComponent } from './build-set-component/build-set-component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, BuildSetComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('appieslegobib');
}
