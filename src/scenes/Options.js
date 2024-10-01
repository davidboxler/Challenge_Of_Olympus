import { Scene } from 'phaser';

export class Options extends Scene {
    constructor() {
        super('Options');
    }

    create() {
        this.add.image(1250, 950, 'bg')
        const gameText = this.add.text(1250, 1150, 'Volver', {
            fontFamily: 'Arial Black', fontSize: 70, color: '#ffffff',
            stroke: '#000000', strokeThickness: 8,
            align: 'center'
        }).setOrigin(0.5).setInteractive();

        gameText.on('pointerdown', () => {

            this.scene.start('MainMenu');

        });
        /* this.add.text(1250, 650, 'Idioma', {
            fontFamily: 'Arial Black', fontSize: 70, color: '#ffffff',
            stroke: '#000000', strokeThickness: 8,
            align: 'center'
        }).setOrigin(0.5); */

        this.add.text(1250, 750, 'Sfx', {
            fontFamily: 'Arial Black', fontSize: 70, color: '#ffffff',
            stroke: '#000000', strokeThickness: 8,
            align: 'center'
        }).setOrigin(0.5);
    }
}