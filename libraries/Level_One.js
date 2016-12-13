function levelOne(){
   
      finishLine1 = createSprite(6000,660,80,80);
         finishLine1.setCollider('finishLine',0,0,60,60);
         finishLine1.addImage("finish",finish);
   
      //CREATING THE FLOOR TILES LEVEL ONE
        for(var i = 0; i < level1Grid.length; i++){
            for(var n = 0; n < level1Grid[i].length; n++){
              
             var gridValue = level1Grid[i][n];
             
             switch(gridValue){
                case 0:
                break;
                
                case 1:
                   var tile = createSprite(n * tileSize, tileHeight + (i * tileSize));
                     var floor1 = loadAnimation(new SpriteSheet('assets/SpriteSheet.png', [tile_frames[0]]));
                        tile.addAnimation('normal', floor1);
                         tiles.add(tile);
                  //tile_sprite_sheetExample.drawFrame('boxExplosive.png',i * tileSize,750);
                break;
                   
                case 2:
                   var tile2 = createSprite(n * tileSize, tileHeight + (i * tileSize));
                        var floor2 = loadAnimation(new SpriteSheet('assets/SpriteSheet.png', [tile_frames[1]]));
                        tile2.addAnimation('normal', floor2);
                         //tile2.shapeColor = 'green';
                         tiles.add(tile2);
                   //tile_sprite_sheetExample.drawFrame('boxExplosiveAlt.png',i * tileSize,750);
                break;
                
                case 3:
                   var tile3 = createSprite(n * tileSize, tileHeight + (i * tileSize));
                        var floor3 = loadAnimation(new SpriteSheet('assets/SpriteSheet.png', [tile_frames[2]]));
                        tile3.addAnimation('normal', floor3);
                         //tile2.shapeColor = 'green';
                         tiles.add(tile3);
                   //tile_sprite_sheetExample.drawFrame('boxExplosiveAlt.png',i * tileSize,750);
                break;
                
                case 4:
                   var tile4 = createSprite(n * tileSize, tileHeight + (i * tileSize));
                        var floor4 = loadAnimation(new SpriteSheet('assets/SpriteSheet.png', [tile_frames[3]]));
                        tile4.addAnimation('normal', floor4);
                         //tile2.shapeColor = 'green';
                         tiles.add(tile4);
                   //tile_sprite_sheetExample.drawFrame('boxExplosiveAlt.png',i * tileSize,750);
                break;
                
                case 5:
                   var tile5 = createSprite(n * tileSize, tileHeight + (i * tileSize));
                        var floor5 = loadAnimation(new SpriteSheet('assets/SpriteSheet.png', [tile_frames[4]]));
                        tile5.addAnimation('normal', floor5);
                         //tile2.shapeColor = 'green';
                         tiles.add(tile5);
                   //tile_sprite_sheetExample.drawFrame('boxExplosiveAlt.png',i * tileSize,750);
                break;
             }
          }
        }
      
      var gemHeight = 750;
     
      //CREATING THE GEMS IN LEVEL ONE
      for(var s = 0; s < level1GemsSpace.length; s++){
        for(var g = 0; g < level1Gems.length; g++){
          var gemCount = level1Gems[g];
          
            switch(gemCount){
              
              case 0:
              break;
              
              case 1:
                var gem1 = createSprite(g * gemSize + level1GemsSpace[s], gemHeight, gemSize,gemSize);
                  gem1.shapeColor = 'purple';
                  gem1.addImage('Emerald',gem1IMG);
                  gems.add(gem1);
              break;
            }
        }
      }
      
      var gemHeight2 = 700;
       
      for(var a = 0; a < level1GemsSpace2.length; a++){
        for(var b = 0; b < level1Gems2.length; b++){
       
         var gemCount2 = level1Gems2[b];
        
          switch(gemCount2){
              
              case 0:
              break;
              
              case 2:
                var gem2 = createSprite(b * gemSize + level1GemsSpace2[a], gemHeight2, gemSize,gemSize);
                  gem2.shapeColor = 'pink';
                  gem2.addImage('Diamond',gem2IMG);
                  gem2.scale = .5;
                  gems.add(gem2);
              break;
          }
      }
    }
        
}
function levelOne_draw(){
     clear();

    var scalefactor = .54;
    image(LevelOneBackground,-width/2,0,LevelOneBackground.width * .7,LevelOneBackground.height * scalefactor);
    
     //MIRRORING THE HERO ANIMATION
     if(hero.velocity.x < 0.1 && hero.velocity.x > -0.1){
       hero.velocity.x = 0;
       hero.changeAnimation('HeroDefault');
     }
     
    //DRAWING THE SCORE TEXT 
      textSize(40);
      stroke(0);
      text(score,camera.position.x - 475,camera.position.y - 350);


     //DRAWING ENEMY LEVEL 1 SPRITES
     if(frameCount%enemyRate === 0){
        
      var enemy = createSprite(camera.position.x + 800,750,40,40);
        //enemy.debug = true;
         enemy.setSpeed(1,180);
         enemy.life = 200;
         //enemy.shapeColor = 'red';
         enemy.addAnimation('enemyOneDefault', enemyOneDefault);
         enemy.changeAnimation('enemyOneDefault');
         enemies.add(enemy);
     }
     
     for(var i = 0; i < enemies.length; i++){
       
       enemies[i].attractionPoint(.2, hero.position.x,hero.position.y);
       
       if(random(100) < 3){
       enemies[i].velocity.y = random(-4,4);
       }
     }
     
  
     
     //THESE WILL GO INTO LEVEL ONE AND SO ON WHEN THEY ARE FUNCTIONING
     enemies.overlap(shots,enemyHit);
     enemies.overlap(hero,heroHit);
     gems.overlap(hero,gemHit);
     finishLine1.overlap(hero,level1Clear);
     
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

      
      
      //THIS IS SO THE HERO CAN ONLY JUMP 3 TIMES
      hero.collide(tiles,function herojumptest(hero,tile){
        herojump = 0;
      });
      hero.velocity.y += gravity;
     
      
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
