

//Création du tableau
var table = document.createElement("table");
var bascule = false;
//var tableauImage = ['0-100px','100-200px','200-300px','300-400px','400-500px','500-600px','600-700px','700-800px','800-900px','900-1000px','1000-1100px','1100-1200px'];


for (var i = 1; i <= 4; i++) {
	var row = document.createElement("tr");
	for (var j = 1; j <= 7; j++) { 
		// Je crée ma cellule
		var cell = document.createElement("td");
		cell.className = "card";
		cell.id = j+","+i;
		// je crée la partie carte retournée
		var cellCache = document.createElement("div");
		cellCache.className = "cache";
		cell.appendChild(cellCache);
		
		// je crée la partie carte visible
		var cellImage = document.createElement("div");
		cellImage.className = "image";

		// $().css("background-position", tableauImage[11]);
		// $(cellImage).css( "background-position", tableauImage[random]);
		
		cell.appendChild(cellImage);
		// J'ajoute la cellule au tableau
		row.appendChild(cell);
	}
	
	table.appendChild(row);
	bascule = !bascule;
}
// table.className = "grille";
document.getElementById("main").appendChild(table);



// Fonction afficher une image
function afficheImage(event) {
	console.log("toto");
	console.log(event.id);
	/*
	 * var carte = document.getElementById(event.id);
	 * carte.style.backgroundColor = "red"; carte.textContent ="Toto";
	 */
	$( ".cache", this ).css( "visibility", "hidden" ).css("display","none");
	$( ".image", this ).css( "visibility", "visible" ).css("display", "block");
}





// Tableau des background-position
/*
console.log(tableauImage[1]);
console.log(tableauImage[12]);

var tab = document.createElement("div");
tab.appendChild(document.createTextNode(tableauImage[11]));
document.getElementById("main").appendChild(tab);
*/



$('.card').on('click', afficheImage);