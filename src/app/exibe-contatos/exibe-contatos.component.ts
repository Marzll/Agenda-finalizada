import { Component } from '@angular/core';
import { AgendaService } from '../agenda.service';
import { Contato } from '../contato';

@Component({
  selector: 'app-exibe-contatos',
  templateUrl: './exibe-contatos.component.html',
  styleUrl: './exibe-contatos.component.css'
})
export class ExibeContatosComponent {
  contatos: Contato[]

  constructor(public agenda: AgendaService){
    this.contatos = this.agenda.obterTodos()
  }
}
