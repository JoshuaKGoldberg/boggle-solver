const { readFile } = require('mz/fs');
const path = require('path');

const { createGrid } = require("./createGrid");
const { solver } = require("./solver");

const filePromise = readFile(path.join(__dirname, 'words.txt'))

const game = async () => {
    const grid = await createGrid();
    console.log("Playing with:\n", grid);

    const dictionary = new Set(
        (await filePromise).toString().trim().toLowerCase().split(/\W+/g),
    );

    const results = new Set()
    
    solver(grid, dictionary, results)

    console.log(`Found ${results.size} results:\n`, Array.from(results).join(', '));
};

game();
