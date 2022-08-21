// video 1

// funcoes

// DECLARAR FUNCAO
// 1-> declarar a funçao

//string
// function imprimeTexto(texto) {
//   console.log(texto);
// }

// // 2-> execulta a funçao 1 ou +vez

// // imprimeTexto("oi");
//             // Ele passa ser 2 da outra function
// imprimeTexto(soma());
// imprimeTexto("muito boa essa opcao");

// //exemplo

// function soma() {
//     // Antes do retorno podemos ter demais codigos e outro console.log tambem
//     // O RETURN É A ULTIMO CODIGO DENTRO DOS { }, apos o return ele sai da funçao e continua o codigo
//     return 2 + 2;
// }

// console.log(soma());

// 3 formas de escrever funcao

// video 2

// parametros de funcao

//antes da ,  // depois da , no log()
// function soma(num1, num2) {
//   return num1 + num2;
// }

// console.log(soma(2, 2));
// console.log(soma(267, 32));
// console.log(soma(-400, 2));

// parametros x argumentos

// ordem dos parametros

// function nomeIdade(nome, idade) {
//   return `meu nome é ${nome} e minha idade é ${idade}`;
// }

// // console.log(nomeIdade(22, "Joao")); // Se os dados forem preencidos de maneira errada, irao retorna de maneira errada

// function multiplica(num1, num2) {
//   return num1 * num2;
// }

// // 9               //6
// console.log(multiplica(soma(4, 5), soma(3, 3)));

// video 3

// declaracao de funcao

// function minhaFuncao(param) {
//   // bloco de codigo
// }

// minhaFuncao("param");

// expressao de funcao

// const soma = function (num1, num2) {
//   return num1 + num2;
// };

// console.log(soma(1, 1));

// // principal diferenca entre elas??? : HOISTING
// // funcoes e var sao "listadas" no topo do arquivo
// console.log(apresentar())

// function apresentar(){
//     return "Ola";
// }

// const soma = function (num1, num2) {
//     return num1 + num2;
//   };

//   console.log(soma(1,1))

// video 4
//Arrow function

const apresentarArrow = (nome) => `meu nome é ${nome}`;
const soma = (num1, num2) => num1 + num2;

// Arrow function com + de 1 linha de instrucao -> operador maior ou igual a que >=

const somaNumerosPequenos = (num1, num2) => {
  if (num1 > 10 || num2 > 10) {
    return " somente numeros de 1 a 9";
  } else {
    return num1 + num2;
  }
};


// Arrow function é para declarao rapida e objetos
// 