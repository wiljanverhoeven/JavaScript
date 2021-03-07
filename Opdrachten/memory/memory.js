const Container = document.getElementById("container");
let clickable = true;
let first = true;
let firstImgNumber, secondImgNumber;
let firstId, secondId;
let ammOfCorrectGuesses = 0;
let usedNumbers = [];

function RandomizeNumbers() {
    let counter = 0;
    while (counter < 18) {
        var math = Math.floor(Math.random() * 18) + 1
        if (!usedNumbers.includes(math)) {
            usedNumbers[counter] = math
            counter++
        }
    }
}

RandomizeNumbers();

for (let i = 0; i < 18; i++) {
    let pictureHolder = document.createElement("div");
    pictureHolder.className = "pictures";
    pictureHolder.id = `img-holder${i + 1}`;

    Container.appendChild(pictureHolder)
}

for (let i = 1; i < 19; i++) {
    let pictureHolder = document.getElementById("img-holder" + i);
    let imgElement = document.createElement('img');
    imgElement.className = "images"
    imgElement.id = "img" + i;
    imgElement.src = "img/white.png";

    pictureHolder.appendChild(imgElement);
    pictureHolder.addEventListener("click", function () {
        Selector(this.id, i)
    })
}
function Selector(id, i) {
    if (first) {

        const currentImgHolder = document.getElementById(id).firstChild.id;

        firstId = currentImgHolder;

        document.getElementById(currentImgHolder).src = `img/monke${usedNumbers[i - 1]}.jpg`;


        firstImgNumber = usedNumbers[i - 1];

        first = false;

    } else {

        if (!clickable) return;

        clickable = false;

        const secondImgHolder = document.getElementById(id).firstChild.id;

        secondId = secondImgHolder;

        document.getElementById(secondImgHolder).src = `img/monke${usedNumbers[i - 1]}.jpg`;

        secondImgNumber = usedNumbers[i - 1];

        setTimeout(checkForEqual, 1000);
    }
}

function checkForEqual() {

    if (firstImgNumber <= 9) {

        let temp = secondImgNumber - 9;

        if (firstImgNumber == temp) {
            ammOfCorrectGuesses += 1;
        } else {
            document.getElementById(firstId).src = "img/white.png";
            document.getElementById(secondId).src = "img/white.png";
        }

    } else {

        let temp = firstImgNumber - 9;

        if (secondImgNumber == temp) {
            ammOfCorrectGuesses += 1;
        } else {
            document.getElementById(firstId).src = "img/white.png";
            document.getElementById(secondId).src = "img/white.png";
        }

    }

    clickable = true;
    first = true;

    if (ammOfCorrectGuesses === 9) {
        if (confirm('YOU WON!\n' )){
        } else {
            clickable = false;
            first = false;
        }
    }
}

