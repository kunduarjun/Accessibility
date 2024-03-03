// Get the timer element
var timerElement = document.getElementById('timer');

// Set initial time
var seconds = 0;

// Function to update the timer
function updateTimer() {
  seconds++;
  timerElement.textContent = seconds;
}

// Start the timer
var timerId = setInterval(updateTimer, 1000); // Update every 1 second

// Stop the timer after 10 seconds (for demonstration)
setTimeout(function() {
  clearInterval(timerId);
  alert('Timer stopped after 10 seconds');
}, 10000); // Stop after 10 seconds
