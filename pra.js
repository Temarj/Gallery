let imagen = document.getElementById("cajap");
let p=0;
let posicion=document.getElementsByClassName("mini");
let info= document.getElementById("desplegable");
let nombre= document.getElementById("texto");
let prev= document.getElementById("prev");
let next= document.getElementById("next");
let x= document.getElementById("desplegable");
let theme2= document.getElementById("dark");
let theme1= document.getElementById("basic");
let theme3= document.getElementById("colour");

function cambiarimagen(imagensource, indiceactual){
	imagen.src = imagensource;
	p=indiceactual;
	cambiarnombre();
}

function volver(){
	if(p==0){
		p=posicion.length -1;
	}
	else{p=p-1;}
	imagen.src=posicion[p].src;
	cambiarnombre();
}

function pasar(){
	if(p==posicion.length -1){
		p=0;
	}
	else{p=p+1;}
	imagen.src=posicion[p].src;
	cambiarnombre();
}

function detectartecla(e){
	console.log(e.event);
	if (e.code=="ArrowLeft"){
		volver();
	}
	else if (e.code=="ArrowRight"){
		pasar();
	}
	else{}
}

function mostrarinfo(){
	info.style.display='flex';
	cambiarnombre();
}
function cerrar(){
	info.style.display='none';
}

function cambiarnombre(){
	switch (p){
	case 0:
	nombre.innerHTML = 'La Libertad guiando al pueblo.<br/>Eugène Delacroix.<br/>Romacintismo, 1830.<br/>Pintura al aceite.';
	break;
	case 1:
	nombre.innerHTML = 'El 3 de mayo en madrid.<br/>Francisco de Goya.<br/>Romacintismo, 1814.<br/>Pintura al aceite.';
	break;
	case 2:
	nombre.innerHTML = 'Guernica.<br/>Pablo Picaso.<br/>Cubismo, 1937.<br/>Pintura al óleo.';
	break;
	case 3:
	nombre.innerHTML = 'La creación de Adán.<br/>Miguel Ángel.<br/>Renacentismo, 1511.<br/>Fresco.';
	break;
	case 4:
	nombre.innerHTML = 'La tentación de San Antonio.<br/>Salvador Dalí.<br/>Surrealismo, 1946.<br/>Pintura al óleo.';
	break;
	case 5:
	nombre.innerHTML = 'Los amantes.<br/>René Magritte.<br/>Surrealismo, 1928.<br/>Pintura al aceite.';
	break;
	case 6:
	nombre.innerHTML = 'Las meninas.<br/>Diego de Velázquez.<br/>Barroco, 1656.<br/>Pintura al óleo.';
	break;
	case 7:
	nombre.innerHTML = 'La persistencia de la memoria.<br/>Salvador Dalí.<br/>Surrealismo, vanguardismo, 1931.<br/>Pintura al aceite.';
	break;
	case 8:
	nombre.innerHTML = 'La noche estrellada.<br/>Vincent Van Gogh.<br/>Postimpresionismo, arte moderno, 1889.<br/>Pintura al aceite.';
	break;
	}
}

function estilo1(){
	document.body.style.backgroundColor="white";
	prev.style.backgroundColor="black";
	next.style.backgroundColor="black";
	x.style.backgroundColor="black";
	bt1.style.backgroundColor="black";
	bt2.style.backgroundColor="black";
	info.style.backgroundColor="black";
	prev.style.color="white";
	next.style.color="white";
	x.style.color="white";
	bt1.style.color="white";
	bt2.style.color="white";
	nombre.style.color="white";
	theme1.style.backgroundColor="black";
	theme2.style.backgroundColor="black";
	theme3.style.backgroundColor="black";
	theme1.style.color="white";
	theme2.style.color="white";
	theme3.style.color="white";
}

function estilo2(){
	document.body.style.backgroundColor="black";
	prev.style.backgroundColor="white";
	prev.style.color="black";
	next.style.backgroundColor="white";
	next.style.color="black";
	x.style.backgroundColor="white";
	x.style.color="black";
	bt1.style.backgroundColor="white";
	bt1.style.color="black";
	bt2.style.backgroundColor="white";
	bt2.style.color="black";
	info.style.backgroundColor="white";
	nombre.style.color="black";
	theme1.style.backgroundColor="white";
	theme2.style.backgroundColor="white";
	theme3.style.backgroundColor="white";
	theme1.style.color="black";
	theme2.style.color="black";
	theme3.style.color="black";
}

function estilo3(){
	document.body.style.backgroundColor="yellow";
	prev.style.backgroundColor="black";
	next.style.backgroundColor="black";
	x.style.backgroundColor="black";
	bt1.style.backgroundColor="black";
	bt2.style.backgroundColor="black";
	info.style.backgroundColor="black";
	prev.style.color="white";
	next.style.color="white";
	x.style.color="white";
	bt1.style.color="white";
	bt2.style.color="white";
	nombre.style.color="white";
	theme1.style.backgroundColor="black";
	theme2.style.backgroundColor="black";
	theme3.style.backgroundColor="black";
	theme1.style.color="white";
	theme2.style.color="white";
	theme3.style.color="white";
}

prev.addEventListener("click", volver);
next.addEventListener("click", pasar);
window.addEventListener("keydown", detectartecla);
imagen.addEventListener("click", mostrarinfo);
x.addEventListener("click", cerrar);
theme2.addEventListener("click", estilo2);
theme1.addEventListener("click", estilo1);
theme3.addEventListener("click", estilo3);

let dialog= document.getElementById("popUp");
let bt= document.getElementById("bt1");
let bt2= document.getElementById("bt2");

bt.addEventListener("click", open);
bt2.addEventListener("click", close);

function open(){
	let imgrande= document.getElementById("pcompleta");
	imgrande.src=posicion[p].src;
	dialog.showModal();
}

function close(){
	dialog.close();
}
