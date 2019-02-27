// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    let object = {};
    if (currency > 10000) return {error: "You are rich, my friend! We don't have so much coins for exchange"};
    if (currency <=0) return object;
    if(currency >= 50) {
        object.H = (currency - (currency % 50)) / 50;
        currency -= currency - (currency % 50);
    }
    if(currency >= 25) {
        object.Q = (currency - (currency % 25)) / 25;
        currency -= currency - (currency % 25);
    }
    if(currency >= 10) {
        object.D = (currency - (currency % 10)) / 10;
        currency -= currency - (currency % 10);
    }
    if(currency >= 5) {
        object.N = (currency - (currency % 5)) / 5;
        currency -= currency - (currency % 5);
    }
    if(currency >= 1) {
        object.P = currency;
        currency = 0;
    }
    return object;
}
