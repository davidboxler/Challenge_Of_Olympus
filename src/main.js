import { Credits } from "./scenes/Credits";
import { GameTest } from './scenes/Game_test';
import { MainMenu } from "./scenes/MainMenu";
import { Options } from "./scenes/Options";
import { Preloader } from "./scenes/Preloader";
import { SelectorMode } from "./scenes/SelectorMode";
import { Versus } from "./scenes/Versus";

//  Find out more information about the Game Config at:
//  https://newdocs.phaser.io/docs/3.70.0/Phaser.Types.Core.GameConfig
const config = {
  type: Phaser.AUTO,
  width: 2560,
  height: 1920,
  pixelArt: true,
  parent: "game-container",
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 350 },
      debug: false,
    },
  },
  scene: [Preloader, MainMenu, Options, SelectorMode, GameTest, Versus, Credits],
};

export default new Phaser.Game(config);
