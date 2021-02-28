import Quicksort from "./ordenacao/Quicksort";
import Bubblesort from "./ordenacao/Bubblesort";

class Ordenacao {

    public static bubblesort = (array: number[]): void => {
        Bubblesort.sort(array);
    }

    public static quicksort = (array: number[]): void => {
        Quicksort.sort(array, 0, array.length - 1);
    }
}

class Buscas {

    private static is_ordered: boolean = false;

    public static linear = (array: number[], search: number): number => {

        for (let i = 0; i < array.length; i++)
            if (array[i] == search) return array[i];

        return -1;
    }

    public static binary = (array: number[], search: number, start: number = 0, end: number = -1): number => {
        if (!Buscas.is_ordered) {
            Ordenacao.quicksort(array);
            Buscas.is_ordered = true;
        }

        end = (end != -1 ? end : (array.length - 1));

        const middle = Math.round((start + end) / 2);

        if (start >= end) return -1;

        if (array[middle] == search)
            return middle;

        if (array[middle] > search)
            return Buscas.binary(array, search, start, middle - 1);
        else
            return Buscas.binary(array, search, middle + 1, end);

    }
}

export { Ordenacao, Buscas };