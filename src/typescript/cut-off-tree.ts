function cutOffTreeBfs(forest: number[][], fromRow: number, fromCol: number, treeRow: number, treeCol: number) {
  const forestRowLength = forest?.length;
  const forestColLength = forest?.[0]?.length;

  const directions: { row: number; col: number }[] = [
    { row: -1, col: 0 },
    { row: 1, col: 0 },
    { row: 0, col: -1 },
    { row: 0, col: 1 },
  ];

  const visited = new Set<number>;
  const queue: {
    row: number;
    col: number;
    distance: number;
  }[] = [];

  queue.push({ row: fromRow, col: fromCol, distance: 0 });
  visited.add(forest[fromRow][fromCol]);

  while (queue.length > 0) {
    const currStep = queue.shift();
    
    if (currStep) {
      if (currStep.row == treeRow && currStep.col == treeCol) {
        return currStep.distance;
      }
  
      for (const direction of directions) {
        let toRow = currStep.row + direction.row;
        let toCol = currStep.col + direction.col;

        if (
          0 <= toRow 
          && toRow < forestRowLength 
          && 0 <= toCol 
          && toCol < forestColLength
          && !visited.has(forest[toRow][toCol])
          && forest[toRow][toCol] > 0
        ) {
          visited.add(forest[toRow][toCol]);
          queue.push({ row: toRow, col: toCol, distance: currStep.distance + 1 });
        }
      }
    }
  }

  return -1;
}

function cutOffTree(forest: number[][]): number {
  if (forest == null || forest.length <= 0 || forest?.[0].length <= 0) {
    return 0;
  }

  let trees: { 
    height: number;
    row: number;
    col: number;
  }[] = [];

  for (let row = 0; row < forest.length; row++) {
    for (let col = 0; col < forest?.[0].length; col++) {
      const height = forest[row][col];

      if (height > 1) {
        trees.push({ height, row, col });
      }
    }
  }

  trees.sort((a, b) => a.height - b.height);

  let minSteps = 0;

  let startRow = 0;
  let startCol = 0;

  for (const tree of trees) {
    let distance = cutOffTreeBfs(forest, startRow, startCol, tree.row, tree.col);

    if (distance < 0) {
      return -1;
    }

    minSteps = minSteps + distance;

    startRow = tree.row;
    startCol = tree.col;
  }

  return minSteps;
};

console.log(cutOffTree([
  [1,2,3],
  [0,0,0],
  [7,6,5]
]))