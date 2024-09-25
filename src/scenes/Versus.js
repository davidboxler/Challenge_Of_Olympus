import { Scene } from 'phaser';

export class Versus extends Scene
{
    constructor ()
    {
        super('Versus');
    }

    create ()
    {
        this.add.image(800, 300, 'bg').setScale(1.7);

        const CoopText = this.add.text(750, 250, 'En desarrollo', {
            fontFamily: 'Arial Black', fontSize: 70, color: '#ffffff',
            stroke: '#000000', strokeThickness: 8,
            align: 'center'
        }).setOrigin(0.5);

        const versusText = this.add.text(750, 650, 'Volver', {
            fontFamily: 'Arial Black', fontSize: 40, color: '#ffffff',
            stroke: '#000000', strokeThickness: 8,
            align: 'center'
        }).setOrigin(0.5).setInteractive();

        versusText.on('pointerdown', () => {

            this.scene.start('SelectorMode');

        });
      }
}