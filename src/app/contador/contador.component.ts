import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent {
  // Inicializa a contagem em 0
  contador: number = 0;

  // Função para incrementar o contador
  incrementar() {
    this.contador++;
  }

  // Função para decrementar o contador
  decrementar() {
    this.contador--;
  }

  // Função para resetar o contador
  resetar() {
    this.contador = 0;
  }
}
