import { Game } from "./scenes/Game";
import { Credits } from "./scenes/Credits";
import { Options } from "./scenes/Options";
import { Preloader } from "./scenes/Preloader";
import { MainMenu } from "./scenes/MainMenu";

//  Find out more information about the Game Config at:
//  https://newdocs.phaser.io/docs/3.70.0/Phaser.Types.Core.GameConfig
const config = {
  type: Phaser.AUTO,
  width: 1568,
  height: 864,
  parent: "game-container",
  backgroundColor: "#028af8",
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 400 },
      debug: false,
    },
  },
  scene: [Preloader, MainMenu, Game, Credits, Options],
};

export default new Phaser.Game(config);
