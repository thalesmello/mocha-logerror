const { Runner } = require('mocha')

const old = Runner.prototype.fail;
Runner.prototype.fail = function (test, err) {
  if (err instanceof Error) {
    let extraProperties = JSON.parse(JSON.stringify(err))
    let extraWithMessage = Object.assign(extraProperties, { message: err.message })
    err.message = JSON.stringify(extraWithMessage, null, 4)
  }

  return old.call(this, test, err);
};
