const btnStart = document.getElementById('btnStart');
const btnStop = document.getElementById('btnStop');
const texto= document.getElementById('texto');
const btnPlayText= document.getElementById('playText');



let recognition= new webkitSpeechRecognition();
recognition.lang = 'es-ES'/* ,'it_CH','en_US'*/ ;
recognition.continuous = true;
recognition.interimResults = false;

// recongnition tiene el evento .onresult y este tiene a event como parametro
recognition.onresult = (event) =>{
    const results = event.results;
    //console.log(results);
    const loQueHablas= results[results.length -1][0].transcript;
    texto.value += loQueHablas;
}
// evento cuando el micro deja de escuchar
recognition.onend= (event) =>{
    console.log('se pauso')
    alert('Se pauso');
}

//error
recognition.onerror= (event) =>{
    console.log(event.error);
}



btnStart.addEventListener('click',() =>{
    //.star() metodo incluido en recognition
    recognition.start();
});

btnStop.addEventListener('click',() =>{
    //.abort() metodo incluido en recognition
    recognition.abort();
});


btnPlayText.addEventListener('click',() =>{
    
    leerTexto(texto.value);
});



function leerTexto(texto){

    const hablar = new SpeechSynthesisUtterance();
    hablar.text= texto;
    hablar.volume =1;
    hablar.rate =1;
    hablar.pitch =1;

 window.speechSynthesis.speak(hablar);
}