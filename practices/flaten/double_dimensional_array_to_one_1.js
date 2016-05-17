'use strict';

function double_to_one(collection) {
  var array=[];
  array[0]=collection[0];
  var t=1;

  for(var i=1;i<collection.length;i++){

    for(var j=0;j<collection[i].length;j++){
      array[t]=collection[i][j];
      t++;
    }
  }

  return array;
}

module.exports = double_to_one;
