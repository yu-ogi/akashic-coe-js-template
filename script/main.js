const { initialize } = require("@akashic-extension/coe");
const Scene = require("./scenes/scene");
const Controller = require("./controllers/controller");

module.exports = (args) => {
  const game = g.game;

  initialize({ game, args });

  const controller = new Controller();
  const scene = new Scene({
    game,
    controller,
    assetPaths: [],
  });

  game.pushScene(scene);
};
