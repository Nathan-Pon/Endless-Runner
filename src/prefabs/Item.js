/* 
** Name: Zhendong Jiang - programming, game design
**       Nathan Pon - art, audio assets
**       Jiahui Li - art, audio assets
** Porject: Endless Runner
** Game Title: Sharkbu-Sharkbu
** Date: May 3, 2021
*/

class Item extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, texture, velocity =500) {
        super( scene, game.config.width , Phaser.Math.Between(128/2, game.config.height - 128/2), 'items');

         // add object to the existing scene
         scene.add.existing(this);
         scene.physics.add.existing(this);
         this.setOffset(32, -8);
         this.setVelocityX(-velocity);
         this.newItem = true;
    
         if(this.x < -this.width) {
            this.destroy();
         }        
    }     
    
    update() {
        if(this.newItem && this.x < game.config.width/2) {
            this.newItem = false;
            this.scene.addItem(this.velocity);
          
        }
    }
}