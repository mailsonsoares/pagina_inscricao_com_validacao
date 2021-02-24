const newUser = document.querySelector('[data-claim-button]');

newUser.addEventListener('click', (eventoDoClick) => {    
    // eventoDoClick.preventDefault();
    const formNewUser = document.querySelector('[data-claim-input-nome]');  //input nome  

    mensagemValida(formNewUser); //chama a function que devolve mensagem caso campo esteja vazio! 

})   

function mensagemValida(input){

    const dadosRecebidos = input.value;    

    let mensagem = ''        

    if (!validaCamposNaoVazios(dadosRecebidos)){//Chama a function que valida os campos não vazios
                                               //se voltar 'false', mensagem recebe 'O campo não pode estar vazio!'
        mensagem = 'O campo não pode estar vazio!'
    }

    console.log(input.id, mensagem);

    input.setCustomValidity(mensagem); //atribui à propriedade setCustomValidity, do input, a mensagem.
}

function validaCamposNaoVazios(dados){

    if (!dados){        
        return false; //se for vazio retorna 'false'.
    }else{
        return true;
    }
    
}

