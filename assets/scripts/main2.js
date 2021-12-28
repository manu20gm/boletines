let links = document.querySelectorAll(".close");

links.forEach(function(link){
	link.addEventListener('click',function(ev){
		ev.preventDefault();
		
		let content = document.querySelector(".content");
		
		//Eliminar clase de animacion
		content.classList.remove("animate__fadeInDown");
		content.classList.remove("animate__animated");
		
		//Agregar clase animacion salida
		content.classList.add("animate__fadeOutUp");
		content.classList.add("animate__animated");
		
		setTimeout(function(){
			location.href="/";
		},600);
		
		return false;
	});
});