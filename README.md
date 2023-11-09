<img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" width="100%"/>

## Algoritmos de ordenação de vetores 

Métodos de ordenação de vetores, também conhecidos como algoritmos de ordenação, são procedimentos ou algoritmos que organizam os elementos de um vetor (ou array) em uma ordem específica, geralmente em ordem crescente ou decrescente. A ordenação é uma operação comum em ciência da computação e é usada em uma variedade de aplicativos, como classificação de dados, pesquisa eficiente e organização de informações.

Existem muitos algoritmos diferentes para ordenar vetores, cada um com suas próprias características e eficiência em termos de tempo e espaço. Alguns dos algoritmos de ordenação mais comuns incluem:

<ol>
  <li>
    <strong>Bubble Sort:</strong> Este é um dos algoritmos mais simples, mas não é muito eficiente. Ele funciona comparando elementos adjacentes e trocando-os se estiverem fora de ordem. O processo é repetido até que não haja mais trocas necessárias.
  </li>
  <li>
    <strong>Selection Sort:</strong> O Selection Sort encontra o elemento mínimo do vetor e o coloca na primeira posição. Em seguida, encontra o segundo elemento mínimo e o coloca na segunda posição e assim por diante.
  </li>
  <li>
    <strong>Insertion Sort:</strong> O Insertion Sort constrói a lista ordenada um elemento de cada vez, movendo os elementos não ordenados para a posição correta no vetor ordenado.
  </li>
  <li>
    <strong>Quick Sort:</strong> O Quick Sort é um algoritmo de ordenação eficiente que utiliza uma estratégia de divisão e conquista para ordenar o vetor. Ele escolhe um elemento (pivô) e rearranja o vetor para que todos os elementos menores que o pivô estejam à esquerda e todos os elementos maiores estejam à direita.
  </li>
  <li>
    <strong>Merge Sort:</strong> O Merge Sort é outro algoritmo de ordenação eficiente que divide o vetor em duas metades, ordena cada metade separadamente e depois mescla as duas metades ordenadas para obter o vetor ordenado final.
  </li>
</ol>

Cada algoritmo de ordenação tem suas próprias vantagens e desvantagens em termos de desempenho e complexidade. A escolha do algoritmo depende do tamanho dos dados a serem ordenados, dos recursos disponíveis e dos requisitos de desempenho.

Nesse repositório, você encontrará algumas implementação desses métodos de ordenação de vetores, que são 

### 1. Bubble Sort:

```ts
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
```
### 2. Selection Sort:

```ts
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
```
### 3. Insertion Sort:

```ts
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
```

- <strong>É importante ressaltar que este projeto é voltado exclusivamente para fins educacionais e de aprendizado.</strong>

### get started project

    # clone o repositorio
    git clone < repositorio >

    # open project
    cd ./ < name project >

    # install all dependencias
    yarn install
    or
    npm install

    # started application
    yarn dev
    or
    npm run dev