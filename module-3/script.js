// convert inch to feet , miles to kilometer 

function inchToFeet (inch) {
    const feet = inch / 12;
    return feet;
}

const height = inchToFeet(73);
console.log(height);


function mileToKilometer (mile) {
    const kilometer =  1.609344 * mile;
    return kilometer;
}

const kilo = mileToKilometer(10);
console.log(kilo)