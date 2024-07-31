class Car {
    constructor(element) {
        this.element = element;
        this.position = { left: 175, top: 600 };
    }

    moveLeft() {
        if (this.position.left > 0) {
            this.position.left -= 10;
            this.updatePosition();
        }
    }
    
    moveRight() {
        if (this.position.left < 320) {
            this.position.left += 10;
            this.updatePosition();
        }
    }

    moveUp() {
        if (this.position.top > 0) { 
            this.position.top -= 10; 
            this.updatePosition();
        }
    }

    moveDown() {
        if (this.position.top < 640) { 
            this.position.top += 10; 
            this.updatePosition();
        }
    }

    updatePosition() {
        this.element.style.left = `${this.position.left}px`;
        this.element.style.top = `${this.position.top}px`; 
    }
}

// -----------------------------------

document.addEventListener('DOMContentLoaded', () => {
    const carElement = document.getElementById('car');
    const car = new Car(carElement);
    const startTime = Date.now(); // Capture the starting time

    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            car.moveLeft();
        } else if (e.key === 'ArrowRight') {
            car.moveRight();
        } else if (e.key === 'ArrowUp') {
            car.moveUp();
            checkFinishLine(car, startTime); // Check if the car reached the finish line
        } else if (e.key === 'ArrowDown') {
            car.moveDown();
        }
    });
});

// -----------------------------------
  
  function createObstacle() {
    const obstaclesContainer = document.getElementById('obstacles');
    const obstacle = document.createElement('div');
    obstacle.className = 'obstacle';
    
    // Randomize the initial position of the obstacle

  
    // Detect collision
    const car = document.getElementById('car');
    const gameArea = document.getElementById('gameArea');
    
    const interval = setInterval(() => {
      const obstacleRect = obstacle.getBoundingClientRect();
      const carRect = car.getBoundingClientRect();
  
      if (
        obstacleRect.top <= carRect.bottom &&
        obstacleRect.bottom >= carRect.top &&
        obstacleRect.right >= carRect.left &&
        obstacleRect.left <= carRect.right
      ) {
        alert('Collision detected! Game Over.');
        location.reload(); // restart the game
      }
  
      // Remove the obstacle if it goes off-screen
      if (obstacleRect.top > gameArea.clientHeight) {
        obstacle.remove();
        clearInterval(interval);
      }
    }, 100);
  }
  
  // Create obstacles at intervals
  setInterval(createObstacle, 1200);

// ----------------------------------------------------------

function checkFinishLine(car, startTime) {
    const finishLine = document.getElementById('finish-line');
    const carRect = car.element.getBoundingClientRect();
    const finishLineRect = finishLine.getBoundingClientRect();

    if (
        carRect.top <= finishLineRect.bottom &&
        carRect.bottom >= finishLineRect.top &&
        carRect.right >= finishLineRect.left &&
        carRect.left <= finishLineRect.right
    ) {
        const endTime = Date.now();
        const timeTaken = (endTime - startTime) / 1000; // Time taken in seconds
        alert(`Congratulations! You've finished the game. Time taken: ${timeTaken} seconds.`);
        location.reload(); // Restart the game or handle accordingly
    }
}

// --------------------------------------------------------