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
    constructor(scene, x, y, texture, options = {}) {
      super(scene, x, y, texture, options);
  
      this.minX = options.minX || x;
      this.maxX = options.maxX || x;
      this.speed = options.speed || 100;
  
      this.body.setVelocityX(this.speed);
      this.direction = 1; // 1 for right, -1 for left
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