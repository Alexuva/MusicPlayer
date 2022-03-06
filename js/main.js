let player = document.querySelector('#music-player'); //Player
let play = document.querySelector('.play');           //Boton Play
let next = document.querySelector('.next');           //Boton Siguiente
let prev = document.querySelector('.prev');           //Boton Anterior
let bar = document.querySelector('.bar'); 

//COMPROBAR SI EL ARCHIVO HA CARGADO Y ACTUALIZAR TIEMPO

player.addEventListener('loadedmetadata', ()=>{

    player.addEventListener('timeupdate', ()=>{
    
    //CARGAR DURACIÓN TOTAL 
    let time = player.duration;
    let totalMin = Math.floor(time / 60);
    let totalSec = Math.floor(time % 60);

    //IMPRIMIR DATOS DURACION TOTAL
    let audioDuration = document.querySelector('#duration');
    audioDuration.innerHTML = `${totalMin}:${totalSec}`;

    //CARGAR DATOS CURRENT TIME
    cTime = player.currentTime;
    console.log(cTime);
    let totalCmin = Math.floor(cTime / 60);
    let totalCsec = Math.floor(cTime % 60);

    //IMPRIMIR DATOS CURRENT TIME
    let audioCurrent = document.querySelector('#currentTime');
    if(totalCsec < 10){
        totalCsec = `0${totalCsec}`;
    }
    audioCurrent.innerHTML = `${totalCmin}:${totalCsec}`;

    });
    
});

//CONTROLAR EL ARCHIVO

    //PLAY & PAUSE
    play.addEventListener('click', ()=>{
    
        if(player.classList.contains('pause')){
            player.classList.replace('pause', 'play');
            player.play();
            
        }else{
            player.classList.replace('play', 'pause');
            player.pause();
        }
    
    });

    //ANTERIOR
    prev.addEventListener('click', ()=>{
        player.currentTime = 0;
    });

    //POSTERIOR
    next.addEventListener('click', ()=>{
        player.classList.replace('play', 'pause');
        player.pause();
    });

    //ADELANTAR CON BARRA PROGRESO















