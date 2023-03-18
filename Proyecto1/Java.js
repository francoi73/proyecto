
var menu_visible = false;
let menu = document.getElementById("nav");
function mostrarOcultarMenu(){
    if(menu_visible==false){
        menu.style.display = "block";
        menu_visible = true;
    }
    else{
        menu.style.display = "none";
        menu_visible = false;
    }
}
let links = document.querySelectorAll("nav a");
for(var x = 0; x <links.length;x++){
    links[x].onclick = function(){
        menu.style.display = "none";
        menu_visible = false;
    }
}
function calcular(){
    remolacha=document.getElementById("remolacha").value;
    alert("El precio total es"+" "+(remolacha*200));
}
function enviar(){
    alert("Entendido, Mose le entregara su remolacha el dia lunes de 3 a 4 AM.");
}