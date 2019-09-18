

const chopper = require("../chop");

describe('Iterative chop',function(){
  test('sorted array', () => {
    var array = [1,2,3,4,5,6,7,8];
    chop = new chopper(array);
    var inputs = [3,4,2,5,6,10];
    
    var output = inputs.map(n => chop.find_iterative(n));
    var target = [3,4,2,5,6,-1];
    
    expect(output).toEqual(target);
  })

  test('unsorted array', () => {
    var array = [3,2,4,1,7,8,6,5];
    chop2 = new chopper(array);
    
    var inputs = [3,4,2,5,6,10];
    var output = inputs.map(n => chop2.find_iterative(n));
    var target = [3,4,2,5,6,-1];
    
    expect(output).toEqual(target);
  })

});

describe('Recursive Chop',function(){
  test('recursive', () => {
    var array = [1,2,3,4,5,6,7,8];
    chop = new chopper(array);
    var inputs = [3,4,2,5,6,10];
    var output = inputs.map(n => chop.find_recursive(array,n,0,array.length));
    var target = [3,4,2,5,6,-1];
    
    expect(output).toEqual(target);
  })

})

describe('Irregular input arrays',function(){
  test('duplicate values',() => {
    var array = [1,1,1,2,3,4,5,6];
    chop = new chopper(array);
    var inputs = [3,4,2,5,1,10];
    var output = inputs.map(n => chop.find_recursive(array,n,0,array.length));
    var target = [5,6,4,7,1,-1];
    
    expect(output).toEqual(target);
  })
})

  
