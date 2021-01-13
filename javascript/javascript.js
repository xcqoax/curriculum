
var btnMenu = document.getElementById('btn-menu')
var menu = document.getElementById('menu')

window.onresize = resize 

function resize(){
    let anchoPantalla = window.innerWidth
    if(anchoPantalla < 768){
        menu.classList.add('ocultar')
    } else{
        menu.classList.remove('ocultar')
    }
    
}



btnMenu.onclick = () =>{

 menu.classList.toggle('ocultar')
 
}
