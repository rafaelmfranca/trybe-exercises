var questionInt = require('readline-sync').questionInt;
function getAverageSpeed(distance, time) {
    return distance / time;
}
var distance = questionInt('Enter the distance (meters): ');
var time = questionInt('Enter the time (seconds): ');
var averageSpeed = getAverageSpeed(distance, time).toFixed(2);
console.log("The average speed is ".concat(averageSpeed, " m/s"));
