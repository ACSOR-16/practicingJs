function printTriangle(size, character) {
  const triangle = [];

  for (let index = 1; index <= size; index++) {
    let spaces = " ".repeat(size - index);
    let characters = character.repeat(index);
    let figure = `${spaces}${characters}`;
    triangle.push(figure);
  }

  return triangle.join("\n");
}

console.log(printTriangle(10, "X"));