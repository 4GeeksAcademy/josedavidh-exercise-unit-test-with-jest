const {sum} = require('./app.js')

//Comienza la primera prueba
test('adds 14 + 9 to equal 23', () =>{
    let total = sum(14, 9);
    expect(total).toBe(23);
})

//Test de Euro a Dólar
test("One euro should be 1.07 dollar", function(){
    const {fromEuroToDollar} = require('./app.js');
    //const dollar = fromEuroToDollar(3.5);
    //const expected = 3.5 * 1.07;

    expect(fromEuroToDollar(3.5)).toBe(3.745);
})

//fromDollarToYen, fromYenToPound

//Test de Dólar a Yen
test("One Dollar should be 146.26 Yens", function(){
    const {fromDollarToYen} = require('./app.js');
    //const Yen = fromDollarToYen(3.5);
    //const expected = 3.5 * 1.07;

    expect(fromDollarToYen(1)).toBe(146.26);
})

//Test de Yen a GBP
test("One Yen should be 0.01 GBP", function(){
    const {fromYenToPound} = require('./app.js');
    //const dollar = fromYenToPound(3.5);
    //const expected = 3.5 * 1.07;

    expect(fromYenToPound(1)).toBe(0.01);
})