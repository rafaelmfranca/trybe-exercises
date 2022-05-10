const fs = require('fs').promises;

async function readAllCharacters() {
  const data = JSON.parse(await fs.readFile('simpsons.json', 'utf8'));

  data.forEach((char) => {
    console.log(`${char.id} - ${char.name}`);
  });
}

async function readCharacterById(id) {
  try {
    const data = JSON.parse(await fs.readFile('simpsons.json', 'utf8'));
    const char = data.find((char) => +char.id === id);

    if (!char) throw new Error('Character not found');

    console.log(char);
  } catch (error) {
    console.log(error.message);
  }
}

async function updateCharacters() {
  const data = JSON.parse(await fs.readFile('simpsons.json', 'utf8'));
  const filteredCharacters = data.filter(
    (char) => +char.id !== 10 && +char.id !== 6
  );
  await fs.writeFile('./simpsons.json', JSON.stringify(filteredCharacters));
}

async function writeSpecifiedCharacters() {
  const data = JSON.parse(await fs.readFile('simpsons.json', 'utf8'));
  const filteredCharacters = data.filter((char) => +char.id < 5);
  await fs.writeFile(
    './simpsonFamily.json',
    JSON.stringify(filteredCharacters)
  );
}

async function writeNelsonMunts() {
  const data = JSON.parse(await fs.readFile('simpsons.json', 'utf8'));
  const familyData = JSON.parse(
    await fs.readFile('simpsonFamily.json', 'utf8')
  );

  const charData = data.find((char) => char.name === 'Nelson Muntz');
  familyData.push(charData);

  await fs.writeFile('./simpsonFamily.json', JSON.stringify(familyData));
}

async function updateNelsonMounts() {
  const data = JSON.parse(await fs.readFile('simpsons.json', 'utf8'));
  const familyData = JSON.parse(
    await fs.readFile('simpsonFamily.json', 'utf8')
  );

  const charData = data.find((char) => char.name === 'Maggie Simpson');
  const newFamily = familyData.map((char) => {
    if (char.name === 'Nelson Muntz') return charData;
    return char;
  });

  await fs.writeFile('./simpsonFamily.json', JSON.stringify(newFamily));
}

async function main() {
  await readAllCharacters();
  await readCharacterById(10);
  await updateCharacters();
  await writeSpecifiedCharacters();
  await writeNelsonMunts();
  await updateNelsonMounts();
}

main();
