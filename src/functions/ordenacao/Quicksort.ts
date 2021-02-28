import change from "./change";

class Quicksort {

    public static sort = (array: number[], start: number, end: number): void => {
        if (start >= end) return;

        const pivot: number = Quicksort.split(array, start, end);

        /*
            Chamadas recursivas com as "metades do vetor"
        */
        Quicksort.sort(array, start, pivot - 1);
        Quicksort.sort(array, pivot + 1, end);
    }


    private static split = (array: number[], start: number, end: number): number => {
        
        /*
            Passa o inicio do vetor como sendo a posição de maior valor
        */
        let pos_greater: number = start;

        for (; start < end; start++) {

            /*
                Se o valor da posição a for menor que o valor da posição final(pivo),
                troca os valores e passa para a proxima posição
            */
            if (array[start] < array[end]) {
                change(array, start, pos_greater);

                pos_greater++;
            }
        }

        /*
            Faz a troca final entre o ultimo elemento e o maior elemento
        */
        change(array, pos_greater, end);

        //Retorna um novo pivo
        return pos_greater;
    }
}

export default Quicksort;