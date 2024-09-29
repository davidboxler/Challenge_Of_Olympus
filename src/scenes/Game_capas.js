import { Scene } from "phaser";
import { Obstacle } from "./../entities/Obstacles"
export class GameCapas extends Scene {
    constructor() {
      super("GameCapas");
    }
    init() {

    }
    create() {
   const fondo = this.add.image(1280, 960, "background");
   //const platf = this.physics.add.sprite(1280, 960, "tilePl" )
   const platEjemplo = new Obstacle (this,300, 250, "plat3")
   console.log(fondo);
    }
    update(){

    }
     }