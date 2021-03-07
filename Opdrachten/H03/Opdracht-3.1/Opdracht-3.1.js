var plaatjes = document.getElementsByTagName("img");
var randomnummers = [];
var random = 0;

while(randomnummers.length < 9) {
    random = Math.floor(Math.random() * 9) + 1;
    if (randomnummers.lastIndexOf(random) == -1) {
        randomnummers.push(random);
    }
}
random = 0;
for(var plaatje in plaatjes) {
    plaatjes[plaatje].src = "images/monke"+ randomnummers[random]+".jpg";
    random++;
}
