import { valida } from './validacao.js'

const newSignUp = document.querySelector('[data-tipo-button]'); 


newSignUp.addEventListener('click', (eventoDoClick) => {    
    eventoDoClick.preventDefault();    

    const todosInputs = document.querySelectorAll('input'); //Cada vez que clicar pega todos os inputs  
    
    let arrInputs = [];

    todosInputs.forEach( input => { //intera pelos inputs enviando-os, um a um, a function 'valida';
                
        valida(input);

        arrInputs.push(input.validity.valid); //cria um array com os valid de todos os inputs
      
    })

 
    checaValorDosInputs(arrInputs); // chama function para checar se todos os valids
                                    // tem valores iguais 

    function checaValorDosInputs(array) {

        let filtrado = array.filter(function(elemento, posicao, arr) {

            return arr.indexOf(elemento) == posicao;
        });

        if(filtrado.length === 1){ // Se filtrado for do tamanho 1, são todos iguais

            if(array.shift() === true){ //como são todos iguais, pega o primeiro
                //elemento e checa se é igual a 'true'. Se for limpa os inputs.

                document.querySelector('#firstName').value = "";
                document.querySelector('#lastName').value = "";
                document.querySelector('#email').value = "";
                document.querySelector('#password').value = "";

            }
        }           
        
    }

})   



