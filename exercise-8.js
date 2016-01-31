var _ = require("lodash");

var worker = function (incomes) {
  incomes = _.sortBy(incomes, 'income')

  var average = _.reduce(incomes, function(sum, income) {
    return sum + income.income;
  }, 0);

  average = average / incomes.length;

  var under = _.filter(incomes, function(income) {
    return income.income <= average;
  });

  var over = _.filter(incomes, function(income) {
    return income.income > average;
  });

  return { average: average, underperform: under, overperform: over}
};

module.exports = worker;
