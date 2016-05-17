'use strict';
function double_to_one(collection) {
    var array=readArray(collection);
    var number=deleteNumber(array);
    return number;
  }

function readArray(collection) {
    var array=[];
    var t=1;

    for(var i=0;i<collection.length;i++){

      for(var j=0;j<collection[i].length;j++){
        array[t]=collection[i][j];
        t++;
      }
    }

    return array;
  }

function deleteNumber(array) {
    var number=[];
    var j=0;

    for(var i=1;i<array.length;i++){
      var tag=0;

      for(var j=0;j<number.length;j++){

        if(number[j]===array[i]){
          tag=1;
        }
      }

      if(tag===0){
        number.push(array[i]);
      }
    }

    return number;
  }

module.exports = double_to_one;
