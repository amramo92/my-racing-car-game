
class Car {
    constructor(element) {
        this.element = element;
        this.position = { left: 175, top: 600 }; // Initialize car's position
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

// ------------------------------------------------------------------

document.addEventListener('DOMContentLoaded', () => {
    const carElement = document.getElementById('car');
    const car = new Car(carElement);
    const startTime = Date.now(); // Capture the starting time

    createStaticObstacles(5);  // Create 5 static obstacles

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
        checkCollisionWithStaticObstacles(car);
    });
});

function createStaticObstacles(numObstacles) {
    const obstaclesContainer = document.getElementById('obstacles');
    
    if (!obstaclesContainer) {
        console.error("Obstacles container not found"); // ajout à supprimer s'il le faut
        return;
    }

    const positions = ['60px', '160px', '260px']; // left, middle, right positions
    const finishLineHeight = 30; // height of the finish line
    const gameAreaHeight = 700; // height of the game area
    const obstacleHeight = 60; // height of the obstacle
    let topPosition = 0;

    for (let i = 0; i < numObstacles; i++) {

        // Ensure obstacles are not placed within the finish line area
        if (topPosition + obstacleHeight > gameAreaHeight - finishLineHeight) break;

        const obstacle = document.createElement('div');
        obstacle.className = 'static-obstacle';

        // Alternate positions based on the index
        const positionIndex = i % positions.length;
        obstacle.style.left = positions[positionIndex];
        obstacle.style.top = `${topPosition}px`;

        obstaclesContainer.appendChild(obstacle);

        // Increment top position for orderly placement
        topPosition += 100; // Adjust this increment as needed based on the height of the obstacles
    }
}

// ------------------------------------------------------------------

function checkCollisionWithStaticObstacles(car) {
    const staticObstacles = document.querySelectorAll('.static-obstacle');
    const carRect = car.element.getBoundingClientRect();

    staticObstacles.forEach(obstacle => {
        const obstacleRect = obstacle.getBoundingClientRect();

        if (
            carRect.top <= obstacleRect.bottom &&
            carRect.bottom >= obstacleRect.top &&
            carRect.right >= obstacleRect.left &&
            carRect.left <= obstacleRect.right
        ) {
            alert('Collision detected! Game Over.');
            location.reload(); // restart the game
        }
    });
}

// ------------------------------------------------------------------

function checkFinishLine(car) {
    const finishLine = document.getElementById('finish-line');
    const carRect = car.element.getBoundingClientRect();
    const finishLineRect = finishLine.getBoundingClientRect();

    if (
        carRect.top <= finishLineRect.bottom &&
        carRect.bottom >= finishLineRect.top &&
        carRect.right >= finishLineRect.left &&
        carRect.left <= finishLineRect.right
    ) {
        alert(`Congratulations! You've finished the game.`);
        location.reload(); // Restart the game or handle accordingly
    }
}

// ------------------------------------------------------------------

    document.addEventListener('DOMContentLoaded', function() {
        console.log("DOM fully loaded and parsed");
        const startButton = document.getElementById('start-button');
        if (startButton) {
            startButton.addEventListener('click', startGame);
            console.log("Start button found and event listener added");
        } else {
            console.error("Start button not found.");
        }
    });
    
    function startGame() {
        const startButton = document.getElementById('start-button');
        if (startButton) {
            startButton.style.display = 'none';
        } else {
            console.error("Start button not found.");
        }
    
        // Add your game starting logic here
        console.log("Game Started!");
    
        // Example: If you have a function to initialize the game
        initializeGame();
    }
    
    function initializeGame() {
        // Set up your game elements, like the car, road, obstacles, etc.
        console.log("Initializing game elements...");
    
        // Example elements setup
        const car = setUpCar();
        const road = setUpRoad();
        const obstacles = setUpObstacles();
    
        // Start the game loop
        gameLoop();
    }
    
    function setUpCar() {
        // Your car setup logic
    }
    
    function setUpRoad() {
        // Your road setup logic
    }
    
    function setUpObstacles() {
        // Your obstacles setup logic
    }
    
    function gameLoop() {
        // Your game loop logic
        console.log("Game Loop Running...");
    }

    // ----------------------------------------------------------------

    document.addEventListener('DOMContentLoaded', () => {
        let startTime = null;
        let timerInterval = null;
        
        function formatTime(ms) {
            let totalSeconds = Math.floor(ms / 1000);
            let minutes = String(Math.floor(totalSeconds / 60)).padStart(2, '0');
            let seconds = String(totalSeconds % 60).padStart(2, '0');
            return `${minutes}:${seconds}`;
        }
    
        function updateTimer() {
            if (startTime !== null) { // Ensure the timer only updates if it has started
                let elapsedTime = Date.now() - startTime;
                document.getElementById('timer').textContent = formatTime(elapsedTime);
            }
        }
    
        function startRace() {
            startTime = Date.now();
            timerInterval = setInterval(updateTimer, 1000);
            document.getElementById('start-button').style.display = 'none'; // Hide the start button
        }
    
        // Event listener for the start button
        document.getElementById('start-button').addEventListener('click', startRace);

        // Initialize the timer to show 00:00 initially
        document.getElementById('timer').textContent = "00:00";

        // If you have any pop-up logic
        function showPopUp() {
            alert(`Game time is: ${document.getElementById('timer').textContent}`);
    }

    });
