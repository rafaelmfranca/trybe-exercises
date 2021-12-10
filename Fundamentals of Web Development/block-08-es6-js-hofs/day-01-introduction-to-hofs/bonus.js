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

const battleMembers = { mage, warrior, dragon };

const getRandomNumber = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const dragonAttack = (dragon) => getRandomNumber(15, dragon.strength);
const warriorAttack = (warrior) => getRandomNumber(warrior.strength, warrior.strength * warrior.weaponDmg);
const mageAttack = (mage) => {
  let damage = getRandomNumber(mage.intelligence, mage.intelligence * 2);
  let manaConsumed = 15;

  if (mage.mana < 15) {
    damage = 'Não possui mana suficiente';
    manaConsumed = 0;
  }

  return { damage, manaConsumed };
};

const gameActions = {
  warriorTurn: (callback) => {
    const warriorDamage = callback(warrior);
    warrior.damage = warriorDamage;
    dragon.healthPoints -= warriorDamage;
  },
  dragonTurn: (callback) => {
    const dragonDamage = callback(dragon);
    dragon.damage = dragonDamage;
    warrior.healthPoints -= dragonDamage;
    mage.healthPoints -= dragonDamage;
  },
  mageTurn: (callback) => {
    const { damage, manaConsumed } = callback(mage);
    mage.damage = damage;
    mage.mana -= manaConsumed;
    dragon.healthPoints -= damage;
  },
  battleTurnStats: () => battleMembers
};

const turn = () => {
  gameActions.warriorTurn(warriorAttack);
  gameActions.mageTurn(mageAttack);
  gameActions.dragonTurn(dragonAttack);
  console.log(gameActions.battleTurnStats())
}

turn();
turn();

