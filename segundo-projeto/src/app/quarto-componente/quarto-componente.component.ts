import { Component } from '@angular/core';

@Component({
  selector: 'app-quarto-componente',
  standalone: true,
  imports: [],
  templateUrl: './quarto-componente.component.html',
  styleUrl: './quarto-componente.component.css'
})
export class QuartoComponenteComponent {

 //Criação de váriavel para interpolação
 nome:string = 'vini';
 idade:number = 29;
 numeroTelefone:number = 40028922 ;
}
