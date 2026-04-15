type Contato = {
    id: string;
    nome: string;
    telefone: string;
}

type ResultadoBusca = {
    encontrado: boolean;
    id?: string,
    nome?: string;
    telefone?: string;
};

export function binarySearch(agenda: Contato[], nome: string): ResultadoBusca {
    let inicio = 0;
    let fim = agenda.length - 1
    
    while (inicio <= fim) {
        const meio = Math.floor((inicio + fim) / 2);
        const contato = agenda[meio];

        if (contato.nome === nome) {
            return {
                encontrado: true,
                id: contato.id,
                nome: contato.nome,
                telefone: contato.telefone,
            };
        }

        if (contato.nome < nome) {
            inicio = meio + 1;
        } else {
            fim = meio - 1;
        }
    }

    return {
        encontrado: false,
    };
}

const agenda = [
    { id: "1", nome: "Ana", telefone: "1111-1111" },
    { id: "2", nome: "Bruno", telefone: "2222-2222" },
    { id: "3", nome: "Carlos", telefone: "3333-3333" },
    { id: "4", nome: "Daniel", telefone: "4444-4444" },
    { id: "5", nome: "Eduardo", telefone: "5555-5555" },
    { id: "6", nome: "Fernanda", telefone: "6666-6666" }
];

console.log(binarySearch(agenda, "Carlos"));