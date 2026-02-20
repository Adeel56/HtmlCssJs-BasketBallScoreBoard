// Initialize scores
let homeScore = 0;
let guestScore = 0;

// Functions to update the scoreboard
function updateHome(points) {
    homeScore += points;
    document.getElementById('home-score').textContent = homeScore;
}

function updateGuest(points) {
    guestScore += points;
    document.getElementById('guest-score').textContent = guestScore;
}

function resetScores() {
    homeScore = 0;
    guestScore = 0;
    document.getElementById('home-score').textContent = homeScore;
    document.getElementById('guest-score').textContent = guestScore;
}

// Add event listeners to HOME buttons
document.getElementById('home1').onclick = function() { updateHome(1); }
document.getElementById('home2').onclick = function() { updateHome(2); }
document.getElementById('home3').onclick = function() { updateHome(3); }

// Add event listeners to GUEST buttons
document.getElementById('guest1').onclick = function() { updateGuest(1); }
document.getElementById('guest2').onclick = function() { updateGuest(2); }
document.getElementById('guest3').onclick = function() { updateGuest(3); }

// Add event listener to RESET button
document.getElementById('reset').onclick = resetScores;