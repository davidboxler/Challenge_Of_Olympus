import { Scene } from 'phaser';

export class Credits extends Scene
{
    constructor ()
    {
        super('Credits');

    }
    create() {
        this.add.image(800, 300, 'bg').setScale(1.7);

        const gameText = this.add.text(750, 650, 'Volver', {
            fontFamily: 'Arial Black', fontSize: 50, color: '#ffffff',
            stroke: '#000000', strokeThickness: 8,
            align: 'center'
        }).setOrigin(0.5).setInteractive();

        gameText.on('pointerdown', () => {

            this.scene.start('MainMenu');

        });
        this.add.text(750, 350, 'Insertar imagen creditos jeje', {
            fontFamily: 'Arial Black', fontSize: 30, color: '#ffffff',
            stroke: '#000000', strokeThickness: 8,
            align: 'center'
        }).setOrigin(0.5)
    }
    
     }