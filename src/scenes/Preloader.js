import { Scene } from "phaser";

export class Preloader extends Scene {
  constructor() {
    super("Preloader");
  }

  preload() {
    this.load.tilemapTiledJSON("mapN1", "/src/tilemaps/level3.json");
    this.load.image("bg", "./assets/bg.png");
    this.load.image("hades", "/src/images/fondonuevo.png");
    this.load.image("spikes", "src/images/spikes_1.png");
    this.load.image("rock1", "src/images/rock_1.png");
    this.load.image("wall", "src/images/wall2.png");
    this.load.image("floor1", "src/images/floor_1.png");
    this.load.image("floor2", "src/images/floor_5.png");
    this.load.image("floor3", "src/images/floor_6.png");
    this.load.image("floor4", "src/images/floor_4.png");
    this.load.image("floor4", "src/images/floor_4.png");
    this.load.image("platform_move1", "src/images/platform1.png");
    this.load.image("platform_move2", "src/images/platform2.png");
    this.load.tilemapTiledJSON("map", "/src/tilemaps/map_test.json");
    this.load.image("tiles1", "src/images/Tiles.png");
    this.load.image("platform_move", "src/images/platform_move.png");
    this.load.spritesheet("player1", "/src/images/dude.png", {
      frameWidth: 32,
      frameHeight: 48,
    });
    this.load.spritesheet("player2", "/src/images/dude.png", {
      frameWidth: 32,
      frameHeight: 48,
    });
    this.load.image("chain", "./src/images/chain.png");
  }

  create() {
    this.anims.create({
      key: "left",
      frames: this.anims.generateFrameNumbers("player1", { start: 0, end: 3 }),
      frameRate: 10,
      repeat: -1,
    });

    this.anims.create({
      key: "turn",
      frames: [{ key: "player1", frame: 4 }],
      frameRate: 20,
    });

    this.anims.create({
      key: "right",
      frames: this.anims.generateFrameNumbers("player1", { start: 5, end: 8 }),
      frameRate: 10,
      repeat: -1,
    });

    this.anims.create({
      key: "left",
      frames: this.anims.generateFrameNumbers("player2", { start: 0, end: 3 }),
      frameRate: 10,
      repeat: -1,
    });

    this.anims.create({
      key: "turn",
      frames: [{ key: "player2", frame: 4 }],
      frameRate: 20,
    });

    this.anims.create({
      key: "right",
      frames: this.anims.generateFrameNumbers("player2", { start: 5, end: 8 }),
      frameRate: 10,
      repeat: -1,
    });


    this.scene.start("GameTest");
  }
}
