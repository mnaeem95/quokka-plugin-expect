const expectjs = require('expect')

const global = this

module.exports = {
  before: config => {
      global.expect = expectjs
      expect = expectjs
  },
  beforeEach: config => {
  }
}