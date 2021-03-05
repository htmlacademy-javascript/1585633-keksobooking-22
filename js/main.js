function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}


function getRandom(min, max, dell) {
  let boom = (Math.random() * (max - min + 1) + min);
  return boom.toFixed(dell);
}
