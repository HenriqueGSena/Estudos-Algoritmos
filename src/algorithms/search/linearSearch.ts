import { Contato } from '../../data/generateAgenda';

export function linearSearch(nome: string, agenda: Contato[]) {
    return agenda.find(c => c.nome === nome);
}