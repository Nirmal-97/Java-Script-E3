PERMUTATION of a String 

A Permutation of a string is another string that contains same characters, only the order of characters can be different. For example, “abcd” and “dabc” are Permutation of each other.

var myString = "xyz";

function printPermut(inputString){
    var outputString;
    if(inputString.length === 0){
        return inputString;
    }
    if(inputString.length === 1){
        return inputString;
    }
    else{
       for(int i = 0; i<inputString.length(); i++){
           //something here like: 
           //outputString = outputString.concat(printPermut(inputString.slice(1))??
           //maybe store each unique permutation to an array or something?
       } 
    }
}