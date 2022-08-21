// == (comparacao implicita)

const numero = 5;
const texto = "5";

// console.log(numero == texto); // true

// === (comparacao explicita)
console.log(numero === texto); // false

// typeof
console.log(typeof numero);
console.log(typeof texto);

// == compara so o valor
//=== compara o valor e o tipo de dado -> usar como boas praticas e caso precise mudar as variaveis usar Number(), String(). Que seria a convercao explicita
