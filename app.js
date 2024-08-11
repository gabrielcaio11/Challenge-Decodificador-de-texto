
function pegarInput() {
    // Seleciona o campo de texto pelo ID
    var campoTexto = document.querySelector('.apresentacao__central__textarea__input').value;
    
    var textoTransformado = criptografar(campoTexto);
    document.getElementById('conteudo-lateral__resultado-texto').innerText = textoTransformado;
    var divResultado = document.querySelector('.conteudo-lateral__resultado');
    if (divResultado) {
        divResultado.remove();
    }
    campoTexto.value = '';
}

function pegarInputCriptografado() {
    var campoTexto = document.querySelector('.apresentacao__central__textarea__input').value;
    var textoTransformado = descriptografar(campoTexto);
    document.getElementById('conteudo-lateral__resultado-texto').innerText = textoTransformado;
    var divResultado = document.querySelector('.conteudo-lateral__resultado');
    if (divResultado) {
        divResultado.remove();
    }
    campoTexto.value = '';
}

function descriptografar(texto) {
    texto = texto.replace(/enter/g, "e");
    texto = texto.replace(/imes/g, "i");
    texto = texto.replace(/ai/g, "a");
    texto = texto.replace(/ober/g, "o");
    texto = texto.replace(/ufat/g, "u");
    return texto;
}

function criptografar(texto) {
    texto = texto.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");
    texto = texto.replace(/[^a-z ]/g, '');
    
    texto = texto.replace(/e/g, "enter");
    texto = texto.replace(/i/g, "imes");
    texto = texto.replace(/a/g, "ai");
    texto = texto.replace(/o/g, "ober");
    texto = texto.replace(/u/g, "ufat");
    return texto;
}
