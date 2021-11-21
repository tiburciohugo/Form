const form = document.getElementById('form');
const usuario = document.getElementById('username');
const email = document.getElementById('email');
const senha = document.getElementById('password');
const senha2 = document.getElementById('password2');

//Mostrar mensagem de erro
function mostraErro(input, mensagem) {
  const formControl = input.parentElement;
  formControl.className = 'form-control error';
  const small = formControl.querySelector('small');
  small.innerText = mensagem;
}

//Mostrar mensagem de sucesso
function mostraSucesso(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}

//Verificar se email é válido
function isValidEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

//Verificar campos necessários
/* function checkRequired(inputArr) {
  inputArr.forEach(function(input) {
    
    if(input.value.trim() === '') {
      mostraErro(input, `${input.id} é necessário`);
    } else {
      mostraSucesso(input);
    }
  });
} */

//Eventos
form.addEventListener('submit', function(event) {
  event.preventDefault();

  /* checkRequired([usuario, email, senha, senha2]) */

  if (usuario.value === '') {
    mostraErro(usuario, 'Usuário é necessário')
  } else {
    mostraSucesso(usuario);
  }

  if (email.value === '') {
    mostraErro(email, 'Email é necessário')
  } else if(!isValidEmail(email.value)) {
    mostraErro(email, 'Email inválido');
  } else {
    mostraSucesso(email);
  }

  if (senha.value === '') {
    mostraErro(senha, 'Senha é necessária')
  } else {
    mostraSucesso(senha);
  }
  
  if (senha2.value === '') {
    mostraErro(senha2, 'A confirmação de senha é necessária')
  } else {
    mostraSucesso(senha2);
  }

  
});