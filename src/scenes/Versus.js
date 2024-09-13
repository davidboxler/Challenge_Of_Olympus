import { Scene } from "phaser";

export class Versus extends Scene {
  constructor() {
    super("Versus");
  }

  create() {
    // Fondo del juego
    this.add.image(800, 300, "bg2").setScale(1.7);

    // Crear al stickman warrior
    this.add.image(400, 630, "warrior").setScale(0.8);

    // Crear la primera lanza
    this.createLance();

    // Crear la base (el suelo)
    this.ground = this.add.rectangle(784, 750, 1568, 50, 0x964b00); // Suelo largo (ancho de la pantalla)
    this.physics.add.existing(this.ground, true); // La base no es movible (true para objeto estático)

    // Configurar colisiones entre el contenedor de la lanza y el suelo
    this.physics.add.collider(
      this.lanceContainer,
      this.ground,
      this.onLanceCollide,
      null,
      this
    );

    // Variables para controlar el ángulo y lanzamiento
    this.lanceAngle = -15; // Ángulo inicial en grados
    this.isLaunched = false; // Saber si ya fue lanzada la lanza
    this.lanceVelocity = 1500; // Velocidad de lanzamiento ajustada
    this.gravity = 1000; // Gravedad ajustada

    // Ajustar la gravedad del mundo
    this.physics.world.gravity.y = this.gravity;

    // Controles de teclado
    this.cursors = this.input.keyboard.createCursorKeys();
    this.spacebar = this.input.keyboard.addKey(
      Phaser.Input.Keyboard.KeyCodes.SPACE
    );

    // Variable para controlar la rotación gradual hacia abajo
    this.rotationSpeed = 2; // Velocidad de rotación en grados por frame
  }

  update() {
    // Controlar el ángulo de la lanza con las flechas arriba y abajo
    if (!this.isLaunched) {
      if (this.cursors.up.isDown) {
        this.lanceAngle -= 1; // Incrementa el ángulo
      } else if (this.cursors.down.isDown) {
        this.lanceAngle += 1; // Decrementa el ángulo
      }

      // Limitar el ángulo entre -90 (completamente hacia abajo) y 90 grados (completamente hacia arriba)
      this.lanceAngle = Phaser.Math.Clamp(this.lanceAngle, -90, 90);

      // Rotar el contenedor (que incluye la lanza y la punta) según el ángulo ajustado
      this.lanceContainer.setRotation(Phaser.Math.DegToRad(this.lanceAngle));

      // Lanzar la lanza al presionar la barra espaciadora
      if (Phaser.Input.Keyboard.JustDown(this.spacebar)) {
        this.launchLance();
      }
    } else {
      // Girar la lanza para que apunte hacia abajo de manera gradual
      if (this.lanceContainer.body.velocity.y > 0) {
        const currentRotation = Phaser.Math.RadToDeg(this.lanceContainer.rotation);
        let targetRotation = 90; // Apuntar hacia abajo (90 grados)

        // Ajustar el ángulo de rotación actual y objetivo
        if (Math.abs(currentRotation - targetRotation) > this.rotationSpeed) {
          // Hacer que la rotación se acerque al objetivo en pasos graduales
          this.lanceContainer.setRotation(
            Phaser.Math.DegToRad(
              currentRotation +
                Math.sign(targetRotation - currentRotation) * this.rotationSpeed
            )
          );
        } else {
          // Ajustar a la rotación final si está cerca del objetivo
          this.lanceContainer.setRotation(Phaser.Math.DegToRad(targetRotation));
        }
      }

      // Verificar si la lanza se ha salido de los límites de la pantalla
      if (
        this.lanceContainer.y > this.game.config.height ||
        this.lanceContainer.x > this.game.config.width ||
        this.lanceContainer.x < 0
      ) {
        this.resetLance();
      }
    }
  }

  createLance() {
    // Crear un contenedor para la lanza y la punta
    this.lanceContainer = this.add.container(285, 615);

    // Crear la lanza (rectángulo negro) y agregarla al contenedor
    this.lance = this.add.rectangle(0, 0, 150, 3, 0x000000); // Color negro para la lanza
    this.lanceContainer.add(this.lance);
    this.lance.setOrigin(0, 0.5); // La lanza gira desde su punta

    // Crear la punta de la lanza (rombo negro con una base más angosta)
    this.lanceTip = this.add.polygon(
      145, // Posición inicial en X dentro del contenedor
      8, // Posición inicial en Y dentro del contenedor
      [0, 0, 11, -8, 30, 0, 11, 8], // Coordenadas del polígono
      0x000000 // Color negro
    );
    this.lanceContainer.add(this.lanceTip);
    this.lanceTip.setOrigin(0, 0.5); // Alinear la rotación con la base

    // Ajustar la rotación inicial
    this.lanceContainer.setRotation(Phaser.Math.DegToRad(this.lanceAngle));
  }

  launchLance() {
    // Indicar que la lanza ha sido lanzada
    this.isLaunched = true;

    // Aplicar velocidad al contenedor de la lanza en la dirección del ángulo
    const radianAngle = Phaser.Math.DegToRad(this.lanceAngle);
    const velocityX = this.lanceVelocity * Math.cos(radianAngle);
    const velocityY = this.lanceVelocity * Math.sin(radianAngle);

    // Aplicar la velocidad al cuerpo físico del contenedor de la lanza
    this.physics.world.enable(this.lanceContainer); // Activar físicas para el contenedor
    this.lanceContainer.body.setAllowGravity(true); // Activar la gravedad
    this.lanceContainer.body.setVelocity(velocityX, velocityY);
  }

  // Función para manejar la colisión de la lanza con el suelo
  onLanceCollide(lanceContainer, ground) {
    // Detener la lanza al tocar el suelo
    this.lanceContainer.body.setVelocity(0);
    this.lanceContainer.body.setImmovable(true); // Hacer que se quede quieta

    // Después de 3 segundos, crear una nueva lanza
    this.time.delayedCall(3000, this.resetLance, [], this);
  }

  resetLance() {
    // Eliminar el contenedor de la lanza actual
    this.lanceContainer.destroy();

    // Crear una nueva lanza y resetear variables
    this.createLance();
    this.physics.add.collider(
      this.lanceContainer,
      this.ground,
      this.onLanceCollide,
      null,
      this
    );
    this.lanceAngle = 0; // Reiniciar el ángulo
    this.isLaunched = false; // Permitir lanzar de nuevo
  }
}
