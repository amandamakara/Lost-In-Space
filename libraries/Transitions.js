function startUp(){
   background(transition1);
   
   fill(255);
   textSize(50);
   textAlign(CENTER);
   //text("Lost in Space", width/2,height/2-100);
   text("Press x to begin", width/2, height/2);
   
      if(key === 'x'){
      gameState = 'levelOne';
      startMusic.stop();
      oneMusic.amp(0.3);
      oneMusic.loop();
   }
}

function win(){
   background(0);
   image(transition2,camera.position.x - 500,camera.position.y -400);
   fill(255);
   textSize(50);
   textAlign(CENTER);
   //text("Winner winner chicken dinner!",camera.position.x,camera.position.y);
}

function lose(){
   background(0);
   image(transition3,camera.position.x - 500,camera.position.y -400);
   fill(0);
   textSize(50);
   textAlign(CENTER);
   //text("Loser",camera.position.x,camera.position.y);
}

function countDownOne(){
   background(transition4);
   
   //MOVE THE CAMERA TO BEGINNING
   camera.position.x = width/2;
   camera.position.y = height/2;
   
   var displayTimer = frameCount - countDownTimer;
   
   fill(255);
   textSize(100);
   textAlign(CENTER);
   
   //COUNTING BACKWARDS FROM 4
   var countDown = 4 - floor(displayTimer/60);
   
   text(countDown,width/2, height/2);
   
   //ENDING THE COUNTDOWN
   if(displayTimer > 240){
      levelTwo();
      gameState = 'levelTwo';
/*      
      oneMusic.stop();
      twoMusic.amp(0.3);
      twoMusic.loop;
*/
   }
}

function countDownTwo(){
   background(transition4);
   
   //MOVE THE CAMERA TO BEGINNING
   camera.position.x = width/2;
   camera.position.y = height/2;
   
   var displayTimer = frameCount - countDownTimer;
   
   fill(255);
   textSize(100);
   textAlign(CENTER);
   
   //COUNTING BACKWARDS FROM 4
   var countDown = 4 - floor(displayTimer/60);
   
   text(countDown,width/2, height/2);
   
   //ENDING THE COUNTDOWN
   if(displayTimer > 240){
      levelThree();
      gameState = 'levelThree';
   }
}