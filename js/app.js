import { valida } from './validacao.js'

const newSignUp = document.querySelector('[data-tipo-button]'); 

newSignUp.addEventListener('click', (eventoDoClick) => {    
    //eventoDoClick.preventDefault();    

    const todosInputs = document.querySelectorAll('input'); //pega todos os inputs  
    
    todosInputs.forEach( input => { //intera pelos inputs enviando-os, um a um, a function 'valida';
    
        valida(input);
       
    })

})   

// const inputs = document.querySelectorAll('input');

// inputs.forEach(input => {
//     input.addEventListener('blur', (evento) => {
//         evento.preventDefault(); 
//         valida(evento.target);
//     })
// })

