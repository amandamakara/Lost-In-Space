function levelTwo(){
  
  hero.position.x = 100;
  hero.position.y = -100;
  
    finishLine2 = createSprite(6300,635,75,75);
      finishLine2.shapeColor = 'orange';
      finishLine2.setCollider('finishLine2',0,0,60,60);
      
      
      //CREATING THE FLOOR TILES LEVEL ONE
        for(var i = 0; i < level2Grid.length; i++){
            for(var n = 0; n < level2Grid[i].length; n++){
              
             var gridValue = level2Grid[i][n];
             
             switch(gridValue){
                case 0:
                break;
                
                case 1:
                   var tile = createSprite(n * tileSize, tileHeight2 + (i * tileSize));
                     var floor1 = loadAnimation(new SpriteSheet('assets/SpriteSheet.png', [tile_frames[5]]));
                        tile.addAnimation('normal', floor1);
                         tiles.add(tile);
                  //tile_sprite_sheetExample.drawFrame('boxExplosive.png',i * tileSize,750);
                break;
                   
                case 2:
                   var tile2 = createSprite(n * tileSize, tileHeight2 + (i * tileSize));
                        var floor2 = loadAnimation(new SpriteSheet('assets/SpriteSheet.png', [tile_frames[6]]));
                        tile2.addAnimation('normal', floor2);
                         //tile2.shapeColor = 'green';
                         tiles.add(tile2);
                   //tile_sprite_sheetExample.drawFrame('boxExplosiveAlt.png',i * tileSize,750);
                break;
                
                case 3:
                   var tile3 = createSprite(n * tileSize, tileHeight2 + (i * tileSize));
                        var floor3 = loadAnimation(new SpriteSheet('assets/SpriteSheet.png', [tile_frames[7]]));
                        tile3.addAnimation('normal', floor3);
                         //tile2.shapeColor = 'green';
                         tiles.add(tile3);
                   //tile_sprite_sheetExample.drawFrame('boxExplosiveAlt.png',i * tileSize,750);
                break;
                
                case 4:
                   var tile4 = createSprite(n * tileSize, tileHeight2 + (i * tileSize));
                        var floor4 = loadAnimation(new SpriteSheet('assets/SpriteSheet.png', [tile_frames[8]]));
                        tile4.addAnimation('normal', floor4);
                         //tile2.shapeColor = 'green';
                         tiles.add(tile4);
                   //tile_sprite_sheetExample.drawFrame('boxExplosiveAlt.png',i * tileSize,750);
                break;
             }
          }
        }
        
      var gemHeight = 750;
     
      //CREATING THE GEMS IN LEVEL ONE
      for(var s = 0; s < level2GemsSpace.length; s++){
        for(var g = 0; g < level2Gems.length; g++){
          var gemCount = level2Gems[g];
          
            switch(gemCount){
              
              case 0:
              break;
              
              case 1:
                var gem1 = createSprite(g * gemSize + level2GemsSpace[s], gemHeight, gemSize,gemSize);
                  gem1.shapeColor = 'purple';
                  gem1.addImage('Emerald',gem1IMG);
                  gems.add(gem1);
              break;
            }
        }
      }
      
      var gemHeight2 = 650;
       
      for(var a = 0; a < level2GemsSpace2.length; a++){
        for(var b = 0; b < level2Gems2.length; b++){
       
         var gemCount2 = level2Gems2[b];
        
          switch(gemCount2){
              
              case 0:
              break;
              
              case 2:
                var gem2 = createSprite(b * gemSize + level2GemsSpace2[a], gemHeight2, gemSize,gemSize);
                  gem2.shapeColor = 'pink';
                  gem2.addImage('Diamond',gem2IMG);
                  gem2.scale = .5;
                  gems.add(gem2);
              break;
          }
      }
    }
      var gemHeight3 = 600;
       
      for(var c = 0; c < level2GemsSpace3.length; c++){
        for(var d = 0; d < level2Gems3.length; d++){
       
         var gemCount3 = level2Gems3[d];
        
          switch(gemCount3){
              
              case 0:
              break;
              
              case 3:
                var gem3 = createSprite(d * gemSize + level2GemsSpace3[c], gemHeight3, gemSize,gemSize);
                  gem3.shapeColor = 'blue';
                  gem3.addImage('Citrine',gem3IMG);
                  gem3.scale = .8;
                  gems.add(gem3);
              break;
          }
      }
    }
    
    score = 0;
}
function levelTwo_draw(){
      clear();
     background(115);
     
         var scalefactor = .75;
    image(LevelTwoBackground,-width * .5,-500,LevelTwoBackground.width * .9,LevelTwoBackground.height * scalefactor);
     
           
    //DRAWING THE SCORE TEXT 
      textSize(40);
      stroke(0);
      text(score,camera.position.x - 475,camera.position.y - 350); 
      
   if(frameCount % 30 === 0){         
      var enemy = createSprite(random(200,6000),random(300,700),70,70);
        // enemy.setColor = 'red';
         enemy.life = 800;
         enemy.friction = 0.93;
         
         enemy.addAnimation('enemyTwoDefault',enemyTwoDefault);
         enemy.changeAnimation('enemyTwoDefault');
         enemies2.add(enemy);
   }
   
   for(var i = 0; i < enemies2.length; i++){
      enemies2[i].velocity.y += gravity2;
      enemies2[i].scale = .5;
      
      if(random(100) < 3){
         enemies2[i].velocity.y = random(0,-20);
      }
      
      if(random(100) < 3){
         enemies2[i].velocity.x = random(-5,5);
      }
   }
      enemies2.collide(tiles);
      
     //THESE WILL GO INTO LEVEL ONE AND SO ON WHEN THEY ARE FUNCTIONING
     enemies2.overlap(shots,enemyHit);
     enemies2.overlap(hero,heroHit);
     gems.overlap(hero,gemHit);
     finishLine2.overlap(hero,level2Clear);
     
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
      hero.velocity.y += gravity2; 
      hero.collide(tiles);

     
      
      //IF HERO FALLS OFF SCREEN HE IS DEAD
      if(hero.position.y > height + 175){
         gameState = 'lose';
         hero.remove();
      }
      
      //KEEP HERO ON CAMERA UNLESS FALLS TO DEATH DUN DUN DUNNNNNN
      camera.position.x = hero.position.x;
       if(hero.position.y < height - 200){
        camera.position.y = hero.position.y; 
      }
   drawSprites();
}