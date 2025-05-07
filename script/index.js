function voltarTexto() {
    texto.style.opacity = 0;
    setTimeout(() => {
        txt.innerHTML = textoOriginal;
        tit.innerHTML = tituloOriginal
        texto.style.opacity = 1
    })
}

function mudarTexto() {
    texto.style.opacity = 0;
    texto.style.transform = 'translateY(-10px)';
    setTimeout(() => {
        texto.style.opacity = 1;
        texto.style.transform = 'translateY(0)';
    }, 300)
}

botao1.addEventListener('mouseover', function() {
    tit.innerHTML = titb1;
    txt.innerHTML = txtb1;
});
  
botao2.addEventListener('mouseover', function() {
    tit.innerHTML = titb2;
    txt.innerHTML = txtb2;
});
  
botao3.addEventListener('mouseover', function() {
    tit.innerHTML = titb3;
    txt.innerHTML = txtb3;
});