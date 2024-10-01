import { Scene } from "phaser";
import { findObjectByName } from "../components/TileMapUtil";
import {
  FallingPlatform,
  MovingObstacle,
  Obstacle,
} from "./../entities/Obstacles";
export class GameCapas extends Scene {
  constructor() {
    super("GameCapas");
  }
  init() {
    this.segmentLength = 12; // Longitud de cada segmento
    this.segmentCount = 5; // Número de segmentos en la cadena
    this.maxDistance = this.segmentLength * this.segmentCount; // Distancia máxima permitida
  }
  create() {
    const map = this.make.tilemap({ key: "map" });
    const fondo = this.add.image(0, 0, "background");
    fondo.setOrigin(0, 0);
    fondo.setDisplaySize(this.scale.width, this.scale.height);

    const backFondo = new Obstacle(this, 1280, 1910, "back_piso");
    const platCentro = new Obstacle(this, 1600, 1872, "plat_centro");
    const platLimite = new Obstacle(this, 190, 1641, "plat_limite");
    const platformBasic_1 = new Obstacle(this, 1920, 1750, "plat4");
    const platformBasic_2 = new Obstacle(this, 1420, 1500, "plat4");
    const platformBasic_3 = new Obstacle(this, 1220, 1400, "plat4");
    const platformBasic_4 = new Obstacle(this, 1050, 1325, "plat_cuad");
    const platformBasic_5 = new Obstacle(this, 1000, 1310, "plat_alta");
    const platformBasic_6 = new Obstacle(this, 1900, 1340, "plat1");
    const platformBasic_7 = new Obstacle(this, 2020, 1340, "plat1");
    const platformBasic_8 = new Obstacle(this, 2140, 1340, "plat1");
    const platformBasic_9 = new Obstacle(this, 2140, 1295, "plat_cuad");
    const platformBasic_10 = new Obstacle(this, 2310, 1340, "plat4");
    const platformBasic_11 = new Obstacle(this, 2310, 1285, "plat_alta");
    const platformBasic_12 = new Obstacle(this, 2500, 1340, "plat1");
    const platformBasic_13 = new Obstacle(this, 130, 970, "plat1");
    const platformBasic_14 = new Obstacle(this, 580, 890, "plat4");
    const platformBasic_15 = new Obstacle(this, 800, 890, "plat4");
    const platformBasic_16 = new Obstacle(this, 800, 850, "plat_cuad");
    const platformBasic_17 = new Obstacle(this, 1040, 860, "plat4");
    const platformBasic_18 = new Obstacle(this, 1250, 820, "plat1");
    const platformBasic_19 = new Obstacle(this, 1350, 820, "plat1");
    const platformBasic_20 = new Obstacle(this, 1560, 860, "plat4");
    const platformBasic_21 = new Obstacle(this, 2060, 860, "plat_larga");
    const platformBasic_22 = new Obstacle(this, 1860, 820, "plat_cuad");
    const platformBasic_23 = new Obstacle(this, 2360, 770, "plat4");
    const platformBasic_24 = new Obstacle(this, 2160, 670, "plat4");
    const platformBasic_25 = new Obstacle(this, 1960, 570, "plat4");
    const platformBasic_26 = new Obstacle(this, 1660, 570, "plat4");
    const platformBasic_27 = new Obstacle(this, 1575, 545, "plat1");
    const platformBasic_28 = new Obstacle(this, 1490, 520, "plat4");
    const platformBasic_29 = new Obstacle(this, 1375, 490, "plat4");
    const platformBasic_30 = new Obstacle(this, 1580, 380, "plat1");
    const platformBasic_31 = new Obstacle(this, 1680, 380, "plat1");
    const platformBasic_32 = new Obstacle(this, 1870, 310, "plat4");
    const platformBasic_33 = new Obstacle(this, 1670, 210, "plat4");
    const platformBasic_34 = new Obstacle(this, 690, 210, "plat_cuad");
    const platformBasic_35 = new Obstacle(this, 530, 210, "plat_cuad");
    const platformBasic_36 = new Obstacle(this, 370, 210, "plat_cuad");
    const platformBasic_37 = new Obstacle(this, 180, 210, "plat4");
    const platformBasic_38 = new Obstacle(this, 370, 600, "plat_larga");
    const platformBasic_39 = new Obstacle(this, 2070, 210, "plat4");
    const platformBasic_40 = new Obstacle(this, 2270, 110, "plat4");

    // Encontrar el punto de spawn para el jugador 1 usando la función modularizada
    const spawnPoint_1 = findObjectByName(map, "objetos", "player1");

    // Crear los jugadores usando las coordenadas del spawn point
    this.player1 = this.physics.add.sprite(2158, 1824, "player1"); // spawnPoint_1.x, spawnPoint_1.y,
    this.player2 = this.physics.add.sprite(2084, 1826, "player2");

    // Configurar propiedades y colisiones para los jugadores
    this.player1.setBounce(0.1);
    this.player1.setCollideWorldBounds(true);

    this.player2.setBounce(0.1);
    this.player2.setCollideWorldBounds(true);

    // Crear colisiones entre player1 y todas las plataformas
    this.physics.add.collider(this.player1, backFondo);
    this.physics.add.collider(this.player1, platCentro);
    this.physics.add.collider(this.player1, platLimite);
    this.physics.add.collider(this.player1, platformBasic_1);
    this.physics.add.collider(this.player1, platformBasic_2);
    this.physics.add.collider(this.player1, platformBasic_3);
    this.physics.add.collider(this.player1, platformBasic_4);
    this.physics.add.collider(this.player1, platformBasic_5);
    this.physics.add.collider(this.player1, platformBasic_6);
    this.physics.add.collider(this.player1, platformBasic_7);
    this.physics.add.collider(this.player1, platformBasic_8);
    this.physics.add.collider(this.player1, platformBasic_9);
    this.physics.add.collider(this.player1, platformBasic_10);
    this.physics.add.collider(this.player1, platformBasic_11);
    this.physics.add.collider(this.player1, platformBasic_12);
    this.physics.add.collider(this.player1, platformBasic_13);
    this.physics.add.collider(this.player1, platformBasic_14);
    this.physics.add.collider(this.player1, platformBasic_15);
    this.physics.add.collider(this.player1, platformBasic_16);
    this.physics.add.collider(this.player1, platformBasic_17);
    this.physics.add.collider(this.player1, platformBasic_18);
    this.physics.add.collider(this.player1, platformBasic_19);
    this.physics.add.collider(this.player1, platformBasic_20);
    this.physics.add.collider(this.player1, platformBasic_21);
    this.physics.add.collider(this.player1, platformBasic_22);
    this.physics.add.collider(this.player1, platformBasic_23);
    this.physics.add.collider(this.player1, platformBasic_24);
    this.physics.add.collider(this.player1, platformBasic_25);
    this.physics.add.collider(this.player1, platformBasic_26);
    this.physics.add.collider(this.player1, platformBasic_27);
    this.physics.add.collider(this.player1, platformBasic_28);
    this.physics.add.collider(this.player1, platformBasic_29);
    this.physics.add.collider(this.player1, platformBasic_30);
    this.physics.add.collider(this.player1, platformBasic_31);
    this.physics.add.collider(this.player1, platformBasic_32);
    this.physics.add.collider(this.player1, platformBasic_33);
    this.physics.add.collider(this.player1, platformBasic_34);
    this.physics.add.collider(this.player1, platformBasic_35);
    this.physics.add.collider(this.player1, platformBasic_36);
    this.physics.add.collider(this.player1, platformBasic_37);
    this.physics.add.collider(this.player1, platformBasic_38);
    this.physics.add.collider(this.player1, platformBasic_39);
    this.physics.add.collider(this.player1, platformBasic_40);

    // Crear colisiones entre player2 y todas las plataformas
    this.physics.add.collider(this.player2, backFondo);
    this.physics.add.collider(this.player2, platCentro);
    this.physics.add.collider(this.player2, platLimite);
    this.physics.add.collider(this.player2, platformBasic_1);
    this.physics.add.collider(this.player2, platformBasic_2);
    this.physics.add.collider(this.player2, platformBasic_3);
    this.physics.add.collider(this.player2, platformBasic_4);
    this.physics.add.collider(this.player2, platformBasic_5);
    this.physics.add.collider(this.player2, platformBasic_6);
    this.physics.add.collider(this.player2, platformBasic_7);
    this.physics.add.collider(this.player2, platformBasic_8);
    this.physics.add.collider(this.player2, platformBasic_9);
    this.physics.add.collider(this.player2, platformBasic_10);
    this.physics.add.collider(this.player2, platformBasic_11);
    this.physics.add.collider(this.player2, platformBasic_12);
    this.physics.add.collider(this.player2, platformBasic_13);
    this.physics.add.collider(this.player2, platformBasic_14);
    this.physics.add.collider(this.player2, platformBasic_15);
    this.physics.add.collider(this.player2, platformBasic_16);
    this.physics.add.collider(this.player2, platformBasic_17);
    this.physics.add.collider(this.player2, platformBasic_18);
    this.physics.add.collider(this.player2, platformBasic_19);
    this.physics.add.collider(this.player2, platformBasic_20);
    this.physics.add.collider(this.player2, platformBasic_21);
    this.physics.add.collider(this.player2, platformBasic_22);
    this.physics.add.collider(this.player2, platformBasic_23);
    this.physics.add.collider(this.player2, platformBasic_24);
    this.physics.add.collider(this.player2, platformBasic_25);
    this.physics.add.collider(this.player2, platformBasic_26);
    this.physics.add.collider(this.player2, platformBasic_27);
    this.physics.add.collider(this.player2, platformBasic_28);
    this.physics.add.collider(this.player2, platformBasic_29);
    this.physics.add.collider(this.player2, platformBasic_30);
    this.physics.add.collider(this.player2, platformBasic_31);
    this.physics.add.collider(this.player2, platformBasic_32);
    this.physics.add.collider(this.player2, platformBasic_33);
    this.physics.add.collider(this.player2, platformBasic_34);
    this.physics.add.collider(this.player2, platformBasic_35);
    this.physics.add.collider(this.player2, platformBasic_36);
    this.physics.add.collider(this.player2, platformBasic_37);
    this.physics.add.collider(this.player2, platformBasic_38);
    this.physics.add.collider(this.player2, platformBasic_39);
    this.physics.add.collider(this.player2, platformBasic_40);

    // Configurar la cámara para que siga al jugador 1
    this.cameras.main.startFollow(this.player1);

    // Limitar la cámara a los bordes del mapa
    // Establecer los límites de la cámara dentro del tamaño del mapa
    this.cameras.main.setBounds(0, 0, map.widthInPixels, map.heightInPixels);

    // Establecer los límites de movimiento del jugador dentro del mapa
    this.physics.world.setBounds(0, 0, map.widthInPixels, map.heightInPixels);
    this.cameras.main.setZoom(2); // Ajusta el zoom según lo necesites

    this.cursors = this.input.keyboard.createCursorKeys();
    this.wasdKeys = this.input.keyboard.addKeys({
      up: Phaser.Input.Keyboard.KeyCodes.W,
      left: Phaser.Input.Keyboard.KeyCodes.A,
      right: Phaser.Input.Keyboard.KeyCodes.D,
    });

    /* --------------------------------- Cadena -------------------------------- */
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

    /* ------------------------- Mobile platforms  -------------------------- */
    this.platform_mobile1 = new MovingObstacle(
      this,
      1600,
      1630,
      "platform_mobile",
      {
        minX: 1600,
        maxX: 2000,
        speed: 100,
      },
      this.player1,
      this.player2
    );

    this.platform_mobile2 = new MovingObstacle(
      this,
      850,
      240,
      "platform_mobile",
      {
        minX: 850,
        maxX: 1150,
        speed: 100,
      },
      this.player1,
      this.player2
    );

    /* ------------------------- Falling platforms  -------------------------- */
    this.platform_falling1 = new FallingPlatform(
      this,
      1675,
      1420,
      "platform_falling",
      this.player1,
      this.player2
    );

    this.platform_falling2 = new FallingPlatform(
      this,
      770,
      1270,
      "platform_falling",
      this.player1,
      this.player2
    );

    this.platform_falling3 = new FallingPlatform(
      this,
      540,
      1175,
      "platform_falling",
      this.player1,
      this.player2
    );

    this.platform_falling4 = new FallingPlatform(
      this,
      310,
      1080,
      "platform_falling",
      this.player1,
      this.player2
    );

    this.platform_falling5 = new FallingPlatform(
      this,
      310,
      890,
      "platform_falling",
      this.player1,
      this.player2
    );

    this.platform_falling6 = new FallingPlatform(
      this,
      1400,
      190,
      "platform_falling",
      this.player1,
      this.player2
    );

    // Crear un grupo estático para las plataformas
    // const plataformas = this.physics.add.staticGroup();

    // // Datos de las plataformas
    // const platformData = [
    //   { x: 1280, y: 1910, key: "back_piso" },
    //   { x: 1600, y: 1872, key: "plat_centro" },
    //   { x: 190, y: 1641, key: "plat_limite" },
    //   { x: 1920, y: 1770, key: "plat4" },
    //   { x: 1420, y: 1500, key: "plat4" },
    //   { x: 1220, y: 1400, key: "plat4" },
    //   { x: 1050, y: 1325, key: "plat_cuad" },
    //   { x: 1000, y: 1310, key: "plat_alta" },
    //   { x: 1900, y: 1340, key: "plat1" },
    //   { x: 2020, y: 1340, key: "plat1" },
    //   { x: 2140, y: 1340, key: "plat1" },
    //   { x: 2140, y: 1295, key: "plat_cuad" },
    //   { x: 2310, y: 1340, key: "plat4" },
    //   { x: 2310, y: 1285, key: "plat_alta" },
    //   { x: 2500, y: 1340, key: "plat1" },
    //   { x: 130, y: 970, key: "plat1" },
    //   { x: 580, y: 890, key: "plat4" },
    //   { x: 800, y: 890, key: "plat4" },
    //   { x: 800, y: 850, key: "plat_cuad" },
    //   { x: 1040, y: 860, key: "plat4" },
    //   { x: 1250, y: 820, key: "plat1" },
    //   { x: 1350, y: 820, key: "plat1" },
    //   { x: 1560, y: 860, key: "plat4" },
    //   { x: 2060, y: 860, key: "plat_larga" },
    //   { x: 1860, y: 820, key: "plat_cuad" },
    //   { x: 2360, y: 770, key: "plat4" },
    //   { x: 2160, y: 670, key: "plat4" },
    //   { x: 1960, y: 570, key: "plat4" },
    //   { x: 1660, y: 570, key: "plat4" },
    //   { x: 1575, y: 545, key: "plat1" },
    //   { x: 1490, y: 520, key: "plat4" },
    //   { x: 1375, y: 490, key: "plat4" },
    //   { x: 1580, y: 380, key: "plat1" },
    //   { x: 1680, y: 380, key: "plat1" },
    //   { x: 1870, y: 310, key: "plat4" },
    //   { x: 1670, y: 210, key: "plat4" },
    //   { x: 690, y: 210, key: "plat_cuad" },
    //   { x: 530, y: 210, key: "plat_cuad" },
    //   { x: 370, y: 210, key: "plat_cuad" },
    //   { x: 180, y: 210, key: "plat4" },
    //   { x: 370, y: 600, key: "plat_larga" },
    //   { x: 2070, y: 210, key: "plat4" },
    //   { x: 2270, y: 110, key: "plat4" },
    // ];

    // // Agregar cada plataforma del array al grupo
    // platformData.forEach((platform) => {
    //   plataformas.add(new Obstacle(this, platform.x, platform.y, platform.key));
    // });
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

    if (this.platform_mobile1 instanceof MovingObstacle) {
      this.platform_mobile1.update();
    }
    if (this.platform_mobile2 instanceof MovingObstacle) {
      this.platform_mobile2.update();
    }
    if (this.platform_falling1) {
      this.platform_falling1.update();
    }
    if (this.platform_falling2) {
      this.platform_falling2.update();
    }
    if (this.platform_falling3) {
      this.platform_falling3.update();
    }
    if (this.platform_falling4) {
      this.platform_falling4.update();
    }
    if (this.platform_falling5) {
      this.platform_falling5.update();
    }
    if (this.platform_falling6) {
      this.platform_falling6.update();
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
