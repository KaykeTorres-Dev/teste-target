function verificarFibonacci(numero) {
    let a = 0;
    let b = 1;
    let fibonacci = [a, b];
  
    while (b < numero) {
      let temp = b;
      b = a + b;
      a = temp;
      fibonacci.push(b);
    }
  
    if (fibonacci.includes(numero)) {
      return `O número ${numero} pertence à sequência de Fibonacci: ${fibonacci.join(', ')}`;
    } else {
      return `O número ${numero} não pertence à sequência de Fibonacci.`;
    }
  }
