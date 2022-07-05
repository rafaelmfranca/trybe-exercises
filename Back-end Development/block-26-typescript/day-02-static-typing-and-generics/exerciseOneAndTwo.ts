enum Colors {
  BLACK = '#000000',
  WHITE = '#ffffff',
  RED = '#ff0000',
  SILVER = '#c0c0c0',
}

enum Doors {
  DRIVER = 'driver',
  PASSENGER = 'passenger',
  BEHIND_DRIVER = 'behind of the driver',
  BEHIND_PASSENGER = 'behind of the passenger',
}

enum Directions {
  LEFT = 'left',
  RIGHT = 'right',
}

class Car {
  brand: string;
  color: Colors;
  doors: number;

  constructor(brand: string, color: Colors, doors: number) {
    this.brand = brand;
    this.color = color;
    this.doors = doors;
  }

  turnOn() {
    console.log('💡 Turn on the car!');
  }

  turnOff() {
    console.log('💡 Turn off the car!');
  }

  speedUp() {
    console.log('🚗 Speed up!');
  }

  slowDown() {
    console.log('🚗 Slow down!');
  }

  stop() {
    console.log('🚗 Stop!');
  }

  turn(direction: Directions) {
    console.log(`🚗 Turning: ${direction}!`);
  }

  honk() {
    console.log('📢 Beep!');
  }

  openTheDoor(door: Doors) {
    console.log(`🚪 Opening the door: ${door}!`);
  }

  closeTheDoor(door: Doors) {
    console.log(`🚪 Closing the door: ${door}!`);
  }
}

const m4 = new Car('BMW', Colors.SILVER, 4);

m4.openTheDoor(Doors.DRIVER);
m4.closeTheDoor(Doors.DRIVER);
m4.honk();
m4.speedUp();
m4.slowDown();
m4.turn(Directions.LEFT);
m4.speedUp();
m4.slowDown();
m4.turn(Directions.RIGHT);
m4.speedUp();
m4.slowDown();
m4.stop();
m4.openTheDoor(Doors.DRIVER);
m4.closeTheDoor(Doors.DRIVER);
