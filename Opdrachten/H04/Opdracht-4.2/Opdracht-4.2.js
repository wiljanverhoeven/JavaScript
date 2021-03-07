let imageslider = document.getElementById("imageslider");
imageslider.style.backgroundImage = "url('img/monke1.jpg')";
const plaatjes = [1,2];
let teller = 0;

imageslider.addEventListener("click", function () {
   imageslider.style.backgroundImage = "url('img/monke" + getAap() + ".jpg')";
});

function getAap() {
    if(teller >= plaatjes.length) {
        teller = 1;
    } else {
        teller++;
    }
    return teller;
}