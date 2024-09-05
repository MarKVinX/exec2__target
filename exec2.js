function fibonacci(n) {
    let a = 0;
    let b = 1;
    let temp;

    // Verifica os dois primeiros números da sequência
    if (n === 0 || n === 1) {
        return true;
    }

    // Gera a sequência até o valor ser maior ou igual ao número informado
    while (b <= n) {
        if (b === n) {
            return true; // Se o número faz parte da sequência
        }
        temp = a + b;
        a = b;
        b = temp;
    }

    return false; // Se o número não faz parte da sequência
}

// Número que será verificado
let num = 21; // Pode ser alterado ou recebido de entrada

// Chama a função e exibe o resultado
if (fibonacci(num)) {
    console.log(`${num} pertence à sequência de Fibonacci.`);
} else {
    console.log(`${num} não pertence à sequência de Fibonacci.`);
}