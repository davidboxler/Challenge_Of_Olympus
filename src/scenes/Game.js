import { Scene } from "phaser";

export class Game extends Scene {
  constructor() {
    super("Game");
  }
  init() {
    this.segmentLength = 12; // Longitud de cada segmento
    this.segmentCount = 5; // Número de segmentos en la cadena
    this.maxDistance = this.segmentLength * this.segmentCount; // Distancia máxima permitida
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
    this.player2 = this.physics.add.sprite(
      spawnPoint_1.x,
      spawnPoint_1.y,
      "player2"
    );

    this.player1.setBounce(0.1);
    this.player1.setCollideWorldBounds(true);
    this.player2.setBounce(0.1);
    this.player2.setCollideWorldBounds(true);

    this.cursors = this.input.keyboard.createCursorKeys();
    this.wasdKeys = this.input.keyboard.addKeys({
      up: Phaser.Input.Keyboard.KeyCodes.W,
      left: Phaser.Input.Keyboard.KeyCodes.A,
      right: Phaser.Input.Keyboard.KeyCodes.D,
    });

    this.physics.add.collider(this.player1, rockLayer);
    this.physics.add.collider(this.player2, rockLayer);
    //----------------------------------------------------------------------Cadena ----------------------------------
    // Crear los segmentos de la cadena
    this.segments = [];
    for (let i = 0; i < this.segmentCount; i++) {
      const segment = this.physics.add.sprite(0, 0, "chain");
      segment.setScale(0.7);
      segment.body.immovable = true;
      segment.body.moves = false;
      this.segments.push(segment);
    }
    const offsetY = 100;
    this.segments[0].setPosition(this.player1.x, this.player1.y * offsetY);
    this.segments[this.segmentCount - 1].setPosition(
      this.player2.x,
      this.player2.y
    );
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
    this.physics.add.collider(this.player2, this.platform);

    // Crear la plataforma
    this.platform2 = this.physics.add.sprite(700, 350, "platform_move");

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
    this.physics.add.collider(this.player2, this.platform2);

    // Crear la plataforma
    this.platform3 = this.physics.add.sprite(1050, 260, "platform_move");

    // Establecer los límites de movimiento
    this.platform3.body.setAllowGravity(false);
    this.platform3.body.setImmovable(true);

    // Añadir el collider entre el jugador y la plataforma
    this.physics.add.collider(
      this.player1,
      this.platform3,
      this.handlePlatformCollision,
      null,
      this
    );
    this.physics.add.collider(
      this.player2,
      this.platform3,
      this.handlePlatformCollision,
      null,
      this
    );

    // Crear la plataforma
    this.platform4 = this.physics.add.sprite(1200, 260, "platform_move");

    // Establecer los límites de movimiento
    this.platform4.body.setAllowGravity(false);
    this.platform4.body.setImmovable(true);

    this.physics.add.collider(this.player1, this.platform4);
    this.physics.add.collider(this.player2, this.platform4);
  }

  // Función para manejar la colisión
  handlePlatformCollision(player, platform) {
    // Esperar 5 segundos antes de hacer que la plataforma comience a caer
    this.time.delayedCall(1000, () => {
      // Hacer que la plataforma caiga después de 5 segundos
      platform.body.setAllowGravity(true);
      platform.body.setImmovable(false);

      // Eliminar la plataforma después de 2 segundos desde que comenzó a caer
      this.time.delayedCall(2000, () => {
        platform.destroy(); // Desaparecer la plataforma
      });
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
      this.player1.setVelocityY(-313);
    }
    //move left player 2
    if (this.wasdKeys.left.isDown) {
      this.player2.setVelocityX(-160);
      this.player2.anims.play("left", true);
    } //move right player 2
    else if (this.wasdKeys.right.isDown) {
      this.player2.setVelocityX(160);
      this.player2.anims.play("right", true);
    } //stop
    else {
      this.player2.setVelocityX(0);
      this.player2.anims.play("turn");
    } //jump player 2
    if (this.wasdKeys.up.isDown && this.player2.body.blocked.down) {
      this.player2.setVelocityY(-313);
    }
    //Funcion cadena
    this.updateChain();

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
  updateChain() {
    const offsetY = 15;
    // Calcular la distancia actual entre los dos personajes
    const distance = Phaser.Math.Distance.Between(
      this.player1.x,
      this.player1.y,
      this.player2.x,
      this.player2.y
    );

    // Si la distancia es mayor que la distancia máxima permitida
    if (distance > this.maxDistance) {
      const angle = Phaser.Math.Angle.Between(
        this.player1.x,
        this.player1.y,
        this.player2.x,
        this.player2.y
      );
      const overlap = distance - this.maxDistance;

      // Calcular el punto intermedio entre los dos personajes
      const midX = (this.player1.x + this.player2.x) / 2;
      const midY = (this.player1.y + this.player2.y) / 2;

      // Interpolar suavemente la posición de los personajes hacia el punto intermedio
      const t = 3; // Factor de interpolación (ajusta según sea necesario)
      this.player1.x = Phaser.Math.Linear(
        this.player1.x,
        midX - (Math.cos(angle) * this.maxDistance) / 2,
        t
      );
      this.player1.y = Phaser.Math.Linear(
        this.player1.y,
        midY - (Math.sin(angle) * this.maxDistance) / 2,
        t
      );
      this.player2.x = Phaser.Math.Linear(
        this.player2.x,
        midX + (Math.cos(angle) * this.maxDistance) / 2,
        t
      );
      this.player2.y = Phaser.Math.Linear(
        this.player2.y,
        midY + (Math.sin(angle) * this.maxDistance) / 2,
        t
      );
    }

    // Actualizar la posición de los segmentos intermedios
    this.segments[0].setPosition(this.player1.x, this.player1.y + offsetY);
    this.segments[this.segmentCount - 1].setPosition(
      this.player2.x,
      this.player2.y + offsetY
    );

    for (let i = 1; i < this.segmentCount - 1; i++) {
      const seg1 = this.segments[i - 1];
      const seg2 = this.segments[i + 1];
      const angle = Phaser.Math.Angle.Between(seg1.x, seg1.y, seg2.x, seg2.y);

      this.segments[i].x = seg1.x + Math.cos(angle) * this.segmentLength;
      this.segments[i].y = seg1.y + Math.sin(angle) * this.segmentLength;
    }
  }
}
