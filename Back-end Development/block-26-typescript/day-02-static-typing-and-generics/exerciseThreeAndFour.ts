type Slices = 4 | 6 | 8;
type Common = 'Calabresa' | 'Frango' | 'Pepperoni';
type Vegetarian = 'Marguerita' | 'Palmito' | 'Cogumelo';
type Sweet = 'Nutella' | 'Goiabada com Queijo”' | 'Marshmallow';

interface Pizza {
  flavor: string;
  slices: Slices;
}

interface CommonPizza extends Pizza {
  flavor: Common;
}

interface VegetarianPizza extends Pizza {
  flavor: Vegetarian;
}

interface SweetPizza extends Pizza {
  flavor: Sweet;
  slices: 4;
}

const calabresa: CommonPizza = {
  flavor: 'Calabresa',
  slices: 6,
};

console.log(calabresa);

const palmito: VegetarianPizza = {
  flavor: 'Palmito',
  slices: 4,
};

console.log(palmito);

const nutella: SweetPizza = {
  flavor: 'Nutella',
  slices: 4,
};

console.log(nutella);
