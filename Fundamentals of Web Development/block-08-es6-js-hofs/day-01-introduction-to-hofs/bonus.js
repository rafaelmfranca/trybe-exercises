const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const getRandomNumber = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const battleMembers = { mage, warrior, dragon };

const dragonDamage = (dragon) => getRandomNumber(15, dragon.strength);
const warriorDamage = (warrior) => getRandomNumber(warrior.strength, warrior.strength * warrior.weaponDmg);
console.log(dragonDamage(dragon));
console.log(warriorDamage(warrior));