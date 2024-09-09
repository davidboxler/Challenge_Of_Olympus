import { Scene } from 'phaser';

export class Options extends Scene {
    constructor() {
        super('Options');
    }

    create() {
        const gameText = this.add.text(750, 650, 'Volver', {
            fontFamily: 'Arial Black', fontSize: 50, color: '#ffffff',
            stroke: '#000000', strokeThickness: 8,
            align: 'center'
        }).setOrigin(0.5).setInteractive();

        gameText.on('pointerdown', () => {

            this.scene.start('MainMenu');

        });
        this.add.text(750, 250, 'Idioma', {
            fontFamily: 'Arial Black', fontSize: 40, color: '#ffffff',
            stroke: '#000000', strokeThickness: 8,
            align: 'center'
        }).setOrigin(0.5);

        this.add.text(750, 350, 'Sfx', {
            fontFamily: 'Arial Black', fontSize: 40, color: '#ffffff',
            stroke: '#000000', strokeThickness: 8,
            align: 'center'
        }).setOrigin(0.5);
    }
}