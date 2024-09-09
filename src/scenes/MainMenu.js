import { Scene } from 'phaser';

export class MainMenu extends Scene
{
    constructor ()
    {
        super('MainMenu');
    }

    create ()
    {
        this.add.image(800, 300, 'bg').setScale(1.7);


        const gameText = this.add.text(750, 250, 'Play', {
            fontFamily: 'Arial Black', fontSize: 38, color: '#ffffff',
            stroke: '#000000', strokeThickness: 8,
            align: 'center'
        }).setOrigin(0.5).setInteractive();

        gameText.on('pointerdown', () => {

            this.scene.start('ModeSel');

        });
        const optText = this.add.text(750, 350, 'Options', {
            fontFamily: 'Arial Black', fontSize: 38, color: '#ffffff',
            stroke: '#000000', strokeThickness: 8,
            align: 'center'
        }).setOrigin(0.5).setInteractive();

        optText.on('pointerdown', () => {

            this.scene.start('Options');

        });
        const CredText = this.add.text(750, 450, 'Creditos', {
            fontFamily: 'Arial Black', fontSize: 38, color: '#ffffff',
            stroke: '#000000', strokeThickness: 8,
            align: 'center'
        }).setOrigin(0.5).setInteractive();

        CredText.on('pointerdown', () => {

            this.scene.start('Credits');

        });
    }
}