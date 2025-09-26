import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BuildSetComponent } from './build-set-component/build-set-component';
import { AboutUsComponent } from './about-us-component/about-us-component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, BuildSetComponent, AboutUsComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('appieslegobib');
}
