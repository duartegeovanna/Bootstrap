var nome = window.document.getElementById('nome')
var email = window.document.getElementById('email')
var assunto = window.document.getElementById('assunto')
var nomeOk = false
var emailOk = false
var assuntoOk = false


function validarNome(){
    let txtNome = document.querySelector('#txtNome')
    if(nome.value.length <= 2){
         txtNome.innerHTML = 'Nome inválido!'
         txtNome.style.color = 'red'
         nomeOk = false
    }else{
        txtNome.innerHTML = 'Nome válido!'
        txtNome.style.color = 'green'
        nomeOk = true
    }
}

function validarEmail(){
    let txtEmail = document.querySelector('#txtEmail')
    if(email.value.indexOf('@') > 0 && email.value.indexOf('.') > 0){
            txtEmail.innerHTML = 'email válido!'
            txtEmail.style.color = 'green'  
            emailOk = true   
    }else{
        txtEmail.innerHTML = 'email inválido!'
        txtEmail.style.color = 'red'  
        emailOk = false
    }
}

function validaAssunto(){
    let txtAssunto = document.querySelector('#txtAssunto')
    if(assunto.value.length >= 100){
        txtAssunto.innerHTML = 'Texto muito grande, digite no máximo 100 caracteres'
        txtAssunto.style.color = 'red'
        txtAssunto.style.display = 'block'
        assuntoOk = false
    }else
        txtAssunto.style.display = 'none'
        assuntoOk = true


}

function Enviar(){
    if(nomeOk == true && emailOk == true){
        alert('preenchido corretamente, enviado!!')
    }else{
        alert('preencha o campo corretamente!')
    }
}


//Cadastro

function validarNome(){
    let txtNome = document.querySelector('#txtNome')
    if (nome.value.length < 2){
        txtNome.innerHTML = 'Nome inválido!'
        txtNome.style.color = "red"
        nomeOk = false
    } else {
        txtNome.innerHTML = 'Nome válido!'
        txtNome.style.color = "green"
        nomeOk = true
    }
}

function validarUsuarioCadastro() {
    let txtUsuarioCadastro = document.querySelector('#txtUsuarioCadastro')
    if (usuarioCadastro.value.indexOf('@') > 0 && usuarioCadastro.value.indexOf('.') > 0) {
        txtUsuarioCadastro.innerHTML = 'E-mail válido!'
        txtUsuarioCadastro.style.color = "green"
        usuarioCadastroOk = true
    } else{
        txtUsuarioCadastro.innerHTML = 'E-mail inválido!'
        txtUsuarioCadastro.style.color = "red"
        usuarioCadastroOk = false
    }
}

function validarSenhaCadastro() {
    let txtSenhaCadastro = document.querySelector('#txtSenhaCadastro')
    if(senhaCadastro.value.length < 8){
        txtSenhaCadastro.innerHTML = 'A senha precisa ter no mínimo 8 caracteres!'
        txtSenhaCadastro.style.color = 'red'
        senhaCadastroOk = false
    } else {
        txtSenhaCadastro.innerHTML = 'Senha válida!'
        txtSenhaCadastro.style.color = 'green'
        senhaCadastroOk = true
    }
}

function Cadastrar() {
    if(nomeOk == true && usuarioCadastroOk == true && senhaCadastroOk == true) {
        alert('Cadastro sucedido!')
    } else {
        alert('Verifique seus dados e tente novamente.')
    }
}

//fim cadastro

//login

function validarUsuario() {
    let txtUsuario = document.querySelector('#txtUsuario')
    if (usuario.value.indexOf('@') > 0 && usuario.value.indexOf('.') > 0) {
        txtUsuario.innerHTML = 'E-mail válido!'
        txtUsuario.style.color = "green"
        usuarioOk = true
    } else{
        txtUsuario.innerHTML = 'E-mail inválido!'
        txtUsuario.style.color = "black"
        usuarioOk = false
    }
}

function validarSenha() {
    let txtSenha = document.querySelector('#txtSenha')
    if(senha.value.length < 8){
        txtSenha.innerHTML = 'A senha precisa ter no mínimo 8 caracteres!'
        txtSenha.style.color = 'black'
        senhaOk = false
    } else {
        txtSenha.innerHTML = 'Senha válida!'
        txtSenha.style.color = 'green'
        senhaOk = true
    }
}

function Entrar() {
    if(usuarioOk == true && senhaOk == true) {
        alert('Login sucedido!')
    } else {
        alert('Verifique seus dados e tente novamente.')
    }
}