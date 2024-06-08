const sum = (a, b) => {
    return a + b;
}
console.log(sum(7,3))

module.exports = { sum};
function convertCurrency(amount, fromCurrency, toCurrency) {
    
    let amountInEUR;

    if (fromCurrency === 'EUR') {
        amountInEUR = amount;
    } else {
        amountInEUR = amount * exchangeRates[fromCurrency].EUR;
    }

    let convertedAmount;

    if (toCurrency === 'EUR') {
        convertedAmount = amountInEUR;
    } else {
        convertedAmount = amountInEUR * exchangeRates.EUR[toCurrency];
    }

    return convertedAmount;
}
const exchangeRates = {
    EUR: {
        USD: 1.07,    // 1 EUR = 1.07 USD
        JPY: 156.5,   // 1 EUR = 156.5 JPY
        GBP: 0.87     // 1 EUR = 0.87 GBP
    },
    USD: {
        EUR: 1 / 1.07,   // 1 USD = 1 / 1.07 EUR
        JPY: 156.5 / 1.07, // 1 USD = 156.5 / 1.07 JPY
        GBP: 0.87 / 1.07  // 1 USD = 0.87 / 1.07 GBP
    },
    JPY: {
        EUR: 1 / 156.5, // 1 JPY = 1 / 156.5 EUR
        USD: 1.07 / 156.5, // 1 JPY = 1.07 / 156.5 USD
        GBP: 0.87 / 156.5 // 1 JPY = 0.87 / 156.5 GBP
    },
    GBP: {
        EUR: 1 / 0.87, // 1 GBP = 1 / 0.87 EUR
        USD: 1.07 / 0.87, // 1 GBP = 1.07 / 0.87 USD
        JPY: 156.5 / 0.87 // 1 GBP = 156.5 / 0.87 JPY
    }
};

let oneEuroIs = {
    "JPY": 156.5, // yen japonés
    "USD": 1.07, // dólar estadounidense
    "GBP": 0.87  // libra esterlina
}
function fromDollarToYen(dollars) {
    
    let euros = dollars / oneEuroIs.USD;
    
    let yenes = euros * oneEuroIs.JPY;
    return yenes;
}


function fromYenToPound(yenes) {
    
    let euros = yenes / oneEuroIs.JPY;
    
    let pounds = euros * oneEuroIs.GBP;
    return pounds;
}

function testConversion() {
    
    console.log("Prueba fromDollarToYen");
    console.assert(fromDollarToYen(1) === 146.26168224299065, `Error: expected 146.26168224299065 but got ${fromDollarToYen(1)}`);
    console.assert(fromDollarToYen(10) === 1462.6168224299065, `Error: expected 1462.6168224299065 but got ${fromDollarToYen(10)}`);
    console.assert(fromDollarToYen(100) === 14626.168224299065, `Error: expected 14626.168224299065 but got ${fromDollarToYen(100)}`);
    
    
    console.log("Prueba fromYenToPound");
    console.assert(fromYenToPound(1) === 0.005561497326203208, `Error: expected 0.005561497326203208 but got ${fromYenToPound(1)}`);
    console.assert(fromYenToPound(100) === 0.5561497326203208, `Error: expected 0.5561497326203208 but got ${fromYenToPound(100)}`);
    console.assert(fromYenToPound(1000) === 5.561497326203208, `Error: expected 5.561497326203208 but got ${fromYenToPound(1000)}`);
}


testConversion();
