function consultaEndereco(){
    let cep = document.querySelector('#cep').value;

    if(cep.length !==8){
        alert('CEP Invalido');
        return;
    }

    let url = `https://viacep.com.br/ws/${cep}/json/`;

    fetch(url).then(function(response){

        response.json().then(function(data){
            console.log(data)
            mostrarEndereco(data);
        })
      

    });

};

function mostrarEndereco(dados){
    let resultado = document.querySelector('#resultado');

    if(dados.erro){
        document.getElementById('rua').value=("");
        document.getElementById('bairro').value=("");
        document.getElementById('cidade').value=("");
        document.getElementById('uf').value=("");
        resultado.innerHTML= "Não foi possível localizar o CEP digitado."
    }
    else{
    document.getElementById('rua').value=(dados.logradouro)
    document.getElementById('bairro').value=(dados.bairro);
    document.getElementById('cidade').value=(dados.localidade);
    document.getElementById('uf').value=(dados.uf);

    }
};