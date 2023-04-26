function inverterString(texto){
    let letras = texto.split("");
    letras.reverse();
    let textoInvertido = "";
    for(let letra of letras){
        textoInvertido += letra;
    }
    console.log(textoInvertido);
}
inverterString("Cubos Academy")