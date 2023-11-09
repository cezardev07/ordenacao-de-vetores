import { SelectionSortProps } from "../@types/selectionSortProps";
// importa o tipo para o method selectionSort
import { vetorProps } from "../@types/vetorProps";
// importa o tipo para um array de números

export class SelectionSort implements SelectionSortProps {
  public minIndex: number | undefined; // Índice do menor elemento na iteração

  // O(n^2) - Complexidade do Selection Sort
  public selectionSort(vetor: vetorProps) {
    // O(n) - Loop externo para percorrer o vetor
    for (let i: number = 0; i < vetor.length - 1; i++) {
      this.minIndex = i;

      // O(n) - Loop interno para encontrar o menor elemento
      for (let j: number = i + 1; j < vetor.length; j++) {
        // O(1) - Encontra o menor elemento
        if (vetor[j] < vetor[this.minIndex]) {
          this.minIndex = j;
        }
      }

      // Troca os elementos, se necessário
      if (this.minIndex !== i) {
        [vetor[i], vetor[this.minIndex]] = [vetor[this.minIndex], vetor[i]];
      }
    }

    // O(1) - Retorna o vetor ordenado
    return vetor;
  }
}