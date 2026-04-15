import { gerarAgenda } from '../data/generateAgenda';
import { linearSearch } from '../algorithms/search/linearSearch';
import { binarySearch } from '../algorithms/search/binarySearch';
import { medirTempo } from '../utils/timer';

// const TAMANHO = 1000;
const TAMANHO = 10000;
// const TAMANHO = 100000;
const agenda = gerarAgenda(TAMANHO);
const alvo = agenda[TAMANHO - 1].nome;

// O(n)
medirTempo('Linear Search O(n)', () => {
    linearSearch(alvo, agenda);
});

// O(log n)
medirTempo('Busca Binaria O(log n)', () => {
    binarySearch(agenda, alvo);
})