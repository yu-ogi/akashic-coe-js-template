const { Scene: COEScene } = require("@akashic-extension/coe");

class Scene extends COEScene {
  constructor(...args) {
    super(...args);
    this.onCommandReceive.add(this.handleCommandReceived, this);
  }

  handleCommandReceived(command) {
    console.log(command);
  }
}

module.exports = Scene;
