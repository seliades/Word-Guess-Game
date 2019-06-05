// Variables to keep track of score and guesses
var wins = 0;
var losses = 0;
var guessesLeft = 6;
var guessesSoFar = [];
var blanks = [];

// Variables to reference the html <p>
var directionsText = document.getElementById("directions-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessesLeftText = document.getElementById("guessesLeft-text");
var guessesSoFarText = document.getElementById("guessesSoFar-text");
var blanksText = document.getElementById("blanks-text");

// Arrays for alphabet and teams
var alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var teams = ["ARIZONA DIAMONDBACKS", "ATLANTA BRAVES", "BALTIMORE ORIOLES", "BOSTON RED SOX", "CHICAGO CUBS", "CHICAGO WHITE SOX", "CINCINNATI REDS", "CLEVELAND INDIANS", "COLORADO ROCKIES", "DETROIT TIGERS", "HOUSTON ASTROS", "KANSAS CITY ROYALS", "LOS ANGELES ANGELS", "LOS ANGELES DODGERS", "MIAMI MARLINS", "MILWAUKEE BREWERS", "MINNESOTA TWINS", "NEW YORK METS", "NEW YORK YANKEES", "OAKLAND ATHLETICS", "PHILADELPHIA PHILLIES", "PITTSBURGH PIRATES", "SAN DIEGO PADRES", "SAN FRANCISCO GIANTS", "SEATTLE MARINERS", "ST LOUIS CARDINALS", "TAMPA BAY RAYS", "TEXAS RANGERS", "TORONTO BLUE JAYS", "WASHINGTON NATIONALS"]

// Assign random team to guess
var computerTeam = teams[Math.floor(Math.random() * teams.length)];

for ( var j = 0; j <computerTeam.length; j++) {
    var blankClue = document.createElement("p")
    blankClue.addclass()
    }
    

document.onkeyup = function (event) {

    // Assign variable for key presses
    var userGuess = event.key;

    // Only allow game to work when pressing letters
    for (var i = 0; i < alphabet.length; i++) {
    if (userGuess === alphabet[i]) {

     
      
    // Display the guesses left/so far, and wins/losses
    winsText.textContent = "Wins: " + wins;
    lossesText.textContent = "Losses: " + losses;
    guessesLeftText.textContent = "Number of guesses remaining: " + guessesLeft;
    guessesSoFarText.textContent = "Letters guessed so far: " + guessesSoFar;
    blanksText.textContent = " " + blanks[j] + " ";
    }
    }
}
};