function inverterString(str) {
    let stringInvertida = "";

    for (let i = str.length - 1; i >= 0; i--) {
      stringInvertida += str[i];
    }

    return stringInvertida;
  }
  
  // Exemplo de uso com string:
  let minhaString = "Olá, mundo!";
  let stringInvertida = inverterString(minhaString);
  console.log("String original: " + minhaString);
  console.log("String invertida: " + stringInvertida);
  
  // Exemplo de uso com entrada do usuário (usando prompt):
  let entrada = prompt("Digite uma string para inverter:");
  
  if (entrada !== null) { // Verifica se o usuário não cancelou o prompt
    let stringInvertida2 = inverterString(entrada);
    console.log("String original: " + entrada);
    console.log("String invertida: " + stringInvertida2);
  } else {
    console.log("Nenhuma string foi fornecida.");
  }