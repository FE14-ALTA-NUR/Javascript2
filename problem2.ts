function generateMultiplicationTable(n: number): void {
    for (let i = 1; i <= n; i++) {
      let row = "";
      for (let j = 1; j <= n; j++) {
        row += (i * j).toString().padStart(3, " ") + " ";
      }
      console.log(row.trim());
    }
  }
  
  const input = 10;
  generateMultiplicationTable(input);
  