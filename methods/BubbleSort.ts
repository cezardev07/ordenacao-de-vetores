import { bubbleSortProps } from "../@types/bubbleSortProps";
// importa o tipo para o method bubbleSort
import { vetorProps } from "../@types/vetorProps";
// importa o tipo para um array de números

export class BubbleSort implements bubbleSortProps{
  public aux: number | undefined; // Variável auxiliar para trocar elementos
  public controller: boolean | undefined; // Variável de controle para verificar se o array está ordenado

  // O(n^2) - Complexidade do Bubble Sort
  public bubbleSort(vetor: vetorProps) {
    // O(n) - Loop externo para percorrer o vetor
    for (let i: number = 0; i < vetor.length; i++) {
      this.controller = true; // Define o controle como verdadeiro

      // O(n) - Loop interno para comparar e trocar elementos
      for (let j: number = 0; j < vetor.length - 1; j++) {
        // O(1) - Comparação e troca de elementos
        if (vetor[j] > vetor[j + 1]) {
          this.aux = vetor[j];
          vetor[j] = vetor[j + 1];
          vetor[j + 1] = this.aux;
          this.controller = false; // Define o controle como falso se houver trocas
        }
      }
      // Se não houver trocas, o array está ordenado
      if (this.controller) break;
    }

    // O(1) - Retorna o vetor ordenado
    return vetor;
  }
}
