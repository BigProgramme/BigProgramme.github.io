// <!-- SAINT HERAUD MBOUMA -->
// Fonction qui change la police du body
function changeFontDeBody(){
    let corps = document.getElementsByTagName('body')[0];
    corps.style.fontFamily = 'Comfortaa';
}
changeFontDeBody()

// Fonction qui mettra tous les titres en gras
function mettreLesTitresEnGras(){

    let titres = document.querySelectorAll("h1, h2, h3, h4, h5, h6"); 
    for(i = 0; i<titres.length; i++)
    {
        titres[i].style.fontWeight='bold' ;
    }

}
mettreLesTitresEnGras()

//Mettre le Bouton(lien) en forme
function mettreEnFormeLeLien(){
    let link = document.querySelector(".bouton");
    link.style.color="#fff";
    link.style.textTransform = "uppercase";
    link.style.border = "1px solid #fff";
    link.style.padding = "18px 50px";
    link.style.display = "inline-block";
    link.style.borderRadius = "2px";
    link.style.textDecoration = "none";
    link.style.marginTop= "15px";
    link.style.fontFamily = 'sans serif';
    link.style.color = '#fff';
    link.style.transition = "all .2s ease-in";
    
}
mettreEnFormeLeLien()

// événement de mouseOver sur le  bouton
function changeLinkColorOnMouseOver() {
    const link = document.querySelector('.bouton'); // On Sélectionne le lien avec la classe "bouton"

    // On ajoute l'évenement mouseover
    link.addEventListener('mouseover', function() {
        this.style.color = 'blue'; // Change la couleur du texte en bleu
        this.style.background = "#fff"
    });

    // On ajoute l'évenement mouseout 
    link.addEventListener('mouseout', function() {
        this.style.color = '#fff'; // Rétablissemnt de la couleur du texte par défaut
        this.style.background = '';
    });
}

// Appel de la fonction pour activer le comportement sur le lien
changeLinkColorOnMouseOver();

//Modifier la couleur du H2
function modifierH2(){
    let h2 = document.querySelector('#skills .heading h2');
    h2.style.color = '#4e4747';

}
modifierH2()


// function  afficherSkills(langage, niveau){
//    var skills = document.getElementById("skills");
//    var divNiveau = document.createElement("div");
//    divNiveau.className += "niveau";
//    var span = document.createElement("span");
//    span.innerHTML= langage;
//    divNiveau.appendChild(span);
//    var progression = document.createElement("progress");
//    progression.value = niveau;
//    progression.max="100";
//    divNiveau.appendChild(progression)
//    skills.appendChild(divNiveau);
// }

//fonction de mis en forme de h5

function ModifierH5(){
    let tableauDesH5 = document.querySelectorAll("#skills .progress-bar h5");
    
    for (h5 = 0; h5 < tableauDesH5.length ; ++h5 ){
       
        tableauDesH5[h5].style.marginBottom = '2px';
       
}}
ModifierH5()

//Fonction qui va permettre d'animer  les barres de progrès à chaque fois que la page sera  chargée avec Jquery
function animeProgresBar(){
    //On sélectionne le dom 
    $(document).ready(function() {

    //Le dollar c'est le selector
    //Donc je sélectionne  tous les éléments qui ont la class progress-bar et j'applique une animation à cette
  $('.progress-bar').each(function() {

    //On récupère la valeur de l'attribut aria-valuenow de la classe  progress-bar et on la met dans une variable
    let width = $(this).attr('aria-valuenow') + '%';
    //On anime juste avec la largeur initiale durant 1000 milliseconde(1sec)...
    $(this).animate({ width: width }, 1000);
    
  });
});
}
animeProgresBar()



//Fonction qui permet d'animer les tâches lors du survol

function animerTacheSurvol(){
// On sélectionne tous les éléments de tâche
let tachesElements = document.querySelectorAll('.taches li');

for (let i = 0; i < tachesElements.length; i++) {
    tachesElements[i].addEventListener("mouseover", function () {
        this.style.transform = 'scale(1.1)';
        this.style.color = '#fff';
        })

        tachesElements[i].addEventListener("mouseout", function () {
            this.style.transform = 'none';
            this.style.color = '';
            
        })
      }

};

animerTacheSurvol()
//-------------------------


  //Fonction de cliquage de bouton

  function boutonCliquer() {
    let lesBoutons = document.querySelectorAll(".bouton-description-projet button");
  
    for (let i = 0; i < lesBoutons.length; i++) {
      let bouton = lesBoutons[i];
      let lien = "";
  
      if (bouton.id == "projet1") {
        lien = "https://github.com/BigProgramme/interactiveDashboard?tab=readme-ov-file#interactivedashboard";
      } else if (bouton.id == "projet2") {
        lien = "https://github.com/BigProgramme/Logiciel-de-Gestion-Etablissement-scolaire";
      } else if (bouton.id == "projet3") {
        lien = "https://github.com/BigProgramme/Analyse-des-ventes/blob/main/vente.ipynb";
      } else if (bouton.id == "projet4") {
        lien = "https://github.com/BigProgramme/MachineLearning_House_Prices/blob/main/projet.ipynb";
      } else if (bouton.id == "projet5") {
        lien = "https://github.com/BigProgramme?tab=repositories";
      } else if (bouton.id == "projet6") {
        lien = "https://github.com/BigProgramme?tab=repositories";
      }
  
      bouton.addEventListener("click", function() {
        window.open(lien, "_blank");
      });
    }
  }
boutonCliquer()

//clique sur le bouton principale
function ouvrirLien() {
    let lien = "https://github.com/BigProgramme";
    return window.open(lien, "_blank");
}

//fonction de hover sur le dernier lien qui ramène sur le formulaire de contact.

function lienContact(){
  //récupérer le lien 
  let lien = document.getElementById('jeVousContact').children[0];
  
  //On ajoute l'évenement mouseOver pour changer de couleur
  lien.addEventListener('mouseover', function(){
    this.style.color = 'red';
    
  })
  //On enleve l'evenement au dessus
  lien.addEventListener('mouseout', function(){
    this.style.color = '';
    
  })

}
lienContact()

