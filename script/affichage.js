function afficher_question(conteneur, question) {
    integrer = '<div class="question-overlay">' +
        '<div class="circle">' +
        '<img src="./css/images/question.png" width="75px" />' +
        '</div>';
    if (!question.reponses) {
        integrer += '<h2>Notre équipe vous conseille un ' + question.texte + '</h2></div>';
    }
    else if (question.reponses) {
        integrer += '<h2>' + question.texte + '</h2></div>';
    }
    conteneur.innerHTML = integrer;
}

function afficher_reponses(conteneur, question) {
    code = "";

    if (question.last) {
        code += '<div class="topside">';
        for (back of question.last) {
            if($(".topside a").length < 1) {
                code += '<a style="width: 100%;" id="backlink" href="#" data-couleur="' + noeuds[back.id].reponses[back.numero].noeud + '" data-noeud="' + back.id + '" onclick="executer_choix(this)">';
            }
            else {
                code += '<a id="backlink" href="#" data-couleur="' + noeuds[back.id].reponses[back.numero].noeud + '" data-noeud="' + back.id + '" onclick="executer_choix(this)">';
            }
            code += '<div id="backhover"><span>' + noeuds[back.id].reponses[back.numero].titre + '</span><p>Changer</p></div><div id="back"><img src="./css/images/' + noeuds[back.id].reponses[back.numero].img + '.png" height="50px" /></div></a>';
        }
        code += '</div>';
    }

    if (question.reponses) {
        code += '<div class="contain">';
        for(rep of question.reponses) {
            code += '<a href="#" class="link" data-noeud="' + rep.noeud +
                '" onclick="executer_choix(this)"><div class="side" id="ok"><div class="descriptif"><h1>' + rep.titre + '</h1>' +
                '<p>' + rep.texte + '</p>' +
                '<div class="sidehover">' +
                '<div class="circle">' +
                '<img src="css/images/' + rep.img + '.png" width="75px">' +
                '</div>' +
                '</div><button>Choisir</button></div></div></a>';
        }
        code += '</div>';
    }
    else code += '<div class="resultat">' +
        '<div class="top-resultat">Notre équipe vous conseille un ' + question.texte + '</div>' +
        '<div class="contain-resultat"><div class="left-resultat">' +
        '<div class="img-resultat"><img src="./css/images/liste/' + question.texte + '.png" />' +
        '<p>' + question.texte + '</p></div>' +
        '<div class="google-resultat"><h3>Rechercher votre ordinateur sur Google</h3>' +
        '<img src="./css/images/google_logo.png" width="17px" height="17px" />' +
        '<a href="https://www.google.com/search?q=' + question.texte + '" target="_blank">Rechercher votre ' + question.texte + '</a>' +
        '</div></div><div class="right-resultat"><h3>Caractéristiques</h3>' +
        '<p><span>Processeur :</span><br/> ' + question.processeur + '</p>' +
        '<p><span>Carte graphique :</span><br/> ' + question.graphic + '</p>' +
        '<p><span>Ram :</span><br/> ' + question.ram + '</p>' +
        '<p><span>Disque dur :</span><br/> ' + question.hdd + '</p>' +
        '<p><span>SSD :</span><br/> ' + question.ssd + '</p>' +
        '<p><span>Prix :</span><br/> ' + question.prix + '</p></div></div>' +
        '<div class="bottom-resultat"><a href="./index.html"><span>Retourner à l\'accueil</span></a></div></div>';
    conteneur.innerHTML = code;
}

// Tableau de background

var bgRandom = ['to bottom, #5ee7df 0%, #b490ca 100%', 'to top, #faa6ba 0%, #fee893 100%', 'to bottom, #9e85e2 0%, #acd2d3 100%', 'to top, #ebbba7 0%, #cfc7f8 100%', 'to bottom, #f78ca0 0%, #f9748f 19%, #fd868c 60%, #fe9a8b 100%', '19deg, #FAACA8 0%, #DDD6F3 100%', '-120deg, #d4fc79 0%, #96e6a1 100%'];

// Fonction affichage question et réponses
// Transition avec overlay

function executer_choix(obj) {

    var bgCount = bgRandom.length-1;
    index = Math.floor((Math.random() * bgCount));

    afficher_question(document.getElementById('overlay'), noeuds[obj.dataset.noeud]);

    document.getElementById("overlay").style.display = "block";
    document.getElementById("overlay").classList.add('overlay-debut');
    document.getElementById("overlay").style.backgroundImage = "linear-gradient(" + bgRandom[index] + ")";
    setTimeout(function () {
        document.getElementById("overlay").style.opacity = "1";
        document.getElementById("overlay").style.left = "0";
    }, 2000);

    // Animation Overlay 2
    setTimeout(function () {
        document.getElementById("overlay").classList.add('overlay-fin');
    }, 4000);

    //
    setTimeout(function () {
        document.getElementById("overlay").style.left = "-100%";
        document.getElementById("overlay").classList.remove('overlay-fin');
        document.getElementById("overlay").classList.remove('overlay-debut');
    }, 5000);


    setTimeout(function () {
        afficher_reponses(document.getElementById('question'),
            noeuds[obj.dataset.noeud]);
    }, 2000);
}


function executer() {

    var bgCount = bgRandom.length-1;
    index = Math.floor((Math.random() * bgCount));

    afficher_question(document.getElementById('overlay'), noeuds[0]);

    document.getElementById("overlay").style.display = "block";
    document.getElementById("overlay").classList.add('overlay-debut');
    document.getElementById("overlay").style.backgroundImage = "linear-gradient(" + bgRandom[index] + ")";
    setTimeout(function () {
        document.getElementById("overlay").style.opacity = "1";
        document.getElementById("overlay").style.left = "0";
    }, 2000);

    // Animation Overlay 2
    setTimeout(function () {
        document.getElementById("overlay").classList.add('overlay-fin');
    }, 4000);

    //
    setTimeout(function () {
        document.getElementById("overlay").style.left = "-100%";
        document.getElementById("overlay").classList.remove('overlay-fin');
        document.getElementById("overlay").classList.remove('overlay-debut');
    }, 5000);

    setTimeout(function () {
        document.getElementById("introduction").style.display = "none";
        document.getElementById("start").style.display = "none";
        document.getElementById("laptop").style.display = "none";
        document.body.style.backgroundImage = "linear-gradient(" + bgRandom[index] + ")";
        document.getElementById("question").style.display = "block";
        afficher_reponses(document.getElementById('question'),
            noeuds[0]);
    }, 2000);
}