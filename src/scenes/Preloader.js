import { Scene } from "phaser";

export class Preloader extends Scene {
  constructor() {
    super("Preloader");
  }

  preload() {
    /* ---------- Mapa Videojuego ----------- */
    this.load.tilemapTiledJSON("map", "./assets/map_test.json");

    /* ---------- Imagen Fondo ----------- */
    this.load.image("background", "./assets/images/fondo.png");
    this.load.image("back_piso", "./assets/images/back_piso.png");
    this.load.image("bg", "./assets/bg.png");
    this.load.image("tilePl", "./assets/images/platformTiled.png")

    /* ---------- Imagenes Videojuego ----------- */
    this.load.image("chain", "./assets/images/chain.png");
    this.load.image("platform_mobile", "./assets/images/platform1.png");
    this.load.image("platform_falling", "./assets/images/platform2.png");
    this.load.image("plat1", "./assets/images/plat1.png");
    this.load.image("plat_limite", "./assets/images/plat_limite.png");
    this.load.image("plat_alta", "./assets/images/plat_alta.png");
    this.load.image("plat_centro", "./assets/images/plat_centro.png");
    this.load.image("plat_esc", "./assets/images/plat_esc.png");
    this.load.image("plat_cuad", "./assets/images/plat_cuad.png");
    this.load.image("plat_larga", "./assets/images/plat_larga.png");
    this.load.image("plat4", "./assets/images/plat4.png");
    this.load.image("tilesSet", "./assets/images/Tiles.png");

    /* ---------- SpriteSheet Jugadores ----------- */
    this.load.spritesheet("player1", "./assets/images/dude.png", {
      frameWidth: 32,
      frameHeight: 48,
    });
    this.load.spritesheet("player2", "./assets/images/dude.png", {
      frameWidth: 32,
      frameHeight: 48,
    });

    /* ---------- Imagenes Botones Videojuego ----------- */
    /* ---------- Imagenes Instrucciones ----------- */
    /* ---------- AUudios Videojuego ----------- */
    /* ---------- Imagenes Finales Videojuego ----------- */
    /* --------------- Cinematicas ------------------- */
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

    this.scene.start("GameCapas");
  }
}
