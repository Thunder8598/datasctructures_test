/*
    Faz a troca dos elementos
*/
const change = (array: number[], a: number, b: number): void => {
    const aux: number = array[a];

    array[a] = array[b];
    array[b] = aux;
}

export default change;