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


        const gameText = this.add.text(1250, 855, 'Jugar', {
            fontFamily: 'Arial Black', fontSize: 70, color: '#ffffff',
            align: 'center'
        }).setOrigin(0.5).setInteractive();

        gameText.on('pointerdown', () => {

            this.scene.start('GameTest');

        });
        const optText = this.add.text(1250, 1000, 'Opciones', {
            fontFamily: 'Arial Black', fontSize: 70, color: '#ffffff',
            align: 'center'
        }).setOrigin(0.5).setInteractive();

        optText.on('pointerdown', () => {

            this.scene.launch('Options');

        });
    }
}