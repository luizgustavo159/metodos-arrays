function inverterString(texto){
    let letras = texto.split("");
    letras.reverse();
    let textoInvertido = letras.join("");
    console.log(textoInvertido);
}
inverterString("Cubos Academy")