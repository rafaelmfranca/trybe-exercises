"use strict";
const { questionInt } = require('readline-sync');
function getAverageSpeed(distance, time) {
    return distance / time;
}
function mainTwo() {
    const distance = questionInt('Enter the distance (meters): ');
    const time = questionInt('Enter the time (seconds): ');
    const averageSpeed = getAverageSpeed(distance, time).toFixed(2);
    console.log(`The average speed is ${averageSpeed} m/s`);
}
mainTwo();
