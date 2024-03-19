//vérifier les input 

function verifierChampNom(){

    // Je créé un motif d'expression régulière pour un nom. un seul nom
    let motif = /^[a-z]+$/i;

    //je récupère la valeur du champ 
    let nom = document.getElementById("nom").value;

    //Je vérifie si tout le champ, y compris les espaces est vide
    if(nom.trim( ) == ""){
        
        //Si c'est le cas, je fais ce qui suit.
        document.getElementById('nom-error').textContent = 'Veuiller rentrer un nom';
        document.getElementById('nom-error').style.color = 'red';
    }

    //Aussi il faut que l'on vérifie que ça correspond au motif de l'expression régulière
    else if(!motif.test(nom.toLowerCase())){
        document.getElementById('nom-error').textContent = "Le nom ne doit contenir que des lettres";
        document.getElementById('nom-error').style.color = 'red';
    }
    
    //Si tout est ok, on ne fait absolument rien
    else{
        document.getElementById('nom-error').textContent = '';
    }
}

function verifierChampPrenom(){

    let motif = /^[a-z]+([ -][a-z]+)*$/i;
    let prenom = document.getElementById("prenom").value;
    if(prenom.trim() == ""){
        // alert("Veuillez rentrez votre prénom");
        document.getElementById("prenom-error").textContent = "Veuillez rentrez votre prénom";
        document.getElementById("prenom-error").style.color = 'red';
        
    }
        else if (!motif.test(prenom)) {
            document.getElementById("prenom-error").textContent = "Le prénom ne peut pas contenir de caractères spéciales ou numériques";
            document.getElementById("prenom-error").style.color = 'red';
        }

    else {
       document.getElementById("prenom-error").textContent = "";
       
    }
}

function verifierChampTelephone(){
    let motif = /^(\d{2}-){4}\d{2}$/;
    let telephone = document.getElementById("telephone").value;

    if (telephone.trim() == ""){
        document.getElementById("telephone-error").textContent="Veuillez remplir ce champ.";
        document.getElementById("telephone-error").style.color = 'red';
        
    }

    else if (!motif.test(telephone)) {
        document.getElementById("telephone-error").textContent = "Veuillez entrer un numéro de téléphone valide au format xx-xx-xx-xx-xx";
        document.getElementById("telephone-error").style.color = "red";
    }
    else {
        document.getElementById("telephone-error").textContent = "";
    }
}

// Enregistrement des données saisies dans un json:
let listDeContact = [];
function enregistrerDonnees(){
    // Récupération des valeurs des champs du formulaire
  let nom = document.getElementById("nom").value;
  let prenom = document.getElementById("prenom").value;
  let tel = document.getElementById("telephone").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;

  //Création de l'objet JSON
  let personne = {
        Nom: nom, 
        Prénom: prenom,
        tel: tel,
        mail: email,
        mess: message 
                };

  //Ajout de cet objet au tableau, chaque personne qui laisse un message, on l'ajoute
  //Dans notre liste de contact.
  listDeContact.push(personne);
  //Test, mdr
  console.log(personne)

  //ON peut afficher les données récupérées dans notre div result
  afficherDonnees(); //Cette fonction  est définie plus bas
  

  //On vide le formulaire une fois que les données ont été enregistrées        
  viderFormulaireApresEnvoie();
  
}

//Function qui permet de vider le formulaire une fois les données envoyées.
function viderFormulaireApresEnvoie(){
    //il s'agira tout simplement de vider les champs,  c'est-à-dire de remettre leur contenu à "" --> (rien).
    document.getElementById("nom").value = "";
    document.getElementById("prenom").value = "";
    document.getElementById("telephone").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
}


// Fonction qui permet l'affichage des données dans le div "result"
function afficherDonnees() {
    //On récupère notre div dans lequelle on affichera les infos...
    let resultDiv = document.getElementById( "result" );
    //Un peu de mise en forme pour la div
    resultDiv.style.margin = "30px";
    //Au début on le laisse vide
    resultDiv.innerHTML = '';

    //On parcour la liste de contact pour récupérer les personnes...
    for (let i=0; i<listDeContact.length;i++) {
        let numeroDuContact = i + 1; //Pour mettre un numéro de contact plus sympa
        let unePersonne = listDeContact[i];
        //on va créer un élément p pour afficher les informations saisies
        let infoElement = document.createElement('p');

        //On ajoute le texte à cette balise <p>, ici le texte n'est rien d'autre que les informations saisies (dans le formulaire de contact)
        infoElement.textContent ='Contact '+ numeroDuContact +'--> ' + "Nom: "+unePersonne.Nom + '|'+' Prénom: '+ unePersonne.Prénom + '|'+' Téléphone: '+unePersonne.tel+'|'+'  Mail :'+unePersonne.mail + '|'+' Message: '+ unePersonne.mess;
        
        // alert("Informations envoyées");
        resultDiv.appendChild(infoElement);

    }    
}


//
function cliquerBouton(){

    let bouton = document.getElementsByTagName('button')[0];
    
    bouton.addEventListener('click', function (e){
    e.preventDefault();
    verifierChampNom();
    verifierChampPrenom();
    verifierChampTelephone();
    enregistrerDonnees();
        
}
 );
 
}
cliquerBouton()

