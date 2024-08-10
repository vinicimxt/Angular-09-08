import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TerceiroComponenteComponent } from './terceiro-componente/terceiro-componente.component';
import { QuartoComponenteComponent } from './quarto-componente/quarto-componente.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TerceiroComponenteComponent,QuartoComponenteComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'segundo-projeto';
}
