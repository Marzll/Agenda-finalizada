import { Component } from '@angular/core';
import { Contato } from '../contato';
import { Tipo } from '../tipocontato';
import { Agenda } from '../agenda';
import { AgendaService } from '../agenda.service';

@Component({
  selector: 'app-adiciona-contato',
  templateUrl: './adiciona-contato.component.html',
  styleUrl: './adiciona-contato.component.css'
})
export class AdicionaContatoComponent {
  tipos: string[]
  //agenda: Agenda
  constructor(public agenda: AgendaService){
    this.tipos = Object.values(Tipo)
    //this.agenda = new Agenda()
  }

  adicionar(nm: string, tel: string, email: string, data: string, tipo: string){
    /* criar um novo objeto a cada clique e adicionar na lista de contatos*/
    let pessoa = new Contato(nm, tel, email, data, this.getTipo(tipo))
    this.agenda.adicionar(pessoa)
  }
  getTipo(str: string): Tipo{
    let tp: Tipo = Tipo.AMIGO
      
      if(str === Tipo.FAMILIA){
        tp = Tipo.FAMILIA
      }
      else if(str === Tipo.TRABALHO){
        tp = Tipo.TRABALHO
      }
      else if(str === Tipo.ESCOLA){
        tp = Tipo.ESCOLA
      }
      return tp
    }
    
}


