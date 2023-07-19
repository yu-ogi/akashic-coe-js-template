const { COEController } = require("@akashic-extension/coe");

class Controller extends COEController {
  constructor() {
    super();
    this.onActionReceive.add(this.handleActionReceived, this);
  }

  handleActionReceived(action) {
    console.log(action);
  }
}

module.exports = Controller;
