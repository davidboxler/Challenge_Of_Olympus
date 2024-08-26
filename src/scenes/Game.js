import { Scene } from "phaser";

export class Game extends Scene {
  constructor() {
    super("Game");
  }

  create() {
    const mapN1 = this.make.tilemap({ key: "mapN1" });

    const background = mapN1.addTilesetImage("fondonuevo", "hades");
    const floor1 = mapN1.addTilesetImage("floor_6", "floor3");
    const floor2 = mapN1.addTilesetImage("floor_5", "floor2");
    const floor3 = mapN1.addTilesetImage("floor_1", "floor1");
    const floor4 = mapN1.addTilesetImage("floor_4", "floor4");
    const wall = mapN1.addTilesetImage("wall2", "wall");
    const rock = mapN1.addTilesetImage("rock_1", "rock1");

    const backgroundLayer = mapN1.createLayer("background", background, 0, 0);
    const floor1Layer = mapN1.createLayer("floor_1", floor2, 0, 0);
    const floor2Layer = mapN1.createLayer("floor_2", floor1, 0, 0);
    const floor3Layer = mapN1.createLayer("floor_3", floor3, 0, 0);
    const floor4Layer = mapN1.createLayer("floor_4", floor4, 0, 0);
    const wallLayer = mapN1.createLayer("walls", wall, 0, 0);
    const rockLayer = mapN1.createLayer("platform", rock, 0, 0);

    const objectsLayer = mapN1.getObjectLayer("objects");
    rockLayer.setCollisionByProperty({ colision: true });

    let spawnPoint_1 = mapN1.findObject(
      "objects",
      (obj) => obj.name === "player_1"
    );

    this.player1 = this.physics.add.sprite(
      spawnPoint_1.x,
      spawnPoint_1.y,
      "player1"
    );

    this.player1.setBounce(0.1);
    this.player1.setCollideWorldBounds(true);

    this.cursors = this.input.keyboard.createCursorKeys();

    this.physics.add.collider(this.player1, rockLayer);

    // Crear la plataforma
    this.platform = this.physics.add.sprite(400, 650, "platform_move");

    // Establecer los límites de movimiento
    this.platform.body.setAllowGravity(false);
    this.platform.body.setImmovable(true);
    this.platform.minX = 550;
    this.platform.maxX = 800;

    // Establecer la velocidad de movimiento
    this.platform.speed = 100;

    // Inicializar la dirección del movimiento
    this.platform.body.velocity.x = this.platform.speed;

    this.physics.add.collider(this.player1, this.platform);

    // Crear la plataforma
    this.platform2 = this.physics.add.sprite(700, 300, "platform_move");

    // Establecer los límites de movimiento
    this.platform2.body.setAllowGravity(false);
    this.platform2.body.setImmovable(true);
    this.platform2.minX = 700;
    this.platform2.maxX = 900;

    // Establecer la velocidad de movimiento
    this.platform2.speed = 100;

    // Inicializar la dirección del movimiento
    this.platform2.body.velocity.x = this.platform2.speed;

    this.physics.add.collider(this.player1, this.platform2);

    // Crear la plataforma
    this.platform3 = this.physics.add.sprite(1050, 250, "platform_move");

    // Establecer los límites de movimiento
    this.platform3.body.setAllowGravity(false);
    this.platform3.body.setImmovable(true);

    // Añadir el collider entre el jugador y la plataforma
    this.physics.add.collider(this.player1, this.platform3, this.handlePlatformCollision, null, this);

    // Crear la plataforma
    this.platform4 = this.physics.add.sprite(1200, 250, "platform_move");

    // Establecer los límites de movimiento
    this.platform4.body.setAllowGravity(false);
    this.platform4.body.setImmovable(true);

    this.physics.add.collider(this.player1, this.platform4);
  }

  // Función para manejar la colisión
  handlePlatformCollision(player, platform) {
    // Hacer que la plataforma caiga
    platform.body.setAllowGravity(true);
    platform.body.setImmovable(false);

    // Eliminar la plataforma después de 2 segundos
    this.time.delayedCall(2000, () => {
      platform.destroy(); // Desaparecer la plataforma
    });
  }

  update() {
    //move left
    if (this.cursors.left.isDown) {
      this.player1.setVelocityX(-160);
      this.player1.anims.play("left", true);
    } //move right
    else if (this.cursors.right.isDown) {
      this.player1.setVelocityX(160);
      this.player1.anims.play("right", true);
    } //stop
    else {
      this.player1.setVelocityX(0);
      this.player1.anims.play("turn");
    } //jump
    if (this.cursors.up.isDown && this.player1.body.blocked.down) {
      this.player1.setVelocityY(-330);
    }

    // Invertir la dirección si llega a un límite
    if (this.platform.x <= this.platform.minX) {
      this.platform.body.velocity.x = this.platform.speed;
    } else if (this.platform.x >= this.platform.maxX) {
      this.platform.body.velocity.x = -this.platform.speed;
    }

    // Invertir la dirección si llega a un límite
    if (this.platform2.x <= this.platform2.minX) {
      this.platform2.body.velocity.x = this.platform2.speed;
    } else if (this.platform2.x >= this.platform2.maxX) {
      this.platform2.body.velocity.x = -this.platform2.speed;
    }
  }
}
