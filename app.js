let sum = (a,b) => {
    return a + b
}

console.log(sum(7,3));

module.exports = {sum};

/*let oneEurols = {
    "JPY": 156.5, //japan yen
    "USD": 1.07, //us dollar
    "GBP": 0.87 //british pound
}*/

//De Euro a Dollar
const fromEuroToDollar = function (valueInEuro) {
    //Conversión del valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    return valueInDollar;
}

//De Dollar a Yen
const fromDollarToYen = function (valueInDollar) {
    //Conversión del valor a Yen
    let valueInYen = valueInDollar * (156.5/1.07);
    return Number(valueInYen.toFixed(2));
}

//De Yen a Pound
const fromYenToPound = function (valueInYen) {
    //Conversión del valor a Pound
    let valueInPound = valueInYen * (0.87/156.5);
    return Number(valueInPound.toFixed(2));
}

module.exports = {sum, fromEuroToDollar, fromDollarToYen, fromYenToPound}