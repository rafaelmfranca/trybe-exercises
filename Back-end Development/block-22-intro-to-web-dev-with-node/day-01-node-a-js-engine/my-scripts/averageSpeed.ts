const { questionInt } = require('readline-sync');

function getAverageSpeed(distance: number, time: number) {
  return distance / time;
}

const distance = questionInt('Enter the distance (meters): ');
const time = questionInt('Enter the time (seconds): ');

const averageSpeed = getAverageSpeed(distance, time).toFixed(2);

console.log(`The average speed is ${averageSpeed} m/s`);
