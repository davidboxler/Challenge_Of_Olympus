import { Scene } from 'phaser';

export class MainMenu extends Scene
{
    constructor ()
    {
        super('MainMenu');
    }

    create ()
    {
        this.add.image(1250, 1000, 'MainMenuTheme');


        const gameText = this.add.text(1250, 855, 'Play', {
            fontFamily: 'Arial Black', fontSize: 78, color: '#ffffff',
            stroke: '#000000', strokeThickness: 8,
            align: 'center'
        }).setOrigin(0.5).setInteractive();

        gameText.on('pointerdown', () => {

            this.scene.start('GameCapas');

        });
        const optText = this.add.text(1250, 1000, 'Options', {
            fontFamily: 'Arial Black', fontSize: 78, color: '#ffffff',
            stroke: '#000000', strokeThickness: 8,
            align: 'center'
        }).setOrigin(0.5).setInteractive();

        optText.on('pointerdown', () => {

            this.scene.launch('Options');

        });
    }
}