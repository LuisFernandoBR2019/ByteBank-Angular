import { Component } from "@angular/core";

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia-component.html',
  styleUrls: ['nova-transferencia-component.scss']
})
export class NovaTransferenciaComponent {

  valor:number = 0;
  destino:number = 0;

  transferir() {
    console.log('Trasferencia realizada. \n Valor: '+ this.valor +' \n Destino: '+ this.destino);
  }
}
