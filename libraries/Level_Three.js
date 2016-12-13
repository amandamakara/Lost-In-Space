function levelThree(){
   
   hero.position.x = 200;
   hero.position.y = -200;
   
        
    finishLine3 = createSprite(4700,75,75,75);
      finishLine3.shapeColor = 'blue';
      finishLine3.setCollider('finishLine3',0,0,60,60);
      finishLine3.addImage("finish",finish);
  
      //CREATING THE FLOOR TILES LEVEL ONE
        for(var i = 0; i < level3Grid.length; i++){
            for(var n = 0; n < level3Grid[i].length; n++){
              
             var gridValue = level3Grid[i][n];
             
             switch(gridValue){
                case 0:
                break;
                
                case 1:
                   var tile = createSprite(n * tileSize, tileHeight3 + (i * tileSize));
                     var floor1 = loadAnimation(new SpriteSheet('assets/SpriteSheet.png', [tile_frames[9]]));
                        tile.addAnimation('normal', floor1);
                         tiles.add(tile);
                  //tile_sprite_sheetExample.drawFrame('boxExplosive.png',i * tileSize,750);
                break;
                   
                case 2:
                   var tile2 = createSprite(n * tileSize, tileHeight3 + (i * tileSize));
                        var floor2 = loadAnimation(new SpriteSheet('assets/SpriteSheet.png', [tile_frames[10]]));
                        tile2.addAnimation('normal', floor2);
                         //tile2.shapeColor = 'green';
                         tiles.add(tile2);
                   //tile_sprite_sheetExample.drawFrame('boxExplosiveAlt.png',i * tileSize,750);
                break;
                
                case 3:
                   var tile3 = createSprite(n * tileSize, tileHeight3 + (i * tileSize));
                        var floor3 = loadAnimation(new SpriteSheet('assets/SpriteSheet.png', [tile_frames[11]]));
                        tile3.addAnimation('normal', floor3);
                         //tile2.shapeColor = 'green';
                         tiles.add(tile3);
                   //tile_sprite_sheetExample.drawFrame('boxExplosiveAlt.png',i * tileSize,750);
                break;
                
                case 4:
                   var tile4 = createSprite(n * tileSize, tileHeight3 + (i * tileSize));
                        var floor4 = loadAnimation(new SpriteSheet('assets/SpriteSheet.png', [tile_frames[12]]));
                        tile4.addAnimation('normal', floor4);
                         //tile2.shapeColor = 'green';
                         tiles.add(tile4);
                   //tile_sprite_sheetExample.drawFrame('boxExplosiveAlt.png',i * tileSize,750);
                break;
                
                case 5:
                   var tile5 = createSprite(n * tileSize, tileHeight3 + (i * tileSize));
                        var floor5 = loadAnimation(new SpriteSheet('assets/SpriteSheet.png', [tile_frames[13]]));
                        tile5.addAnimation('normal', floor5);
                         //tile2.shapeColor = 'green';
                         tiles.add(tile5);
                   //tile_sprite_sheetExample.drawFrame('boxExplosiveAlt.png',i * tileSize,750);
                break;
             }
          }
        }
        
        score = 0;
}

function levelThree_draw(){
   clear();
   background(170);
   //fill(255);
  // text("levelThree", width/2, height/2);
  

    image(LevelThreeBackground,-width * .5,-500,LevelThreeBackground.width * 1.5,LevelThreeBackground.height * .78);
   
   
     //DRAWING ENEMY LEVEL 1 SPRITES
     if(frameCount%150 === 0){
        
      var enemy = createSprite(camera.position.x + 800,750,40,40);
      
         enemy.setSpeed(1,180);
         enemy.life = 100;
         //enemy.shapeColor = 'red';
         enemy.addAnimation('enemyThreeDefault',enemyThreeDefault);
         enemy.changeAnimation('enemyThreeDefault');
         enemies3.add(enemy);
     }
     
     for(var i = 0; i < enemies3.length; i++){
       
       enemies3[i].attractionPoint(.2, hero.position.x,hero.position.y);
       
       if(random(100) < 3){
       enemies3[i].velocity.y = random(-4,4);
       }
     }
     
  
   
   //THESE WILL GO INTO LEVEL ONE AND SO ON WHEN THEY ARE FUNCTIONING
     enemies3.overlap(shots,enemyHit);
     enemies3.overlap(hero,heroHit);
     gems.overlap(hero,gemHit);
     finishLine3.overlap(hero,level3Clear);
     
      switch(heroHealth){
        case 1:
           image(healthOne,camera.position.x - 600,camera.position.y - 300); break;
        case 2:
           image(healthTwo,camera.position.x - 600,camera.position.y - 300); break;
        case 3:
           image(healthThree,camera.position.x - 600,camera.position.y - 300); break;
        case 4:
           image(healthFour,camera.position.x - 600,camera.position.y - 300); break;
        case 5:
           image(healthFive,camera.position.x - 600,camera.position.y - 300); break;
        case 6:
           image(healthSix,camera.position.x - 600,camera.position.y - 300); break;
     }
     
  
       //MOVING THE SPRITE BASED ON IF KEY IS HELD DOWN
      hero.velocity.x = 0;
      //LEFT,RIGHT
/*      if(keyIsDown(RIGHT_ARROW)){
         hero.velocity.x = 12;
         direction = true;
      }
      if(keyIsDown(LEFT_ARROW)){
         hero.velocity.x = -12;
         direction = false;
      }
*/     
                 //THIS IS SO THE HERO CAN ONLY JUMP 3 TIMES
      hero.collide(tiles,function herojumptest(hero,tile){
        herojump = 0;
      });
      
      hero.collide(tiles);
      hero.velocity.y += gravity3;
     
      
      //IF HERO FALLS OFF SCREEN HE IS DEAD
      if(hero.position.y > height + 300){
         gameState = 'lose';
         hero.remove();
      }
      
      //KEEP HERO ON CAMERA UNLESS FALLS TO DEATH DUN DUN DUNNNNNN
      camera.position.x = hero.position.x;
       if(hero.position.y < height - 100){
        camera.position.y = hero.position.y; 
      }
      
  drawSprites();
}