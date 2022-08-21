// Aula 1 Type Number

// tipo Number inteiro

const meuNumero = 3;

const primeiroNumero = 1;
const segundoNumero = 2;

const operacaoMatematica = primeiroNumero + segundoNumero;

console.log(operacaoMatematica)

// ponto flutuante ou float em c

const numeroPontoFlutuante = 3.3;
const pontoFlutuanteSemZero = .5;

const novaOperacao = primeiroNumero / numeroPontoFlutuante;

console.log(novaOperacao)

// NaN -> Not a Number 

const alura = "Alura";
console.log(alura * primeiroNumero)

// Aula 2 Type String

const texto1 = "Olá";
const texto2 = 'mundo';
const senha1 = "senha123 ou seila";
const StringDeNumeros = "234 67";

const citacao = 'O joao disse "alooo"';
console.log(citacao)

// concatenaçao (+)

const inicio = "meu nome é ";
const nome = "João";
console.log(inicio + nome)

// // teste codificação

// const cifrao = '\u0024'
// const aMaiusculo = '\u0041'
// const tique = '\u2705'
// const hiragana = '\u3041'

// // console.log(cifrao)
// // console.log(aMaiusculo)
// // console.log(tique)
// // console.log(hiragana)

// //treinando string

// //ele nao reconhece cidade e input como a mesma coisa

// const cidade = "belo horizonte";
// const input = "Belo Horizonte";

// console.log(cidade === input); // false

// //aqui reconhece devido a toLowerCase() que converte a minusculo
// const cidade = "belo horizonte";
// const input = "Belo Horizonte";

// const inputMinusculo = input.toLowerCase();

// console.log(cidade === inputMinusculo); // true

// // contagem de string codigo ->

// const senha = "minhaSenha123"
// console.log(senha.length) // 13 caracteres

//templete string OU templete literal *pesquisa


// Aula 3 type boolean
// vai retorna true or false

const primeroPrimeiroNumero = 5;
const segundoSegundoNumero = 5;

// comparanto os numeros ou strings
console.log(primeroPrimeiroNumero===segundoSegundoNumero)