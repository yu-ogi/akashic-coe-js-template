const { COEController } = require("@akashic-extension/coe");

/**
 * @extends {COEController<Command, ActionData>}
 */
class Controller extends COEController {
  constructor() {
    super();
    this.onActionReceive.add(this.handleActionReceived, this);
  }

  /**
   * @param {import("@akashic-extension/coe").Action<ActionData>} action
   */
  handleActionReceived(action) {
    console.log(action);
  }
}

module.exports = Controller;
