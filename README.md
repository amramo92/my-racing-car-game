# my-racing-car-game

My goal is to create a car racing game, in 4 days, with HTML, CSS, JavaScript, DOM manipulation and OOP concepts.

Here are the steps I will try to follow : 

Step 1 - Setting up the basics.
-Creating the documents : HTML, CSS, JavaScript. 
-Creating a Git Reporistory.
-Creating a basic style for : the road and the car.

Step 2 - Implementing car and road movement.
-Creation of movement for the car. 
-Link the keyboard with the Javascript document : with event Listeners. 
-Creation of the automatic moving road. 

Step 3 - Adding obstacles : other cars.
-Creation of the other cars (obstacles).
-Make the other cars/obstacles move forward, and be randomly on left and right. 
-Create collision detection. 
-Create a game over system.

Step 4 - Finishing enhancement. 
-Create a finish line, for the race.
-Create a running clock.
-Add a start button. 
-Add images for : the car, the obstacles cars, and for the road.

Step 5 - Game online.
-Create a GitHub page to make the game accessible to the public. 


    top: -60px; 
  animation: moveObstacle 4s linear infinite;
    
  @keyframes moveObstacle {
    0% {
      top: -60px;
    }
    100% {
      top: 700px; 
    }
  }