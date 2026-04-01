import { faker } from '@faker-js/faker';

export type Contato = {
    id: string;
    nome: string;
    telefone: string;
};

export function gerarAgenda(qtd: number): Contato[] {
    return Array.from({ length: qtd }, () => ({
        id: faker.string.uuid(),
        nome: faker.person.fullName(),
        telefone: faker.phone.number({ style: 'national' }),
    }));
}