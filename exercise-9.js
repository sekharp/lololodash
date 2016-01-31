var _ = require("lodash");

var worker = function (user) {
  var logins = user.login.length

  return _.template('Hello <%= name %> (logins: <%= login_count %>)')({ name: user.name, login_count: logins });
};

module.exports = worker;
