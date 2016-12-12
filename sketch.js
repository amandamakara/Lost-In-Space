var hero;
var heroState = 'regular';
var herojump = 0;
var heroHealth = 5;
var Hero_WalkRightAnimation;
var Hero_DefaultAinimation;

//ARRAY VARIABLES
var enemies;
var enemies2;
var enemies3;
var gems;
var tiles;
var powerUps;

//TILE SIZE AND Y LOCATION PROPERTIES
var tileHeight = 845;
var tileHeight2 = 745;
var tileHeight3 = 145;
var tileSize = 100;
//this number is how big the example tiles are in the sprite sheet, are subject to change...
//...based on personal image sizes

//TILE GRIDS
var tilesLevelOne, tilesLevelTwo, tilesLevelThree;

var level1Grid = [[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
                  [0,0,0,0,0,0,0,0,0,0,0,0,1,4,4,2,0,0,0,0,1,2,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,4,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,5,4],
                  [0,1,5,5,5,2,0,5,0,5,0,1,3,3,3,3,2,0,0,1,3,3,2,0,1,2,0,5,0,1,2,0,0,1,5,5,5,5,3,3,2,0,0,1,5,5,2,0,0,0,1,5,5,2,0,0,1,5,3,3,3]];
                  
var level2Grid = [[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,3,3,2],
                  [0,0,0,0,0,0,0,0,0,0,1,3,3,2,0,0,1,2,0,0,0,0,0,1,2,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,3,2,0,0,0,0,0,0,0,0,0,0,0,1,3,3,3,3,3,3,2],
                  [1,3,3,3,2,0,0,1,3,3,3,3,3,3,3,3,3,3,2,0,0,1,3,3,3,2,0,1,3,0,3,0,3,0,1,3,0,0,1,3,3,3,3,3,3,3,3,2,0,0,1,3,3,3,3,3,3,3,3,3,3,3,3,2]];
                                    
var level3Grid = [[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,2],
                  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,5,2,0,0,0,0,0,2,0,0,0,0,0,0,1,2,0,0,0,0,0,1,5,3,2],
                  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,4,4,4,3,3,2,0,0,0,0,2,0,0,1,3,4,4,2,0,0,1,3,4,4,4,4,3,2,0,0,1,2],
                  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2],
                  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2],
                  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
                  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,5],
                  [0,0,0,0,0,0,0,0,0,1,3,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,1,3,3,3,2,2],
                  [0,0,0,0,1,3,3,3,3,5,5,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,3,3,3,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,3,5,5,3,2,0,0,0,0,0,0,1,2,0,1,5,0,0,0,3,0,0,1,3,3,5,5,5,5,5,5],
                  [1,3,3,3,4,4,4,4,4,4,4,4,0,0,0,1,3,3,3,3,3,3,2,0,0,1,2,0,0,1,3,4,4,4,4,4,2,0,1,2,0,0,1,0,0,2,0,0,1,3,4,4,4,4,4,4,2,0,0,1,3,3,4,4,3,4,4,0,0,0,0,0,1,4,4,4,4,4,4,4,4,4]];
/*
var LevelOne_frames = [
      {'name':'LevelOne1', 'frame':{'x':0,'y':0,'width':100, 'height': 100}},
      {'name':'LevelOne2', 'frame':{'x':100,'y':0,'width':100, 'height': 100}},
      {'name':'LevelOne3', 'frame':{'x':200,'y':0,'width':100, 'height': 100}},
      {'name':'LevelOne4', 'frame':{'x':300,'y':0,'width':100, 'height': 100}},
      {'name':'LevelOne5', 'frame':{'x':400,'y':0,'width':100, 'height': 100}},
   ];
   
var LevelTwo_frames = [
      {'name':'LevelTwo1', 'frame':{'x':0,'y':100,'width':100, 'height': 100}},
      {'name':'LevelTwo2', 'frame':{'x':100,'y':100,'width':100, 'height': 100}},
      {'name':'LevelTwo3', 'frame':{'x':200,'y':100,'width':100, 'height': 100}},
      {'name':'LevelTwo4', 'frame':{'x':300,'y':100,'width':100, 'height': 100}},
   ];
      
var LevelThree_frames = [
      {'name':'LevelThree1', 'frame':{'x':0,'y':200,'width':100, 'height': 100}},
      {'name':'LevelThree2', 'frame':{'x':100,'y':200,'width':100, 'height': 100}},
      {'name':'LevelThree3', 'frame':{'x':200,'y':200,'width':100, 'height': 100}},
      {'name':'LevelThree4', 'frame':{'x':300,'y':200,'width':100, 'height': 100}},
      {'name':'LevelThree5', 'frame':{'x':400,'y':200,'width':100, 'height': 100}},
      {'name':'LevelThree6', 'frame':{'x':500,'y':200,'width':100, 'height': 100}},
   ];
*/

var tile_sheet;
var tile_frames;

var gemSize = 15;
var gem1IMG,gem2IMG,gem3IMG;
/*
var gemFrames = [
      {'name':'Saphire', 'frame':{'x':0,'y':300,'width':100, 'height':100}},
      {'name':'Emerald', 'frame':{'x':100,'y':300,'width':100, 'height':100}},
      {'name':'Citrine', 'frame':{'x':200,'y':300,'width':100, 'height':100}},
      {'name':'Diamond', 'frame':{'x':300,'y':300,'width':100, 'height':100}},
   ];
   

var Hero_WalkRightFrames = [
      {'name':'Walk1', 'frame':{'x':0,'y':400,'width':100, 'height':100}},
      {'name':'Walk2', 'frame':{'x':100,'y':400,'width':100, 'height':100}},
      {'name':'Walk3', 'frame':{'x':200,'y':400,'width':100, 'height':100}},
      {'name':'Walk4', 'frame':{'x':300,'y':400,'width':100, 'height':100}},
      {'name':'Walk5', 'frame':{'x':400,'y':400,'width':100, 'height':100}},
      {'name':'Walk6', 'frame':{'x':500,'y':400,'width':100, 'height':100}},
      {'name':'Walk7', 'frame':{'x':600,'y':400,'width':100, 'height':100}},
      {'name':'Walk8', 'frame':{'x':700,'y':400,'width':100, 'height':100}},
      {'name':'Walk9', 'frame':{'x':800,'y':400,'width':100, 'height':100}},
      {'name':'Walk10', 'frame':{'x':900,'y':400,'width':100, 'height':100}},
      {'name':'Walk11', 'frame':{'x':0,'y':500,'width':100, 'height':100}},
      {'name':'Walk12', 'frame':{'x':100,'y':500,'width':100, 'height':100}},
      {'name':'Walk13', 'frame':{'x':200,'y':500,'width':100, 'height':100}},
      {'name':'Walk14', 'frame':{'x':300,'y':500,'width':100, 'height':100}},
      {'name':'Walk15', 'frame':{'x':400,'y':500,'width':100, 'height':100}},
      {'name':'Walk16', 'frame':{'x':500,'y':500,'width':100, 'height':100}},
      {'name':'Walk17', 'frame':{'x':600,'y':500,'width':100, 'height':100}},
      {'name':'Walk18', 'frame':{'x':700,'y':500,'width':100, 'height':100}},
      {'name':'Walk19', 'frame':{'x':800,'y':500,'width':100, 'height':100}},
      {'name':'Walk20', 'frame':{'x':900,'y':500,'width':100, 'height':100}},
   ];
   
var Hero_DefaultFrames = [
      {'name':'Default1', 'frame':{'x':0,'y':700,'width':100, 'height':100}},
      {'name':'Default2', 'frame':{'x':100,'y':700,'width':100, 'height':100}},
      {'name':'Default1', 'frame':{'x':200,'y':700,'width':100, 'height':100}},
      {'name':'Default1', 'frame':{'x':300,'y':700,'width':100, 'height':100}},
      {'name':'Default1', 'frame':{'x':400,'y':700,'width':100, 'height':100}},
      {'name':'Default1', 'frame':{'x':500,'y':700,'width':100, 'height':100}},
      {'name':'Default1', 'frame':{'x':600,'y':700,'width':100, 'height':100}},
      {'name':'Default1', 'frame':{'x':700,'y':700,'width':100, 'height':100}},
   ];
*/  

//LEVEL ONE GEMS
var level1GemsSpace = [200,880,2200,4340,5030];
var level1GemsSpace2 = [500,1230,2800,3400];//these are the x coordinates where the gems show up at
var level1Gems =   [1,0,0,0,1,0,0,0,1,0,0,0,1];
var level1Gems2 = [0,0,0,2,0,0,0,2,0,2,0,2,0,0,0,2];


//LEVEL TWO GEMS
var level2GemsSpace = [190,710,3275,3930,4770];
var level2GemsSpace2 = [475,1080,1875,2530,4230,5300];
var level2GemsSpace3 = [1625,2975,3625,4600];
var level2Gems = [1,0,1,0,0,1,0,1,0,0,1,0,1];
var level2Gems2 =[2,0,2,0,0,2,0,0,2,0,2];
var level2Gems3 =[0,3,0,3,0];

var gravity = 1.2; //.8
var gravity2 = 1.3;
var gravity3 = 1.5;

var gameState = 'startUp';
//where the game begins

//ENEMY VARIABLES
var enemyRate = 125;
var enemyAngle = 60;
var enemyOneDefault, enemyTwoDefault, enemyThreeDefault;
   //enemy image variables

var shotIMG;
var shotSound;
var gemSound;
var explosionDensity = 20;

var score = 0;
var countDownTimer = 0;

var direction = true;

var LevelOneBackground;
var LevelTwoBackground;
var LevelThreeBackground;

var startMusic;
var oneMusic;
var twoMusic;
var threeMusic;
var deathMusic;
var winMusic;


function preload(){
   
   tile_frames = loadJSON('assets/Tiles.json');
////////////////////////////////////////////////  
   LevelOneBackground = loadImage('assets/Space_Level1.png');
   LevelTwoBackground = loadImage('assets/Space_Level2.png');
   LevelThreeBackground = loadImage('assets/Space_Level3.png');
//////////////////////////////////////////////// 
   gem1IMG = loadImage('assets/Gems/Emerald-01.png');
   gem2IMG = loadImage('assets/Gems/Diamond-01.png');
   gem3IMG = loadImage('assets/Gems/Citrine-01.png');
//////////////////////////////////////////////// 
   shotIMG = loadImage('assets/Bullet01.png');
   
   

   Hero_DefaultAinimation = loadAnimation('assets/Hero_Default/SpacemanDefault_00000.png','assets/Hero_Default/SpacemanDefault_00012.png');
   Hero_WalkRightAnimation = loadAnimation('assets/Hero_Right/SpacemanWalk_00000.png','assets/Hero_Right/SpacemanWalk_00022.png');
///////////////////////////////////////////////   
   enemyOneDefault = loadAnimation('assets/EnemyOne/EnemyOne_00000.png','assets/EnemyOne/EnemyOne_00016.png');
   enemyTwoDefault = loadAnimation('assets/EnemyTwo/EnemyTwo_00000.png','assets/EnemyTwo/EnemyTwo_00016.png');
   enemyThreeDefault = loadAnimation('assets/EnemyThree/EnemyThree_00000.png','assets/EnemyThree/EnemyThree_00017.png');
//////////////////////////////////////////////
   shotSound = loadSound('assets/Sounds/shoot.mp3');
   enemyPop = loadSound('assets/Sounds/Destroy.mp3');
   gemSound = loadSound('assets/Sounds/Gem.mp3');
///////////////////////////////////////////////
   startMusic = loadSound('assets/Sounds/StartMusic.mp3');
   oneMusic = loadSound('assets/Sounds/OneMusic.mp3');
   twoMusic = loadSound('assets/Sounds/TwoMusic.mp3');
   threeMusic = loadSound('assets/Sounds/ThreeMusic.mp3');
/*   
   bulletImage = loadSpriteSheet('assets/SpriteSheet.png');
   
   LevelOne_frames = loadSpriteSheet('assets/SpriteSheet.png');
   LevelTwo_frames = loadSpriteSheet('assets/SpriteSheet.png');
   LevelThree_frames = loadSpriteSheet('assets/SpriteSheet.png');
   
   Hero_WalkRightFrames = loadSpriteSheet('assets/SpriteSheet.png');
   Hero_WalkRightAnimation = loadAnimation(Hero_WalkRightFrames);
   
   Hero_DefaultFrames = loadSpriteSheet('assets/SpriteSheet.png');
   Hero_DefaultAnimation = loadAnimation(Hero_DefaultFrames);
*/  
}

function setup() {
  createCanvas(1000,800);
  
  startMusic.amp(0.2);
  startMusic.loop();
  
  //CREATING GROUP 
  tiles = new Group();
  shots = new Group();
  enemies = new Group();
  enemies2 = new Group();
  enemies3 = new Group();
  gems = new Group();  
  gems2 = new Group();
  gems3 = new Group();
  powerUps = new Group();
  


     //CREATING THE HERO SPRITE
      hero = createSprite(50,650,50,50);
     // hero.debug = true;
      hero.shapeColor = 'green';
      hero.friction = 0.85;
      hero.setCollider('rectangle',0,0,60,90);
      
      //ADDING ANIMATION
      hero.addAnimation('HeroDefault',Hero_DefaultAinimation);
      hero.addAnimation('HeroRight',Hero_WalkRightAnimation);
/*      hero.addAnimation("HeroRightWalk",Hero_WalkRightFrames);
      hero.addAnimation("HeroDefault",Hero_DefaultFrames);
      hero.changeAnimation("HeroDefault");
*/     hero.changeAnimation('HeroDefault');
   levelOne();
}

function draw() {

  switch(gameState){
    
    case 'startUp':
      startUp();
    break;
    
    case 'levelOne':
      levelOne_draw();
    break;
    
    case 'countDownOne':
       countDownOne();
    break;
    
    case 'levelTwo':
      levelTwo_draw();
    break;
    
    case 'countDownTwo':
      countDownTwo();
    break;
    
    case 'levelThree':
      levelThree_draw();
    break;
    
    case 'win':
      win();
    break;
    
    case 'lose':
       lose();
    break;
  }

      if(keyIsDown(RIGHT_ARROW)){
         //hero.addAnimation('HeroWalk');
         hero.velocity.x = 8;
         direction = true;
         hero.changeAnimation('HeroRight');      
            if(heroState === 'power'){
             hero.scale = .5;
             hero.velocity.x = 12;
             }
         
      }
      if(keyIsDown(LEFT_ARROW)){
         //hero.addAnimation('HeroWalk');
         hero.velocity.x = -8;
         direction = false;
         hero.changeAnimation('HeroRight');
      }
}


function keyPressed(){
  
    //SPACE BAR TO SHOOT
    if(key == ' '){
      if(heroState === 'regular'){
         
         shotSound.amp(0.3);
         shotSound.play();
         
    if(direction){
      var shot = createSprite(hero.position.x, hero.position.y,10,10);
      
         shot.setSpeed(18,360);
         shot.life = 70;
         //shot.shapeColor = 'white';
         shot.addImage('shotIMG',shotIMG);
         shots.add(shot);
    }else{

      var shot = createSprite(hero.position.x, hero.position.y,10,10);
      
         shot.setSpeed(18,180);
         shot.life = 70;
         //shot.shapeColor = 'white';
         shot.addImage('shotIMG',shotIMG);
         shots.add(shot);
    }     
    //JUMP AND POWER SLAM  
  }
  
  if(heroState === 'power'){
     
     shotSound.amp(0.4);
     shotSound.play();
     
      var shot = createSprite(hero.position.x, hero.position.y,10,10);
      
         shot.setSpeed(18,360);
         shot.scale = 1.8;
         shot.life = 70;
         shot.shapeColor = 'white';
         shot.addImage('shotIMG',shotIMG);
         shots.add(shot);
  }
 
}
  //HERO CAN ONLY JUMP 3 TIMES
   if(keyCode == UP_ARROW && herojump < 3){
    hero.velocity.y = -40;
    herojump++;
    //THE JUMP IS UNDER KEYPRESSED BECAUSE YOU DO NOT WANT HERO TO INFINITLY KEEP JUMPING...
    //..THIS MAKES IT SO YOU HAVE TO KEEP PRESSING JUMP TO ASCEND
   }
   
   //HERO SLAM
   if(keyCode == DOWN_ARROW){
    if(hero.velocity.y >= .1 || hero.velocity.y <= -.1){
      hero.velocity.y += 30;
    }
    //THE SLAM IS UNDER KEYPRESSED AS WELL FOR A SIMILAR REASON, DO NOT WANT TO HAVE...
    //..TO KEEP HOLDING DOWN ARROW
   }
/*  
   if(keyCode == RIGHT_ARROW){
      hero.velocity.x = 8;
      direction = true;

   }else if(keyCode == LEFT_ARROW){
      hero.velocity.x = -8;
       direction = false;
   }
*/   
   
}



   
