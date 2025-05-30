const { Scene: COEScene } = require("@akashic-extension/coe");

/**
 * @extends {COEScene<Command, ActionData>}
 */
class Scene extends COEScene {
  constructor(...args) {
    super(...args);
    this.onCommandReceive.add(this.handleCommandReceived, this);
  }

  /**
   * @param {Command} command
   */
  handleCommandReceived(command) {
    console.log(command);
  }
}

module.exports = Scene;
