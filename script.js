
// Selecionando os elementos

let sliderElement = document.querySelector('#slider');
let buttonElement = document.querySelector('#button');

let sizePassword = document.querySelector('#valor');
let password = document.querySelector('#password');

let containerPassword = document.querySelector('#container-password');

let charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz123456789";
let novaSenha = "";

// Atualiza o valor exibido conforme o slider é movido

sizePassword.innerHTML = sliderElement.value;

sliderElement.oninput = function() {
  sizePassword.innerHTML = this.value;

}

// Gera uma senha aleatória com base no tamanho selecionado

function generatePassword() {
  let pass = "";
  for (let i = 0, n = charset.length; i < sliderElement.value; ++i) {
    pass += charset.charAt(Math.floor(Math.random() * n));

  }
  
  console.log(pass); 
  
  containerPassword.classList.remove("hide"); 
  password.innerHTML = pass; 
  novaSenha = pass; 

}

// Função para copiar a senha gerada para a área de transferência

function copyPassword() {
  alert("Senha copiada com sucesso!"); 
  navigator.clipboard.writeText(novaSenha); 
  
}