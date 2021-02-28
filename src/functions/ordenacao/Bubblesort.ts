import change from "./change";

class Bubblesort {
    public static sort = (array: number[]): void => {

        for (let i = 0; i < array.length - 1; i++) {
            for (let j = 0; j < array.length - 1; j++) {
                if (array[j] > array[j + 1])
                    change(array, j, j + 1);
            }
        }
    }
}

export default Bubblesort;