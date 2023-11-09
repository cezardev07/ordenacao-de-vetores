// importa os tipos do vetor[] e view({})
import { vetorProps } from "./@types/vetorProps";
import { viewProps } from "./@types/viewProps";

// importa os methods de ordenagem de vetor
import { BubbleSort } from "./methods/BubbleSort";
import { InsertionSort } from "./methods/InsertionSort";
import { SelectionSort } from "./methods/SelectionSort";

// Inicializa um array de números (apenas números)
const array: vetorProps = [4, 1, 8, 7, 2, 3];

//Methods BubbleSort
const bubbleSortInstance = new BubbleSort(); // Instancia
const selectionSortInstance = new SelectionSort(); // Instancia
const insertionSortInstance = new InsertionSort(); // Instancia

// Exemplo de uso:

// O(1) - Imprime o vetor ordenado com BubbleSort
view({
  BubbleSort: bubbleSortInstance.bubbleSort([...array])
});

// O(1) - Imprime o vetor ordenado com SelectionSort
view({
  SelectionSort: selectionSortInstance.selectionSort([...array])
});

// O(1) - Imprime o vetor ordenado com InsertionSort
view({
  InsertionSort: insertionSortInstance.insertionSort([...array])
});

// O(1) - Imprime no console o resultado!
function view(props: viewProps){
  console.log(JSON.stringify(props, null, 3))
}