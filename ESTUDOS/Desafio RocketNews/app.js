document.addEventListener("DOMContentLoaded", function() {
    var input = document.querySelector('.input-with-button input');
    var initialText = document.querySelector('.initial-text');
  
    input.addEventListener('input', function() {
      if (input.value !== '') {
        initialText.style.display = 'none';
      } else {
        initialText.style.display = 'block';
      }
    });
  });

//Selicione os elementos
  const form = document.getElementById("form");
  const emailElements = document.getElementsByClassName("box-text");
  const btn = document.getElementsByClassName("img-svg")[0]; // Para acessar apenas o botao
  
  // Um evento que vai controlar a submissão do formulário
  form.addEventListener("submit", function (event) {
    event.preventDefault();
  
    // Acesse o valor do primeiro elemento com a classe "box-text"
    const emailForm = emailElements[0].value; 
  
    // Validar email
    const isValid = validateEmail(emailForm); 
  
    if (isValid) {
      btn.style.color = "green"; // Exemplo de como mudar a cor do botão
    } else {
      btn.style.color = "red"; // Exemplo de como mudar a cor do botão
    }
  });
  
  function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Exemplo de regex simples
    return regex.test(email);
  }
  





  


