let imageslider1 = document.getElementById("imageslider1");
let imageslider2 = document.getElementById("imageslider2");
let imageslider3 = document.getElementById("imageslider3");
imageslider1.style.backgroundImage = "url('img/monke1.jpg')";
imageslider2.style.backgroundImage = "url('img/monke1.jpg')";
imageslider3.style.backgroundImage = "url('img/monke1.jpg')";
const plaatjes = [1,2];
let teller = 0;

imageslider1.addEventListener("click", function () {
    imageslider1.style.backgroundImage = "url('img/monke" + getAap() + ".jpg')";
});

imageslider2.addEventListener("click", function () {
    imageslider2.style.backgroundImage = "url('img/monke" + getAap() + ".jpg')";
});

imageslider3.addEventListener("click", function () {
    imageslider3.style.backgroundImage = "url('img/monke" + getAap() + ".jpg')";
});

function getAap() {
    if(teller >= plaatjes.length) {
        teller = 1;
    } else {
        teller++;
    }
    return teller;
}