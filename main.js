function playSonido(IdElementoAudio){
    document.querySelector(IdElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');



//ejemplo con for para optimizar
for(let contador = 0; contador <listaDeTeclas.length; contador++){

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    console.log(instrumento);
    
    const idAudio =`#sonido_${instrumento}`;
    console.log(idAudio);

    listaDeTeclas[contador].onclick = function (){
        playSonido(idAudio);
    };

    //este codigo funciona para cualquier tecla pero queremos que sea solo
    //con espacio
    //tecla.onkeydown = function(){
    //    tecla.classList.add('activa');
    //}

    //entonces lo modifico asi:

    //usando el parametro en function para saber cuando el evento fue activado

    tecla.keydown = function(evento){        
        if(evento.code === 'Space' || evento.code === 'Enter'){
            tecla.classList.add('activa');
        }
    }

    tecla.onkeyup =function(){
        tecla.classList.remove('activa');
    }

   

    
}


//poner el boton en color rojo al ser presionado




/* ejemplo con while 

let contador = 0;

while (contador < 9){
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];

    console.log(instrumento);
    
    const idAudio =`#sonido_${instrumento}`;
    console.log(idAudio);

    listaDeTeclas[contador].onclick = function (){
        playSonido(idAudio);
    };

    contador++;    
      
}*/







