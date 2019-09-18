const fizzbuzz = require("../fizzbuzz");

test('number exceptor',() =>{
    fb = new fizzbuzz();
    input = ["13"," 13","13 ","abc","-13","13a","13 a"];
    output = input.map(n => fb.setNumber(n));
    expect(output).toEqual([true,true,true,false,true,false,false]);
} )

test('fizz printer',() => {
    fb = new fizzbuzz();
    input = ["13","9","13a"];
    output = input.map(n => fb.getFizz(n));
    expect(output).toEqual(["","fizz",false]);
})

test('buzz printer',() => {
    fb = new fizzbuzz();
    input = ["10","9","abc"];
    output = input.map(n => fb.getBuzz(n));
    expect(output).toEqual(["buzz","",false]);
})

test('fizzbuzz printer',() => {
    fb = new fizzbuzz();
    input = ["9","10","15","abc"];
    output = input.map(n => fb.patternPrinter(n));
    expect(output).toEqual(["fizz","buzz","fizzbuzz",false]);
})

test('fizzbuzztazz printer',() => {
    fb = new fizzbuzz();
    input = ["9","10","15","7","21"];
    output = input.map(n => fb.patternPrinter(n));
    expect(output).toEqual(["fizz","buzz","fizzbuzz","tazz","fizztazz"]);
})
