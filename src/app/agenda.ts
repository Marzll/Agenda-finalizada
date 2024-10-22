import { Contato } from './contato';

export class Agenda {
  private contatos: Contato[]
  constructor() {
      this.contatos = []
  }

  /** Adiciona um novo contato na agenda. */
  adicionar(c: Contato): boolean {
      if (!this.existe(c))  {
          this.contatos.push(c)
          return true
      }
      return false
  }
existe (c: Contato): boolean {
      if (this.contatos.find(cont => cont.getEmail() === c.getEmail() && 
                                     cont.getTel() === c.getTel())) { 
          return true
      }
      return false
  }

  obterTodos(): Contato[] {
      return [...this.contatos]
  }
/** Busca o contato pelo nome na lista e retorna o objeto
   *  correspondente ao contato. Caso não encontre devolve 
   *  undefined.
   */
  obterContatoPorNome(nome: string): Contato | undefined {
      for (let pos = 0; pos < this.contatos.length; pos++) {
          let contato = this.contatos[pos]
          if (contato.getNome().trim().toLowerCase() === nome.trim().toLowerCase()) {
              return contato
          }
      }
      return undefined
  }
}
