
window.onscroll = function (e)
{
	document.getElementById("menu-btn").checked = false;
}

//modal

function abrirModal(img){
	console.log(img);
	document.getElementById('modal').style.display = "flex";
	document.getElementById('img01').src = img.src;
	document.getElementById('texto-modal').innerHTML = img.alt;
}
function cerrarModal(){
	document.getElementById('modal').style.display = "none";
}