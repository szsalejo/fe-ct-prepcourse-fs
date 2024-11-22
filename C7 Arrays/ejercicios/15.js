function encontrarIndiceMayor(array) {
  // Encuentra el índice del número más grande en el array de números.
  // Devuelve el valor de este índice.
  // Tu código:
  const maxNum = Math.max(...array);
  return array.indexOf (maxNum);
}

module.exports = encontrarIndiceMayor;
