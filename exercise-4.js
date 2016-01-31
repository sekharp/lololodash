var _ = require("lodash");

var worker = function(cities) {
    var tempCities = { hot: [], warm: [] };

    function hotTemp (temp) {
      return temp > 19;
    };

    _.forEach(cities, function(temps, city) {
      if (_.every(temps, hotTemp)) {
        tempCities.hot.push(city);
      } else if (_.some(temps, hotTemp)){
        tempCities.warm.push(city);
      }
    });
    return tempCities;
};

module.exports = worker;
