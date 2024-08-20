import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-primeiro-componente',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './primeiro-componente.component.html',
  styleUrl: './primeiro-componente.component.css'
})
export class PrimeiroComponenteComponent {
  
linguagem:string = 'CSS'

}
