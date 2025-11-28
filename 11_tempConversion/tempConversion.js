const convertToCelsius = function(fah) {
  let newTemp = fah;

  newTemp = (newTemp - 32) * (5 / 9);

  return Number(newTemp.toFixed(1));
};

const convertToFahrenheit = function(cel) {
  let newTemp = cel;

  newTemp = (newTemp * 1.8) + 32;
  
  return Number(newTemp.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
