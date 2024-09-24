import { Scene } from 'phaser';

export class MainMenu extends Scene
{
    constructor ()
    {
        super('MainMenu');
    }

    create ()
    {
        this.add.image(800, 300, 'bg').setScale(4);


        const gameText = this.add.text(1250, 350, 'Play', {
            fontFamily: 'Arial Black', fontSize: 78, color: '#ffffff',
            stroke: '#000000', strokeThickness: 8,
            align: 'center'
        }).setOrigin(0.5).setInteractive();

        gameText.on('pointerdown', () => {

            this.scene.start('GameTest');

        });
        const optText = this.add.text(1250, 600, 'Options', {
            fontFamily: 'Arial Black', fontSize: 78, color: '#ffffff',
            stroke: '#000000', strokeThickness: 8,
            align: 'center'
        }).setOrigin(0.5).setInteractive();

        optText.on('pointerdown', () => {

            this.scene.start('Options');

        });
        const CredText = this.add.text(1250, 900, 'Creditos', {
            fontFamily: 'Arial Black', fontSize: 78, color: '#ffffff',
            stroke: '#000000', strokeThickness: 8,
            align: 'center'
        }).setOrigin(0.5).setInteractive();

        CredText.on('pointerdown', () => {

           // this.scene.start('Credits');

        });
    }
}