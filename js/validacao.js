
function valida(input){ // função que recebe os inputs e checa no objeto o tipo de input
                               //para chamar a function de validação adequada ao input

    // console.log('---- 2 function valida in validacao.js ----')
    // const tipoDeInput = input.dataset.tipo //usa o 'dataset' para receber o data-attribut do input

    //console.log(input.validity);

    console.log(input.validity.valid);

    if(input.validity.valid){//propriedade valid do input. Se estiver 'false' está vazio.
        input.parentElement.classList.remove('input-container--invalido');
    }else{
        input.parentElement.classList.add('input-container--invalido');
    }

}

export default valida
