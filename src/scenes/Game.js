import { Scene } from "phaser";
import { createTilemapLayer, addTileset, findObjectByName } from './../components/TileMapUtil';
import { Obstacle, MovingObstacle, FallingPlatform } from './../entities/Obstacles';

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
    // Crear el tilemap
    const mapN1 = this.make.tilemap({ key: "mapN1" });

    // Añadir los tilesets usando la función modularizada
    const background = addTileset(mapN1, "fondonuevo", "hades");
    const floor1 = addTileset(mapN1, "floor_6", "floor3");
    const floor2 = addTileset(mapN1, "floor_5", "floor2");
    const floor3 = addTileset(mapN1, "floor_1", "floor1");
    const floor4 = addTileset(mapN1, "floor_4", "floor4");
    const wall = addTileset(mapN1, "wall2", "wall");
    const rock = addTileset(mapN1, "rock_1", "rock1");

    // Crear las capas del tilemap
    const backgroundLayer = createTilemapLayer(mapN1, "background", background);
    const floor1Layer = createTilemapLayer(mapN1, "floor_1", floor2);
    const floor2Layer = createTilemapLayer(mapN1, "floor_2", floor1);
    const floor3Layer = createTilemapLayer(mapN1, "floor_3", floor3);
    const floor4Layer = createTilemapLayer(mapN1, "floor_4", floor4);
    const wallLayer = createTilemapLayer(mapN1, "walls", wall);
    const rockLayer = createTilemapLayer(mapN1, "platform", rock);

    // Configurar colisiones en la capa rockLayer
    rockLayer.setCollisionByProperty({ colision: true });

    // Encontrar el punto de spawn para el jugador 1 usando la función modularizada
    const spawnPoint_1 = findObjectByName(mapN1, "objects", "player_1");

    // Crear los jugadores usando las coordenadas del spawn point
    this.player1 = this.physics.add.sprite(spawnPoint_1.x, spawnPoint_1.y, "player1"); // spawnPoint_1.x, spawnPoint_1.y,
    this.player2 = this.physics.add.sprite(spawnPoint_1.x, spawnPoint_1.y, "player2");

    // Configurar propiedades y colisiones para los jugadores
    this.player1.setBounce(0.1);
    this.player1.setCollideWorldBounds(true);
    this.player2.setBounce(0.1);
    this.player2.setCollideWorldBounds(true);

    this.physics.add.collider(this.player1, rockLayer);
    this.physics.add.collider(this.player2, rockLayer);

    this.cursors = this.input.keyboard.createCursorKeys();
    this.wasdKeys = this.input.keyboard.addKeys({
      up: Phaser.Input.Keyboard.KeyCodes.W,
      left: Phaser.Input.Keyboard.KeyCodes.A,
      right: Phaser.Input.Keyboard.KeyCodes.D,
    });
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
    // ----------------------------------- Platform --------------------------
    this.obstacle = new MovingObstacle(this, 400, 650, "platform_move", {
      minX: 550,
      maxX: 800,
      speed: 100
    });
    this.obstacle.body.setAllowGravity(false);
    this.physics.add.collider(this.player1, this.obstacle);
    this.physics.add.collider(this.player2, this.obstacle);

    this.obstacle2 = new MovingObstacle(this, 700, 350, "platform_move", {
      minX: 700,
      maxX: 850,
      speed: 100
    });
    this.obstacle2.body.setAllowGravity(false);
    this.physics.add.collider(this.player1, this.obstacle2);
    this.physics.add.collider(this.player2, this.obstacle2);
  
     // Crear la plataforma
     this.platform3 = new FallingPlatform(this, 1050, 260, 'platform_move'); // 1050, 260;
    this.platform3.body.setAllowGravity(false);
    // Añadir el collider entre el jugador y la plataforma
    this.physics.add.collider(
      this.player1, 
      this.platform3, 
      () => {
        this.platform3.fallAndRespawn(1000, 2000); // 1 segundo para caer, reaparece en 3 segundos
      },
    );
    this.physics.add.collider(
      this.player2, 
      this.platform3, 
      () => {
        this.platform3.fallAndRespawn(1000, 2000); // 1 segundo para caer, reaparece en 3 segundos
      },
    );

    // Crear la plataforma
    this.platform4 = new Obstacle(this, 1200, 260, "platform_move" );
    this.platform4.body.setAllowGravity(false);

    this.physics.add.collider(this.player1, this.platform4);
    this.physics.add.collider(this.player2, this.platform4);
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

    if (this.obstacle instanceof MovingObstacle) {
      this.obstacle.update();
    }
    if (this.obstacle2 instanceof MovingObstacle) {
      this.obstacle2.update();
    }
    if (this.platform3) {
      this.platform3.update();
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
