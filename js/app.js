import valida from './validacao.js'

const newUser = document.querySelector('[data-tipo-button]'); 

newUser.addEventListener('click', (eventoDoClick) => {    
    eventoDoClick.preventDefault();    

    const todosInputs = document.querySelectorAll('input'); //pega todos os inputs  
    
    todosInputs.forEach( input => { //intera pelos inputs enviando-os, um a um, a function 'valida';
    
            valida(input);
       
    })

})   

