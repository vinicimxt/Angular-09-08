import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-oitavo-componente',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './oitavo-componente.component.html',
  styleUrl: './oitavo-componente.component.css'
})
export class OitavoComponenteComponent {

  //Vetor de nomes
nomes:string[] = ['Vinicim', 'Deborah' , 'Luquinhas' , 'Gabriel'];


}
