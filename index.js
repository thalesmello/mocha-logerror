const { Runner } = require('mocha')

const old = Runner.prototype.fail;
Runner.prototype.fail = function (test, err) {
  console.log(JSON.stringify(err, null, 4))
  return old.call(this, test, err);
};
