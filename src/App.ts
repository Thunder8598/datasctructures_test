import { Ordenacao, Buscas } from "./functions/DataStructres";

class App {

    static Main = () => {

        const array = [
            9, 6, 3, 8, 5, 3, 1, 0
        ];

        console.log("Array desordenado: ", array);

        const array1 = array;
        const array2 = array;

        console.log(Buscas.binary(array, 8));

        /*
            Bubblesort
        */
        console.time();

        Ordenacao.bubblesort(array1);
        console.log("Array ordenado Bubblesort: ", array1);

        console.timeEnd();

        /*
            Quicksort
        */
        console.time();

        Ordenacao.quicksort(array);
        console.log("Array ordenado Quicksort: ", array2);

        console.timeEnd();
    }
}

export default App;