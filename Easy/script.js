'use strict';

// Functions returning functions



const exercise = function(sport){
    return function() {
        return `Today's exercise: ${sport}`
    };
};

let run = exercise('running');
console.log(run()); 


let swim = exercise('swimming');
console.log(swim()); 



// Arrow function: Same as above
const exercise1 = sport=> () => `Today's exercise: ${sport}`;

let run1 = exercise1('running');
console.log(run1()); 


let swim1 = exercise1('swimming');
console.log(swim1()); 




