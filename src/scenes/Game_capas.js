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
   const backFondo = new Obstacle (this, 1280, 1910,"back_piso");
   const platCentro = new Obstacle (this, 1600, 1872,"plat_centro");
   const platLimite = new Obstacle (this,190,1641,"plat_limite")
   //const platf = this.physics.add.sprite(1280, 960, "tilePl" )
   const platEjemplo = new Obstacle (this,300, 250, "plat1")
   console.log(fondo);
    /* this.load.image("plat_limite", "./assets/images/plat_limite.png");
    this.load.image("plat_alta", "./assets/images/plat_alta.png");
    this.load.image("plat_centro", "./assets/images/plat_centro.png");
    this.load.image("plat_esc", "./assets/images/plat_esc.png");
    this.load.image("plat_cuad", "./assets/images/plat_cuad.png");
    this.load.image("plat_larga", "./assets/images/plat_larga.png");
    this.load.image("plat4", "./assets/images/plat4.png"); */
    }
    update(){

    }
     }