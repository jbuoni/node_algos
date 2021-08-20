function setZeroes(matrix) {
  let firstRowZero = false;
  let firstColumnZero = false;

  const n = matrix.length;
  const m = matrix[0].length;

  //set first row and column zero or not
  for(let i = 0; i< n; i++) {
      if(matrix[i][0] === 0) {
          firstColumnZero = true;
          break;
      }
  }

  for(let i = 0; i < m; i++) {
      if(matrix[0][i] === 0) {
          firstRowZero = true;
          break;
      }
  }

  //mark zeros on first row and column
  for(let i = 1; i < n; i++) {
      for(let j = 1; j < m; j++) {
          if(matrix[i][j] === 0) {
             matrix[i][0] = 0;
             matrix[0][j] = 0;
          }
      }
  }

  //use mark to set elements
  for(let i = 1; i < n; i++) {
      for(let j = 1; j < m; j++) {
          if(matrix[i][0] === 0 || matrix[0][j] === 0) {
             matrix[i][j] = 0;
          }
      }
  }

  //set first column and row
  if(firstColumnZero) {
      for(let i = 0; i < n; i++) {
          matrix[i][0] = 0;
      }
  }

  if(firstRowZero) {
      for(let i = 0; i < m; i++) {
          matrix[0][i] = 0;
      }
  }

  return matrix;
}

const matrix = [[1,1,1],[1,0,1],[1,1,1]];
const matrix2 = [[0,1,2,0],[3,4,5,2],[1,3,1,5]];
console.log(setZeroes(matrix));
console.log(setZeroes(matrix2));