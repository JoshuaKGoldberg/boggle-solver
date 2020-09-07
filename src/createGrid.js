const readline = require("readline-sync");

const height = 4;

module.exports.createGrid = async () => {
  const grid = [];

  for (let i = 0; i < height; i += 1) {
    const raw = readline.question(`Input row ${i}, split by spaces: `);

    grid.push(raw.trim().toLowerCase().split(/\W+/g));
  }

  return grid;
};

