document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('startButton').addEventListener('click', startTimer);
  });
  
  function startTimer() {
    var hours = parseInt(document.getElementById("hoursInput").value) || 0;
    var minutes = parseInt(document.getElementById("minutesInput").value) || 0;
    var totalSeconds = hours * 3600 + minutes * 60;
  
    if (totalSeconds <= 0) {
      alert("Please enter a valid time.");
      return;
    }
  
    var interval = setInterval(function () {
      var hoursLeft = Math.floor(totalSeconds / 3600);
      var minutesLeft = Math.floor((totalSeconds % 3600) / 60);
      var secondsLeft = totalSeconds % 60;
  
      document.getElementById("countdown").innerHTML = hoursLeft + "h " + minutesLeft + "m " + secondsLeft + "s";
  
      if (--totalSeconds < 0) {
        clearInterval(interval);
        document.getElementById("countdown").innerHTML = "Time's up!";
        playSound("timerEnd.audiofile");
        chrome.action.setBadgeBackgroundColor({ color: [255, 165, 0, 255] }); // Orange color
      }
    }, 1000);
  }
  
  function playSound(audioFile) {
    var audio = new Audio(audioFile);
    audio.play();
  }
  