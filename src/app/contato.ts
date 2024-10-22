import { Tipo } from './tipocontato'

export class Contato{
    private nome: string;
    private telefone: string;
    private email: string;
    private aniversario: Date;
    private tipo: Tipo;

    constructor(nm: string, tel: string, email: string, data: string, tipo: Tipo){
        this.nome = nm;
        this.telefone = tel;
        this.email = email;
        const [ano, mes, dia] = data.split('-').map(Number);
        this.aniversario = new Date(ano, mes - 1, dia);
        this.tipo = tipo;
    }
    getTipo(): Tipo | undefined{
        return this.tipo;
    }
    getNome(): string {
        return this.nome;
    }
    getTel(): string {
        return this.telefone;
    }
    getEmail(): string | undefined {
        return this.email;
    }
    getNiver(): Date | undefined {
        return this.aniversario;
    }
    setTipo(tipo: Tipo): void{
        this.tipo = tipo;
    }
    setNome(nome: string): void{
        this.nome = nome;
    }
    setTel(tel: string): void {
        this.telefone = tel;
    }
    setEmail(email: string): void{
        this.email = email;
    }
    setNiver(data: string): void{
        this.aniversario = new Date(data); 
    }
}

