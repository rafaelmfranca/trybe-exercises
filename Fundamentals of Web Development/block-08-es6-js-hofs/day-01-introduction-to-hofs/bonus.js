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
const mageTurnStats = (mage) => {
  let initialMana = mage.mana;
  let damage = getRandomNumber(mage.intelligence, mage.intelligence * 2);
  let manaConsumed = 15;

  if (initialMana < 15) {
    damage = 'Não possui mana suficiente';
    manaConsumed = 0;
  }

  initialMana -= manaConsumed;
  return { damage, manaConsumed};
};

console.log(dragonDamage(dragon));
console.log(warriorDamage(warrior));
console.log(mageTurnStats(mage));