import ("./dico.js");


// Graphisme

const poidsLettres =
{
	"A": 9,
	"B": 2,
	"C": 2,
	"D": 3,
	"E": 15,
	"F": 2,
	"G": 2,
	"H": 2,
	"I": 8,
	"J": 1,
	"K": 1,
	"L": 5,
	"M": 3,
	"N": 6,
	"O": 6,
	"P": 2,
	"Q": 1,
	"R": 6,
	"S": 6,
	"T": 6,
	"U": 6,
	"V": 2,
	"W": 1,
	"X": 1,
	"Y": 1,
	"Z": 1
};

const nbCases = 16;
var poidsTotal = 0;
for (poids of Object.values (poidsLettres))
{
	poidsTotal += poids;
}
var score = document.getElementById ("score");


// Gameplay

var motsTrouves = new Set ()

var clicked = false;
var proposition = document.getElementById ("mot");


function nbAlea (nb)
{
    return Math.floor (Math.random () * nb);
}


function tirage ()
{
	var plateau = document.getElementById ("plateau");
	var poidsLettresRestants = Object.assign ({}, poidsLettres);
	var poidsRestant = poidsTotal;
	var _case, restant;
	
	for (var _index = 0; _index < nbCases; _index ++)
	{
		_case = document.createElement ("div");
		_case.classList.add ("_case");
		_case.id =
			"_case"
			+ _index
		;
		
		
		// Choix aléatoire pondéré par les poids des lettres
		
		restant = nbAlea (poidsRestant);
		
		for (var [lettre, poids] of Object.entries (poidsLettresRestants))
		{
			restant -= poids;
			if (restant < 0)
			{
				break;
			}
		}
		
		poidsLettresRestants[lettre] --;
		poidsRestant --;
		_case.innerHTML = lettre;
		
		
		// Sortie
		
		plateau.appendChild (_case);
	}
}


function ecouteSouris ()
{
	document.onmousedown = function ()
	{
		clicked = true;
	}
	document.onmouseup = relacheBouton ();
	
	const plateau = document.getElementById ("plateau");
	
	plateau.onmouseenter = sourisArrive (plateau);
	plateau.onmousedown = enfonceBouton (plateau);
	
	for (var _case of document.getElementsByClassName ("_case"))
	{
		_case.onmouseenter = sourisArrive (_case);
		_case.onmousedown = enfonceBouton (_case);
	}
}


function sourisArrive (cible)
{
	return function ()
	{
		if (clicked)
		{
			selectionne (cible);
		}
	};
}


function enfonceBouton (cible)
{
	return function ()
	{
		selectionne (cible);
	};
}


function relacheBouton ()
{
	return function ()
	{
		clicked = false;
		
		const selection = [...document.getElementsByClassName ("selected")];
		for (var _element of selection)
		{
			_element.classList.remove ("selected");
		}
		
		traitementProposition ();
	};
}


function selectionne (cible)
{
	const classes = cible.classList;
	
	if (! classes.contains ("selected"))
	{
		classes.add ("selected");
		if (classes.contains ("_case"))
		{
			proposition.innerHTML += cible.innerHTML;
		}
	}
}


function traitementProposition ()
{
	const mot = proposition.innerHTML;
	if (tMots[mot] && ! motsTrouves.has (mot))
	{
		// Le joueur a trouvé un mot
		motsTrouves.add (mot);
		score.innerHTML = parseInt (score.innerHTML) + mot.length ** 2;
	}
	
	proposition.innerHTML = "";
}


function initJeu ()
{
	score.innerHTML = 0;
	proposition.innerHTML = "";
	motsTrouves.clear ();
	tirage ();
	ecouteSouris ();
}
