// video 2

//ternario -> If & Else

const idadeMinima = 18;
const idadeCliente = 16;

// if (idadeCliente >= idadeMinima) {
//   console.log("Opcao de destilado");
// } else {
//   console.log("Nao tem idade pra isso menino");
// }

//condicao                      //true     //false
console.log(idadeCliente >= idadeMinima ? "cerveja" : "Prats"); // tenario, usar com pouca informacao

// video 3

//Templete strings

const nome = "Joao";
const idade = 2022 - 1999;
const cidadeNacimento = "Tb";

// const apresentacao = "meu nome é "+ nome + " Minha idade " + idade + " e minha cidade de nacimento é " + cidadeNacimento;

const apresentacao = `meu nome é ${nome}, minha idade é ${idade} e nasci em ${cidadeNacimento}`;
console.log(apresentacao);
