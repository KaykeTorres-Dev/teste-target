const faturamentoMensal = {
    "SP": 67836.43,
    "RJ": 36678.66,
    "MG": 29229.88,
    "ES": 27165.48,
    "Outros": 19849.53
  };
  
  function calcularPercentuais(faturamento) {
    let total = 0;

    for (const estado in faturamento) {
      total += faturamento[estado];
    }
  
    const percentuais = {};
    
    for (const estado in faturamento) {
      const percentual = (faturamento[estado] / total) * 100;
      percentuais[estado] = percentual.toFixed(2); // Arredonda para 2 casas decimais
    }
  
    return percentuais;
  }
  
  const percentuaisEstados = calcularPercentuais(faturamentoMensal);
  
  for (const estado in percentuaisEstados) {
    console.log(`${estado}: ${percentuaisEstados[estado]}%`);
  }