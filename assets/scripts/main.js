
//DOM
/*

let links = document.querySelectorAll("a");

links.forEach(function(link){
	console.log(link)
})
*/

/*
let celdas = document.querySelectorAll("td");

celdas.forEach(function(td){
	td.addEventListener('click',function(){
		console.log(this.textContent)
	})
});

*/

//Obtener elementos de clase .close

let links = document.querySelectorAll(".close");

links.forEach(function(link){
	link.addEventListener('click',function(ev){

		ev.preventDefault();
		
		
	});
});


//Recorrer

//Agregar evento clic a cada uno