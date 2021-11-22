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

//Verificar length do input
function checkLenght(input, min, max) {
  if (input.value.length < min) {
    mostraErro(input, `${getFieldName(input)} tem que ter pelo menos ${min} caracteres`);
  } else if (input.value.length > max) {
    mostraErro(input, `${getFieldName(input)} tem que ter menos de ${max} caracteres`);
  } else {
    mostraSucesso(input);
  }
}

//Verificar se as senhas são iguais(match)
function checkPasswordsMatch (input1, input2) {
  if (input1.value !== input2.value) {
    mostraErro(input2, 'As senhas não conferem');
  }
}

//Get fieldname
function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

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

  checkLenght(usuario, 3, 15);
  checkLenght(senha, 6, 20);
  checkPasswordsMatch(senha, senha2);
});