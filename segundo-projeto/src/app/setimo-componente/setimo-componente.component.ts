import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-setimo-componente',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './setimo-componente.component.html',
  styleUrl: './setimo-componente.component.css'
})
export class SetimoComponenteComponent {
  
  exibir:boolean = true;

  exibir1:boolean = true;

  exibir2:boolean = true;
  //Função de ação para trocar a imagem
  acao(){
    if(this.exibir === true){
      this.exibir = false
    }else {
      this.exibir = true
    }
  }
  acao1(){
    if(this.exibir1 === true){
      this.exibir1 = false
    }else {
      this.exibir1 = true
    }
  }

  acao2(){
    if(this.exibir2 === true){
      this.exibir2 = false
    }else {
      this.exibir2 = true
    }
  }
}
