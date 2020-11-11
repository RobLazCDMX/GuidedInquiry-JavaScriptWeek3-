'use stricit';


const cutPizzaSlices = function(numOfSlices){
    return function(numOfPeopleSharig){
        return `Each person gets ${ parseFloat(numOfSlices/numOfPeopleSharig).toFixed(2)} slices of pizza`;// if the input value is text type (string) use parseFloat. If the value is a number type use Math.round(num * 100) / 100 or Math.round((num + Number.EPSILON) * 100) / 100  to ensure things like 1.005 round correctly
    }
} ;

let sharePizza = cutPizzaSlices(8);
console.log(sharePizza(2));        
console.log(sharePizza(4)); 





