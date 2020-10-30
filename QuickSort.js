let alteracoes = 0;

function quick() {
    //@autor: Róger Ramos
    // let list = [1, 6, 4, 7, 5, 3, 8, 2];
    let list = [];
    
    for (let i = 0; i < 100000; i++){
        list.push(getRandom(1,1000000));
    }

    console.log("*************************************************************************************");
    console.log("*************************************************************************************");
    console.log("*************************************Quick Sort:*************************************");
    console.log("*************************************************************************************");
    console.log("*************************************************************************************");
    console.log("[ListaInicial]",list);
    console.time("Time");

    quickSort(list, 0, list.length)

    console.log("[-ListaFinal-]",list)
    console.timeEnd("Time") 
    console.log("[Alterações]",alteracoes) 
}

function quickSort(array, start, end){
    
    let i = start;
    let j = end -1;
    let aux;
    let pivo = array[Math.round((start + end) / 2)];
    
    while (i <= j) {
        while (array[i] < pivo && i < end) {
            i++;
        }
        while (array[j] > pivo && j > start) {
            j--;
        }
        if (i <= j) {
            aux = array[i];
            array[i] = array[j]
            array[j] = aux
            i++
            j--
            console.log("[----Lista---]",array)
            alteracoes++
        }
    }
    if (j > start) {
        quickSort(array, start, j + 1)
    }
    if (i < end) {
        quickSort(array, i, end)
    }
}

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

quick()