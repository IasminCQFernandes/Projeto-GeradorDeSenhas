
let sizePassword = document.querySelector("#valor");

let sliderElement = document.querySelector("#slider");

let buttonEement = document.querySelector("#button");

let password = document.querySelector("#password");

let containerPassword = document.querySelector("#container-password");

let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&*_.?"

let novaSenha = "";

sizePassword.innerHTML = sliderElement.value;

slider.oninput = function(){
    sizePassword.innerHTML = this.value;
}


function geradorSenha(){
    let pass = "";

    for( let i =0, n = charset.length; i < sliderElement.value; ++i)

    pass +=  charset.charAt(Math.floor(Math.random()*n))

    containerPassword.classList.remove("hide");

    document.querySelector(".logo").src = "src/logo2.png"

    password.innerHTML = pass;

    novaSenha = pass;
}

function copySenha(){
    alert('Senha copiada com sucesso!')

    navigator.clipboard.writeText(novaSenha);

    
}

