// Todo: use trie, not hash table

module.exports.solver = (grid, dictionary, results) => {
    const spaces = grid.map(row => row.map(_ => false))

    const doSolver = (x, y, word) => {
        if (!spaces[x] || spaces[x][y] !== false) {
            return;
        };

        spaces[x][y] = true;
        word += grid[x][y];

        if (word.length > 2 && dictionary.has(word)) {
            console.log(word)
            results.add(word);
        }

        for (let dy = -1; dy <= 1; dy += 1) {
            for (let dx = -1; dx <= 1; dx += 1) {
                if (dy === 0 && dx === 0) continue;

                doSolver(x + dx, y + dy, word);
            }
        }
        
        spaces[x][y] = false;
    };

    for (let i = 0; i < grid.length; i += 1) {
        for (let j = 0; j < grid[i].length; j += 1) {
            doSolver(i, j, '')
        }
    }
}
