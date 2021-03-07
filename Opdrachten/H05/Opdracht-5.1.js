pics = document.getElementById("pics");
createPicsHolder();
createAapImages();

function createPicsHolder() {
    for (let i = 0; i < 9; i++) {
        pictureHolder = document.createElement("div");
        pictureHolder.className = "picture-holder";
        pictureHolder.id = "picture-holder-" + i;
        pics.appendChild(pictureHolder);
    }
}

function createAapImages() {
    pictureHolders = document.getElementsByClassName("picture-holder");
    for(let i = 0; i < 9; i++) {
        favoriet = document.createElement("div");
        favoriet.className = "favoriet";
        favoriet.id = "favoriet_" + (i+1);
        aapPlaatje = document.createElement("img");
        aapPlaatje.src ="img/monke"+ (i+1) +".jpg";
        aapPlaatje.id = (i+1);
        aapPlaatje.addEventListener('click', function() {
            maakFavoriet(this.id);
        });
        pictureHolders[i].appendChild(aapPlaatje);
        pictureHolders[i].appendChild(favoriet);
    }
}

function maakFavoriet(id) {
    console.log("maak mijn favoriet" + id );
    notsofavorite = document.getElementsByClassName("favoriet");

    for(var i = 0; i < notsofavorite.length; i++) {
        notsofavorite[i].style.backgroundImage = "none";
    }

    favoriet = document.getElementById("favoriet_" + id);
    favoriet.style.backgroundImage = "url('img/gem4.png')";
}