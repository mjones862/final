

let diceArray = [$("img#cowPicture"), $("img#humanPicture"), $("img#raygunPicture"), $("img#tankPicture"),
    $("img#chickenPicture")];"img#raygunPictu

let reroll = 2;
let scoreCow = 0;
let scoreChicken = 0;
let scoreHuman = 0;

$("img#cowPicture").click(toggleHeld);
$("img#chickenPicture").click(toggleHeld);
$("img#humanPicture").click(toggleHeld);
$("img#raygunPicture").click(toggleHeld);

    document.getElementById("tankPicture").addEventListener("click", toggleHeld());

function getRandomDieFace() {
    for (let i = 0; i < 13; i++) {
        let span = document.createElement("SPAN");
        let randomNum = Math.floor(Math.random() * 6 + 1);
    return getRandomDieFace();
}

function createDieObject() {
    let randomDieFace = {
        Math.floor(Math.random() * 4),
        document.getElementById("tankPicture").addEventListener("click", toggleHeld()),
        toggleHeld,
    }
    return createDieObject();
}
function sortDice() {
    if (a.toggleHeld < b.)
        return -1;
    if (a.toggleHeld > b.)
        return 1;
    else
        return 0;
}
function rollAllDice() {
    for (let i = 0; i < 13; i++) {
        $("div.container2").getRandomDieFace.prepend;
    }
}
function drawDie() {
        if (toggleHeld = true) {
            $("span").css("background-color", "blue");
        }else {
        }
}
}
function drawAllDice() {
    if (a < b)
        return -1
    if (a > b)
        return 1
    else
        return 0;

    for (let x = 0; x < 13; x++) {
        $("div.container2").getRandomDieFace;
    }
}
function toggleHeld() {
    function held() {
        $("#chickenPicture").click(function () {
           $("div.container2").unshift;
        });
        $("#humanPicture").click(function () {
            $("div.container2").unshift;
        });
        $("#cowPicture").click(function () {
            $("div.container2").unshift;
        });
        $("#raygunPicture").click(function () {
            $("div.container2").unshift;
        });

        document.getElementById("tankPicture").addEventListener("click", toggleHeld());
    }
}
function startTurn() {
    let scorexHide = document.getElementById("scoreX");
    let scoreyHide = document.getElementById("scoreY");
    let scorezHide = document.getElementById("scoreZ");
    let startHide = document.getElementById("startTurn");
    if (scorexHide.style.display === none) {
        scorexHide.style.display = "block";
    } else {
        scorexHide.style.display = "none";
    }
    if (scoreyHide.style.display === none) {
        scoreyHide.style.display = "block";
    } else {
        scoreyHide.style.display = "none";
    }
    if (scorezHide.style.display === none) {
        scorezHide.style.display = "block";
    } else {
        scorezHide.style.display = "none";
    }
    if (startHide.style.display === none) {
        startHide.style.display = "block";
    } else {
        startHide.style.display = "none";
    }

   document.getElementById("reroll").reset();
    return rollAllDice();
}
function lost() {
    let y;
    for (y of diceArray) {
        if ("img#raygunPicture" < "img#tankPicture") {
            return false
        }
        else if ("img#raygunPicture" > "img#tankPicture") {
            return true
        }
    }
}
function endTurn() {
    let endturnHide  = document.getElementById("endTurn");
    let rerollHide = document.getElementById("reroll");

    function hideButtons() {
        if (endturnHide.style.display === none)
        {
            endturnHide.style.display = "block";
        }
        else
        {
            endturnHide.style.display = "none";
        }
        if (rerollHide.style.display === none)
        {
            rerollHide.style.display = "block";
        }
        else
        {
            rerollHide.style.display = "none";
        }
    }

    function winLose() {
        print("Game over, you lost :(");
        if (startturnHide.style.display === none) {
            startturnHide.style.display = "none";
        }
        else {
            startturnHide.style.display = "block";
        }
    }

}
function rerollDie() {
    reroll--;
    let w;
    let imageReplace =
    for (w of diceArray) {
        if(held() == false) {
            $("div.container2").replaceChild(Math.Floor(Math.random() * diceArray.length);
        }
        else {}
    }

}
function endGame() {
    if (scorexHide.style.display === none) {
        scorexHide.style.display = "block";
    } else {
        scorexHide.style.display = "none";
    }
    if (scoreyHide.style.display === none) {
        scoreyHide.style.display = "block";
    } else {
        scoreyHide.style.display = "none";
    }
    if (scorezHide.style.display === none) {
        scorezHide.style.display = "block";
    } else {
        scorezHide.style.display = "none";
    }
    if (startHide.style.display === none) {
        startHide.style.display = "block";
    } else {
        startHide.style.display = "none";
    }
    if (endturnHide.style.display === none)
    {
        endturnHide.style.display = "block";
    }
    else
    {
        endturnHide.style.display = "none";
    }
    if (rerollHide.style.display === none)
    {
        rerollHide.style.display = "block";
    }
    else
    {
        rerollHide.style.display = "none";
    }
    document.getElementById("score").innerHTMl = scoreX + scoreY + scoreZ;
}

//cows
function scoreX() {
    function countx() {
        let countX = 0;
        for (let x in diceArray) {
            countX = countX + 1;
        }

    }

    document.getElementById("pointCow").innerHTML = countx();

    if (scoreX && scoreY && scoreZ == true) {
        return endGame();
        print("You won, congratulations!");
    } else if (scoreX && scoreY && scoreZ == false) {
        return startTurn();
    }
}

//chicken
function scoreY() {
    function county() {
        let countY = 0;
        for (let y in diceArray) {
            countY = countY + 1;
        }
    }
    document.getElementById("pointChicken").innerHTML = county();

    if (scoreX && scoreY && scoreZ == true) {
        return endGame();
        print("You won, congratulations!");
    }
    else if (scoreX && scoreY && scoreZ == false) {
        return startTurn();
    }
}

//human
function scoreZ() {
    function countz() {
        let countZ = 0;
        for (let z in diceArray) {
            countZ = countZ + 1;
        }
    }
    document.getElementById("pointHuman").innerHTML = countz();

    if (scoreX && scoreY && scoreZ == true) {
        return endGame();
        print("You won, congratulations!");
    }
    else if (scoreX && scoreY && scoreZ == false) {
        return startTurn();
    }

}

//function disabledBtn() {
    //document.getElementById("play").disabled = true;
//}
