import valida from './validacao.js'

const newUser = document.querySelector('[data-tipo-button]'); 

newUser.addEventListener('click', (eventoDoClick) => {    
    eventoDoClick.preventDefault();

    // console.log('----- 1 app.js -----');

    const todosInputs = document.querySelectorAll('input'); //pega todos os inputs  
    //console.log(todosInputs);

    // let i = 1;
    todosInputs.forEach( input => { //intera pelos inputs enviando-os, um a um, a function 'valida';
    
        // input.addEventListener('click', (eventoDoClick) => {
            // console.log(`----- forEach ${i}----`);    
            //console.log(input);        
            valida(input);
            
            // i++;
        // })
    })

    

})   

