// Function to start the timer
function startTimer() {
    const hours = parseInt(document.getElementById('hours').value || 0);
    const minutes = parseInt(document.getElementById('minutes').value || 0);
    const seconds = parseInt(document.getElementById('seconds').value || 0);

    if (hours === 0 && minutes === 0 && seconds === 0) {
        alert('Please set a valid time');
        return;
    }

    const totalTime = hours * 3600 + minutes * 60 + seconds;
    timeLeft = totalTime;

    timer = setInterval(() => {
        const hoursLeft = Math.floor(timeLeft / 3600);
        const minutesLeft = Math.floor((timeLeft % 3600) / 60);
        const secondsLeft = timeLeft % 60;

        document.getElementById('countdown').innerHTML = `${hoursLeft.toString().padStart(2, '0')}:${minutesLeft.toString().padStart(2, '0')}:${secondsLeft.toString().padStart(2, '0')}`;

        if (timeLeft === 0) {
            clearInterval(timer);
            alert('Time is up!');
        } else {
            timeLeft--;
        }
    }, 1000);
}

// Function to stop the timer
function stopTimer() {
    clearInterval(timer);
}

// Function to reset the timer
function resetTimer() {
    clearInterval(timer);
    document.getElementById('hours').value = '';
    document.getElementById('minutes').value = '';
    document.getElementById('seconds').value = '';
    document.getElementById('countdown').innerHTML = '';
}

// Event listeners for the buttons
document.getElementById('start').addEventListener('click', startTimer);
document.getElementById('stop').addEventListener('click', stopTimer);
document.getElementById('reset').addEventListener('click', resetTimer);
