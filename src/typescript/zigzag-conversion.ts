function transposeMatrix(matrix: string[][]): string[][] {
  // Get the number of rows and columns in the original matrix
  const nRows = matrix.length;
  const nCols = matrix[0].length;

  // Create a new matrix with swapped rows and columns
  const transposedMatrix: string[][] = [];

  for (let j = 0; j < nCols; j++) {
    transposedMatrix[j] = [];
    for (let i = 0; i < nRows; i++) {
      transposedMatrix[j][i] = matrix[i][j];
    }
  }

  return transposedMatrix;
}

function _convert(s: string, numRows: number): string {
  if (numRows == 1) {
    return s;
  }

  const splittedStr = s.split('');

  const completeColSubStrings: string[][] = [];
  const partialColSubStrings: string[][] = [];
  
  // compute index jump for every column
  const indexJump = numRows + (numRows - 2);

  // process full columns
  for (let i = 0; i < splittedStr.length; i = i + indexJump) {
    const start = i;
    const end = i + numRows;

    const colSubstring = splittedStr.slice(start, end);

    if (colSubstring.length > 0 && colSubstring.length < numRows) {
      const nMissing = numRows - colSubstring.length;
      const missingBlank = new Array(nMissing).fill('');

      colSubstring.push(...missingBlank);
    }

    completeColSubStrings.push(colSubstring);
  }

  // process partial columns (zig zag columns)
  for (let z = numRows; z < splittedStr.length; z = z + indexJump) {
    const start = z;
    const end = start + (numRows - 2);
    
    const zigZag = splittedStr.slice(start, end);
    const reverseZigZag = zigZag.reverse();
    let filledReverseZigZag = reverseZigZag;

    if (reverseZigZag.length > 0 && reverseZigZag.length < numRows) {
      const nMissing = numRows - reverseZigZag.length - 1;
      const missingBlank = new Array(nMissing).fill('');

      filledReverseZigZag = missingBlank.concat(reverseZigZag).concat(['']);
    }

    partialColSubStrings.push(filledReverseZigZag);
  }

  // merge arrays intercalating every element of completeColSubStrings and partialColSubStrings (starting with completeColSubStrings)
  const mergedSubStrings: string[][] = [];

  const maxLength = Math.max(completeColSubStrings.length, partialColSubStrings.length);

  for (let j = 0; j < maxLength; j++) {
    if (j < completeColSubStrings.length) {
      mergedSubStrings.push(completeColSubStrings[j]);
    }
    if (j < partialColSubStrings.length) {
      mergedSubStrings.push(partialColSubStrings[j]);
    }
  }

  // transpose mergeSubStrings to ease the handling on returned value
  const transposedColSubStrings = transposeMatrix(mergedSubStrings);

  const result = transposedColSubStrings.map(subString => subString.join('')).join('');

  return result;
};

function convert(s: string, numRows: number): string {
  if (numRows <= 1) {
    return s;
  }

  let currRow = 0;
  let reachedTopOrBottom = true;

  let resultRows: string[] = [];
  
  for (let i = 0; i < s.length; i++) {
    if (currRow == 0 || currRow == numRows - 1) {
      reachedTopOrBottom = !reachedTopOrBottom;
    }
    
    resultRows[currRow] = resultRows[currRow] ? resultRows[currRow] + s[i] : s[i];
    
    if (!reachedTopOrBottom) {
      currRow = currRow + 1;
    } else {
      currRow = currRow - 1;
    }
  }

  const result = resultRows.join('')

  return result;
};
