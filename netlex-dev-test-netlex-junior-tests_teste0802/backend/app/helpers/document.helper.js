const { count, Console } = require("console");

module.exports = {
    wordFrequency: function(doc, word){
        var stringToWordsArray1 = stringToWordsArray(doc);
        var cnt = 0;
        for (var i = 0; i < stringToWordsArray1.length; i++) {
            if (stringToWordsArray1[i] == word) {
                cnt ++;
            }
        }
        return cnt;          
        //throw new Error("Not implemented exception")
    },

    wordSentences: function(doc, word){
        var prhases = doc.split(/(?! ).*?[.!?](?![.!?])/g);
        //var prhasesWithoutEnter = prhases.trim();
        var length = prhases.length
        for(var i = 0; i < length; i++){
            if (prhases[i] =="\n")
            var teste = teste.concat(prhases.splice(i,1));
        }
        console.log("foifçoisfjs "+teste);
        
        
        for(var i = 0; i < teste.length; i++) {
            var prhase = stringToWordsArray(teste[i]);
            console.log("Testezaaaaaoo "+ prhase);
            for(var i = 0; i < prhase.length; i++) {
                if (teste[i] == word) {
                    return prhases[i];
                }
            }
        }
        
        throw new Error("Not implemented exception")
    },

    topWords: function(doc, count, minWordLength){

        var stringToWordsArray1 = stringToWordsArray(doc);
        var arrayIni = [[]];
        var arrayFin = [[]];
        stringToWordsArray1.forEach(function (item, indice, array) {
            var cnt = 0;
            for (var i = 0; i < stringToWordsArray1.length; i++) {
                if (stringToWordsArray1[i] == item) {
                    cnt ++;
                }
            }
            //console.log(item, cnt);
            arrayIni = arrayIni.push(item, cnt);
            arrayFin = insertionSort(arrayIni);
            arrayIni = arrayIni.pop();
          });
          return arrayFin();
        //throw new Error("Not implemented exception")
    },

}

function stringToWordsArray(text) {
    return text.match(/[a-zÀ-ú]+/gmui);
}

function insertionSort(array){
    var arr = [[]];
    arr = array;
    var j = arr.length - 1;

    while (j > 0 && arr[j] < arr[j-1]) {
            var aux = arr[j];
            arr[j] = arr[j-1];
            arr[j-1] = aux;
            j -= 1;
    }
    return arr;
}