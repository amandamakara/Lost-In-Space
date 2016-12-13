//BOTH FUNCTIONS ENEMYHIT AND HEROHIT WILL BE MOVED TO HIT FUNCTIONS 
function enemyHit(enemy,shot){
   
   var loudness = random(.4,.9);
      enemyPop.amp(loudness);
      enemyPop.play();
   
   for(var i = 0; i < explosionDensity; i++){
      var explode = createSprite(shot.position.x,shot.position.y,2,2);
         explode.setSpeed(random(3,5),random(360));
         explode.friction = 0.95;
         explode.life = 15;
   }
   
   
   enemy.remove();
   shot.remove();

}

function heroHit(enemy,hero){
   
         
        //THIS IS WHEN THE ENEMY HITS THE HERO, THE ENEMY CONTINUES... 
  //..BUT IF THE HERO JUMPS ON THE ENEMY, THE ENEMY DISAPPEARS 
   if(hero.position.y > enemy.position.y && hero.velocity.y > 10){
        enemy.remove();
   }
  
   heroHealth --;
   heroState = 'regular';

   if(heroHealth <= 0){
      gameState = 'lose';
      oneMusic.stop();
      twoMusic.stop();
      threeMusic.stop();
   }
      enemy.remove();
      hero.shapeColor = 'orange';

}


function gemHit(gem,hero){
  
   gemSound.amp(0.2);
   gemSound.play();
   gem.remove();
   heroState = 'regular';
    score++;
    
    if(score < 8){
      heroState = 'regular';
    }else{
    heroState = 'power';
   }

}

function level1Clear(hero,finish){
   

   
   //REMOVE ALL TILES
   do{tiles[0].remove (); }
   while(tiles[0] !== undefined);
 
   //SETTING THE COUNTDOWN TIMER
   countDownTimer = frameCount;
   
   //MOVING THE CAMERA TO BEGINNING POSITION
   camera.position.x = width/2;
   camera.position.y = height/2;
   
   //REMOVE ALL ENEMIES
   if(enemies[0]){
   do{enemies[0].remove ();}
   while(enemies[0] !== undefined);
   }

   
   //clear the enemies
   if(gems[0]){
    do{gems[0].remove (); }
    while(gems[0] !== undefined);
   }
   gems.clear();
   enemies.clear();
   finishLine1.remove();
   hero.remove();
   gameState = "countDownOne";
   //change the state to countdown
   
}

function level2Clear(hero,finish){
   
   //REMOVE ALL TILES
   do{tiles[0].remove (); }
   while(tiles[0] !== undefined);


   
   //SETTING THE COUNTDOWN TIMER
   countDownTimer = frameCount;
   
   //MOVING THE CAMERA TO BEGINNING POSITION
   camera.position.x = width/2;
   camera.position.y = height/2;

   //REMOVE ALL ENEMIES
   if(enemies2[0]){
   do{enemies2[0].remove ();}
   while(enemies2[0] !== undefined);
   }

      if(gems[0]){
    do{gems[0].remove (); }
    while(gems[0] !== undefined);
   }
   gems.clear();
   enemies2.clear();
   //clear the enemies
   finishLine2.remove();
   hero.remove();
   
   gameState = "countDownTwo";
   //change the state to countdown
   
}

function level3Clear(hero,finish){
      //REMOVE ALL TILES
   if(tiles[0]){
   do{tiles[0].remove (); }
   while(tiles[0] !== undefined);
   }
   //SETTING THE COUNTDOWN TIMER
   countDownTimer = frameCount;
   
   //MOVING THE CAMERA TO BEGINNING POSITION
   camera.position.x = width/2;
   camera.position.y = height/2;

 
   //REMOVE ALL ENEMIES
   if(enemies3[0]){
   do{enemies3[0].remove ();}
   while(enemies3[0] !== undefined);
   }

  //clear the enemies
   if(gems[0]){
    do{gems[0].remove (); }
    while(gems[0] !== undefined);
   }
   
   gems.clear();
   enemies3.clear();
   finishLine3.remove();
   hero.remove();
   
   gameState = 'win';
   //change the state to countdown
   
}




