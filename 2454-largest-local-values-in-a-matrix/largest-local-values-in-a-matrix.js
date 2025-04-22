/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
function largestLocal(grid) {
  const n = grid.length;
  const res = new Array(n - 2);
  for (let i = 0; i < n - 2; i++) {
    res[i] = new Array(n - 2).fill(0); // Creating a *new* array for each row
  }

  for (let i = 0; i < n - 2; i++) {
    for (let j = 0; j < n - 2; j++) {
      const subGrid = getSubgrid(i, j, grid);

      const merged = [].concat(...subGrid);
      const maxNum = Math.max(...merged);

      res[i][j] = maxNum;
    }
  }

  return res;
}

function getSubgrid(i, j, grid) {
  const subGrid = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ];
  for (let y = 0; y < 3; y++) {
    for (let x = 0; x < 3; x++) {
      subGrid[y][x] = grid[i + y][j + x];
    }
  }

  return subGrid;
}
