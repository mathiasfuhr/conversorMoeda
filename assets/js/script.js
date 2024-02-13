function Converter() {
    let valorCotacao = parseFloat(document.getElementById("cotacao").value);
    let valorDolar = parseFloat(document.getElementById("valor").value);
  
    let valorEmReais = valorDolar * valorCotacao;
  
    const elementoValorConvertido = document.getElementById("valorConvertido");
    const valorConvertido = "O resultado em real é " + valorEmReais.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    elementoValorConvertido.innerHTML = valorConvertido;
  }
  