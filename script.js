
document.getElementById('titre');

const titre = document.getElementById('titre')



// le bouton pour rejouer
const replay = document.getElementById('replay'); 
//console.log(replay); 


//----------------compteur de points----------------

//cibler toutes les balles
const btnRed = document.getElementById('btn-red');
//console.log(btnRed, "bouton rouge");
const btnBlue = document.getElementById('btn-blue');
const btnPurple = document.getElementById('btn-purple');
const btnGreen = document.getElementById('btn-green');
const btnPink = document.getElementById('btn-pink');

//initialisation du compteur de point à 0
let compteur = 0;
//console.log(compteur, "compteur demarrage");

//detection du clic sur chaque balle
btnRed.addEventListener('click', function(){
//console.log("btn bleu cliqué")
    add();
});

btnBlue.addEventListener('click', function(){
    add();
})

btnPurple.addEventListener('click', function(){
    add();
})

btnGreen.addEventListener('click', function(){
    add();
})

btnPink.addEventListener('click', function(){
    add();
})

//incrementer de 1 à chaque clic
function add(){
    compteur = compteur + 1;
    //console.log(compteur, "compteur apres incrementation");
    titre.innerText = compteur
}




//-------------suppression des balles apres delai 30sec-------------
setTimeout(function(){
    btnRed.remove();
    btnBlue.remove();
    btnPurple.remove();
    btnGreen.remove();
    btnPink.remove();
}, 30000);


//-----------affichage du score à la fin du delai----------------------
setTimeout(function(){
    titre.innerText = "Vous avez marqué" + " " + compteur + " " + "points"; 
}, 
30000);

   
//------------bouton rejouer-------------------------------------
replay.addEventListener('click', function(){
    //console.log('cliqué'); 
    location.reload();
});


//-----------chronometre decompte temps restant-------

const departSecondes = 1
let tempsRestant = departSecondes * 30

const timerElement = document.getElementById("timer")

//décrementer toutes les 1sec (1000ms) de 1sec
function diminuerTemps() {
   let minutes = parseInt(tempsRestant / 60, 10)
   let secondes = parseInt(tempsRestant % 60, 10)

   //en base 60
   minutes = minutes < 10 ? "0" + minutes : minutes
   secondes = secondes < 10 ? "0" + secondes : secondes

   timerElement.innerText =  secondes

   //ne plus compter en negatif
   tempsRestant = tempsRestant <= 0 ? 0 : tempsRestant - 1
}
//repetition de la fonction tous les  1000ms
setInterval(diminuerTemps, 1000)












/*

const departMinutes = 5
let temps = departMinutes * 60

//cible id timer
const timerElement = document.getElementById("timer")

//set interval pour repetition
setInterval(() => {
  let minutes = parseInt(temps / 60, 10)
  let secondes = parseInt(temps % 60, 10)

  minutes = minutes < 10 ? "0" + minutes : minutes
  secondes = secondes < 10 ? "0" + secondes : secondes

  timerElement.innerText = `${minutes}:${secondes}`
  temps = temps <= 0 ? 0 : temps - 1
}, 1000)
*/