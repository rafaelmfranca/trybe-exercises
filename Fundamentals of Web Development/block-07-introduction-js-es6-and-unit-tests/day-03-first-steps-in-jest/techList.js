function techList(techNames, nickname) {
  if (!techNames.length) return 'Vazio!';
  return techNames.sort().map((techName) => ({ tech: techName, name: nickname }));
}

module.exports = techList;