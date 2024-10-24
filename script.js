function ENVIAR() {
    let NOME = document.getElementById("NOME").value;
    let EMAIL = document.getElementById("EMAIL").value;
    let CPF = document.getElementById("CPF").value;
    let IDADE = document.getElementById("IDADE").value;
    let CEP = document.getElementById("CEP").value;
    const mensagem = document.getElementById('mensagem');


     if (NOME === ""){
        mensagem.innerHTML=("por favor preencha o nome")
        mensagem.style.color="red";
        return;
         }

     if (EMAIL === "" || !EMAIL.includes ('@')){
        mensagem.innerHTML=("Erro ao fornecer o E-MAIL")
        mensagem.style.color="red";
        return;
    }

      if (CPF.length !== 11){  
        mensagem.innerHTML=("Erro ao fornecer o CPF")
        mensagem.style.color="red";
        return;
    }

      if (IDADE.length !== 2){
        mensagem.innerHTML=("Erro ao fornecer a idade")
        mensagem.style.color="red";
        return;
    }

      if (CEP.length !== 8){
        mensagem.innerHTML=("Erro ao fornecer o CEP")
        mensagem.style.color="red";
        return;
    }

    else {
        mensagem.innerHTML=("Murilo cu de aperta linguiça")
        mensagem.style.color="green";
    }
}