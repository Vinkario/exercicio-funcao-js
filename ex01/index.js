// 1 CALCULE A MEDIA DE DIVERSAS NOTAS DIGITADAS PELO USUÁRIO

function media (nota1,nota2,nota3,nota4){
    const resultado = (nota1 + nota2 + nota3 +nota4) / 4;
    return resultado
}

console.log(`A média entre as notas digitadas é: ${media(10,8,5,7)}`);