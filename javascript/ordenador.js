const adicionarValor = () => {
  let valor = Number(document.getElementById("valor").value);
  let textNode = document.createTextNode(valor);
  let node = document.createElement("li");
  node.appendChild(textNode);
  document.getElementById("valores").appendChild(node);
  apagarValor();
};

const ordenar = () => {
  const lista = document.getElementById('valores');
  const selects = document.getElementById('selects');
  const array = Array.from(lista.children).map(item => parseInt(item.innerHTML));
  const algoritmo = selects.options[selects.selectedIndex].value;
  switch (algoritmo) {
    case 'bubbleSort': bubbleSort(array); break;
    case 'selectionSort': selectionSort(array); break;
    case 'quickSort': quickSort(array, 0, array.length - 1); break;
  }
  lista.innerHTML = array
    .map(item => `<li>${item}</li>`)
    .reduce((acumulador, item) => acumulador + item, '');
};

const misturar = ( ) => {
  const lista = document.getElementById('valores');
  const array = Array.from(lista.children);
  shuffle(array);
  for (let i = 0; i < array.length; i++) {
    lista.appendChild(array[i]);
  }
};

const input = document.getElementById('valor');
input.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    event.preventDefault();
    document.getElementById('addElement').click();
  }
});

const apagarValor = () => {
  document.getElementById("valor").value = "";
};

const apagarTudo = () => {
  apagarValor();
  document.getElementById("valores").innerHTML = "";
};

const swap = (arr, i, j) => {
  [arr[i], arr[j]] = [arr[j], arr[i]];
};

const shuffle = (arr, quant = arr.length) => {
  for (let i = 0; i < quant; i++) {
    const pos1 = Math.floor(Math.random() * arr.length);
    const pos2 = Math.floor(Math.random() * arr.length);
    swap(arr, pos1, pos2);
  }
};

const bubbleSort = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }
};

const selectionSort = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        swap(arr, i, j);
      }
    }
  }
};

const quickSort = (arr, start = 0, end = arr.length - 1) => {
  start = start == undefined ? 0 : start;
  end = end == undefined ? arr.length - 1 : end;
  if (start >= end) {
    return;
  }
  const index = partition(arr, start, end);
  quickSort(arr, start, index - 1);
  quickSort(arr, index + 1, end);
};

const partition = (arr, start, end) => {
  let pivotIndex = start;
  for (let i = start; i < end; i++) {
    if (arr[i] < arr[end]) {
      swap(arr, i, pivotIndex);
      pivotIndex++;
    }
  }
  swap(arr, pivotIndex, end);
  return pivotIndex;
};


