// Get the timer element
var seconds = 0;
var timerId = setInterval(updateTimer, 1000); // Update every 1 second



// Start the timer

window.onload = function(){
  var timerElement = document.getElementById('clickMeButton');
  var pElement = document.querySelector('p');
  
  
  // Set initial time
  setTimeout();
}


// Function to update the timer
function updateTimer() {
  seconds++;
  timerElement.textContent = seconds;
}

// Stop the timer after 10 seconds (for demonstration)
setTimeout(function() {
  clearInterval(timerId);
  alert('Timer stopped after 10 seconds');
}, 10000); // Stop after 10 seconds
