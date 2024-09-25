export class Obstacle extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y, texture, options = {}) {
    super(scene, x, y, texture);

    scene.add.existing(this);
    scene.physics.world.enable(this);

    // Configuración del obstáculo
    this.setOrigin(0.5, 0.5);
    this.setImmovable(options.immovable || true);
    this.setAlpha(options.alpha || 1);
    this.setScale(options.scale || 1);

    // Configuración física
    if (options.physics) {
      this.body.setSize(options.width || this.width, options.height || this.height);
      this.body.setOffset(options.offsetX || 0, options.offsetY || 0);
      if (options.allowGravity !== undefined) {
        this.body.setAllowGravity(options.allowGravity);
      }
      if (options.velocity) {
        this.body.setVelocity(options.velocity.x || 0, options.velocity.y || 0);
      }
    }
  }
}

export class MovingObstacle extends Obstacle {
  constructor(scene, x, y, texture, options = {}, player1, player2) {
    super(scene, x, y, texture, options);

    this.minX = options.minX || x;
    this.maxX = options.maxX || x;
    this.speed = options.speed || 100;

    this.body.setVelocityX(this.speed);
    this.direction = 1; // 1 for right, -1 for left

    this.body.setAllowGravity(false);
    scene.physics.add.collider(player1, this)
    scene.physics.add.collider(player2, this)
  }


  update() {
    if (this.x <= this.minX) {
      this.direction = 1;
      this.body.setVelocityX(this.speed * this.direction);
    } else if (this.x >= this.maxX) {
      this.direction = -1;
      this.body.setVelocityX(this.speed * this.direction);
    }
  }
}
/* export class FallingPlatform extends Obstacle {
  constructor(scene, x, y, texture, options = {}) {
    super(scene, x, y, texture, options); // Llamar al constructor de la clase base
    this.fallDelay = options.fallDelay || 1000; // Retraso antes de que la plataforma comience a caer
    this.fallDuration = options.fallDuration || 2000; // Tiempo hasta que desaparece la plataforma
  } */
    export class FallingPlatform extends Obstacle {
      constructor(scene, x, y, texture, player1, player2) {
        super(scene, x, y, texture);
        this.originalX = x; // Guardar la posición original
        this.originalY = y;
        this.setImmovable(true);

        this.body.setAllowGravity(false);
        // Añadir el collider entre el jugador y la plataforma
        scene.physics.add.collider(player1, this, () => {
          this.fallAndRespawn(1000, 2000); // 1 segundo para caer, reaparece en 3 segundos
        });
        scene.physics.add.collider(player2, this, () => {
          this.fallAndRespawn(1000, 2000); // 1 segundo para caer, reaparece en 3 segundos
        });
      }
    
      // Función para hacer que la plataforma caiga y reaparezca
      fallAndRespawn(timeToFall, timeToRespawn) {
        // Después de un tiempo, la plataforma comenzará a caer
        this.scene.time.delayedCall(timeToFall, () => {
          this.body.setAllowGravity(true); // Activar gravedad
          this.setImmovable(false); // Dejar que la plataforma caiga
    
          // Después de que caiga, desaparecer
          this.scene.time.delayedCall(2000, () => { // Ajusta el tiempo que tarda en desaparecer
            this.setVisible(false); // Hacer la plataforma invisible
            this.body.enable = false; // Desactivar colisiones
    
            // Después de un tiempo, reaparecer en la posición original
            this.scene.time.delayedCall(timeToRespawn, () => {
              this.resetPlatform(); // Reiniciar la plataforma
            }, [], this);
          }, [], this);
        }, [], this);
      }
    
      // Función para reiniciar la plataforma en la posición original
      resetPlatform() {
        this.setPosition(this.originalX, this.originalY); // Volver a la posición original
        this.setVelocity(0); // Detener el movimiento
        this.body.setAllowGravity(false); // Desactivar gravedad
        this.setImmovable(true); // Hacerla inmóvil de nuevo
        this.setVisible(true); // Hacerla visible
        this.body.enable = true; // Reactivar colisiones
      }
    }
    export class DissapPlatform extends Obstacle {
      constructor(scene, x, y, texture) {
        super(scene, x, y, texture);
        this.setImmovable(true);
      }
      
   }