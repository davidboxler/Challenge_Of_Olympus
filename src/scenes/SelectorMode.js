import { Scene } from 'phaser';

export class SelectorMode extends Scene
{
    constructor ()
    {
        super('SelectorMode');
    }

    create ()
    {
        this.add.image(800, 300, 'bg').setScale(1.7);

        const CoopText = this.add.text(750, 250, 'Play Coop', {
            fontFamily: 'Arial Black', fontSize: 38, color: '#ffffff',
            stroke: '#000000', strokeThickness: 8,
            align: 'center'
        }).setOrigin(0.5).setInteractive();

        CoopText.on('pointerdown', () => {

            this.scene.start('Game');

        });
        const versusText = this.add.text(750, 450, 'Play Versus', {
            fontFamily: 'Arial Black', fontSize: 37, color: '#ffffff',
            stroke: '#000000', strokeThickness: 8,
            align: 'center'
        }).setOrigin(0.5).setInteractive();

        versusText.on('pointerdown', () => {

            this.scene.start('Versus');

        });
        const backText = this.add.text(750, 650, 'Volver', {
            fontFamily: 'Arial Black', fontSize: 38, color: '#ffffff',
            stroke: '#000000', strokeThickness: 8,
            align: 'center'
        }).setOrigin(0.5).setInteractive();

        backText.on('pointerdown', () => {

            this.scene.start('MainMenu');

        });
      }
}