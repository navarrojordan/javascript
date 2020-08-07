Crie uma função que receba dois argumentos e retorne a soma dos mesmos.

function sum (a,b){
    return a+b;
}
Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando 5 ao resultado retornado da função.

let result = sum(1,2);
result += 5; 
Qual o valor atualizado dessa variável

8

Declare uma nova variável, sem valor.

var newResult;

Crie uma função que adicione um valor à variável criada acima, e retorne a string: O valor da variável agora é VALOR. Onde VALOR é o novo valor da variável.

function addValue(a) {
    newResult = a;

    return "O valor da variável agora " + newResult;
}
Invoque a função criada acima.

addValue(50);

Qual o retorno da função (Use comentários de bloco).

/*
   "O valor da variável agora 50"
*/
Crie uma função com as seguintes características:

A função deve receber 3 argumentos;
Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string: Preencha todos os valores corretamente!
O retorno da função deve ser a multiplicação dos 3 argumentos, somando 2 ao resultado da multiplicação.
function result(a,b,c){

    if (typeof (a && b && c) != 'undefined') {
        mult = (a * b) * c;

        return mult + 2;
    } else {
        return 'Preencha todos os valores corretamente!';
    }
}
Invoque a função criada acima, passando só dois números como argumento.

result(1,1);

Qual o resultado da invocação acima (Use comentários para mostrar o valor retornado).

 /*
"Preencha todos os valores corretamente!"
*/
Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.

result(2,2,2);

Qual o resultado da invocação acima (Use comentários para mostrar o valor retornado).

//10
Crie uma função com as seguintes características:

A função deve receber 3 argumentos.
Se somente um argumento for passado, retorne o valor do argumento.
Se dois argumentos forem passados, retorne a soma dos dois argumentos.
Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
Se nenhum argumento for passado, retorne o valor booleano false.
E ainda, se nenhuma das condições acima forem atendidas, retorne null.
function result(a,b,c){

    let vet = [];

    if (typeof a  != 'undefined') {
        vet[0] = a;
    } if (typeof b  != 'undefined') {
        vet[1] = b;
    } if (typeof c  != 'undefined') {
        vet[2] = c;
    }
    
    if (vet.length == 1){
        return vet[0];
    } else if (vet.length == 2) {
        return vet[0] + vet[1];
    } else if (vet.length == 3) {
        return (vet[0] + vet[1]) / vet[2]; 
    } else if (vet.length == 0) {
        return false;
    } else {
        return null;
    }
    return vet.length; 
}
Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) Coloque um comentário de linha ao lado da função com o resultado de cada invocação.

result(); //false

result(1); //1

result(1,1) //2

result(2,2,2) //2