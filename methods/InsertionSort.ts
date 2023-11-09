import { InsertionSortProps } from "../@types/insertionSortProps";
// importa o tipo para o method insertionSort
import { vetorProps } from "../@types/vetorProps";
// importa o tipo para um array de números

export class InsertionSort implements InsertionSortProps {
  public current: number | undefined; // Elemento atual na iteração

  // O(n^2) - Complexidade do Insertion Sort
  public insertionSort(vetor: vetorProps) {
    // O(n) - Loop externo para percorrer o vetor
    for (let i: number = 1; i < vetor.length; i++) {
      this.current = vetor[i];
      let j: number = i - 1;

      // O(n) - Loop interno para mover elementos e inserir o elemento atual
      while (j >= 0 && vetor[j] > this.current) {
        vetor[j + 1] = vetor[j];
        j--;
      }

      vetor[j + 1] = this.current;
    }

    // O(1) - Retorna o vetor ordenado
    return vetor;
  }
}