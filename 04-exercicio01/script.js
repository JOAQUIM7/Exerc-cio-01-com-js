/* solicitar ao usuário que ele insira **dois números** e, a partir daí, calcular:

- [ ]  A soma dos dois números;
- [ ]  A subtração dos dois números;
- [ ]  A multiplicação dos dois números;
- [ ]  A divisão dos dois números;
- [ ]  O resto da divisão dos dois números;
- [ ]  Verifique se a soma dos dois números é par ~~(ou ímpar)~~;
- [ ]  Verifique se os dois números inseridos são iguais ~~(ou diferentes)~~.

Lembre-se de sempre mostrar na tela o resultado de cada uma dessas operações!
*/
let numb1 = prompt("Digite o primeiro número")
let numb2 = prompt("Digite o segundo número")
numb1 = Number(numb1)
numb2 = Number(numb2)
let sum = numb1 + numb2
let pairOdd = sum % 2
if(pairOdd == 0) {
    pairOdd = "par"
}else {
    pairOdd = "impar"
}

let equal 
switch (numb1 == numb2) {
    case true:
        equal = "iguais"        
        break;

    default:
        equal = "diferentes"
        break;
}

alert(`A soma dos dois números é ${sum}`)
alert(`A subtração dos dois números é ${numb1 - numb2}`)
alert(`A multiplicação dos dois números é ${numb1 * numb2}`)
alert(`A divisão dos dois números é ${(numb1 / numb2).toFixed(2)}`)
alert(`O resto da divisão dos dois números é ${(numb1 % numb2).toFixed(2)}`)
alert(`O número é ${pairOdd}`)
alert(`Os numeros ${numb1} e ${numb2} são ${equal}`)