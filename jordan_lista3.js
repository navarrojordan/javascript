Declarar uma variável qualquer, que receba um objeto vazio.

let oject = {};

Declarar uma variável pessoa, que receba suas informações pessoais. As propriedades e tipos de valores para cada propriedade desse objeto devem ser:

nome - String
sobrenome - String
sexo - String
idade - Number
altura - Number
peso - Number
andando - Boolean - recebe "falso" por padrão
caminhouQuantosMetros - Number - recebe "zero" por padrão
let pessoa = {
    nome: "Jordan",
    sobrenome: "Navarro",
    sexo: "Masculino",
    idade: 21,
    altura: 1.70,
    peso: 60,
    andando: false,
    caminhouQuantosMetros: 0
};
Adicione um método ao objeto pessoa chamado fazerAniversario. O método deve alterar o valor da propriedade idade dessa pessoa, somando 1 a cada vez que for chamado.

function pessoa(nome, sobrenome, sexo, idade, altura, peso, andando, caminhouQuantosMetros) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.sexo = sexo;
    this.idade = idade;
    this.altura = altura;
    this.peso = peso;
    this.andando = andando;
    this.caminhouQuantosMetros = caminhouQuantosMetros;
}

pessoa.prototype.fazerAniversario = function(){
    this.idade += 1;
    return `Sua nova idade é: ${this.idade}`;
}
Adicione um método ao objeto pessoa chamado andar, que terá as seguintes características:

Esse método deve receber por parâmetro um valor que representará a quantidade de metros caminhados;
Ele deve alterar o valor da propriedade caminhouQuantosMetros, somando ao valor dessa propriedade a quantidade passada por parâmetro;
Ele deverá modificar o valor da propriedade andando para o valor booleano que representa "verdadeiro";
pessoa.prototype.andar = function(metrosCaminhados){
    this.caminhouQuantosMetros += metrosCaminhados;
    this.andando = true;
    this.andando = (this.andando == true ? 'Verdadeiro' : 'Falso');
    return `Está caminhando? ${this.andando}`;
}
Adicione um método ao objeto pessoa chamado parar, que irá modificar o valor da propriedade andando para o valor booleano que representa "falso".

pessoa.prototype.parar = function(){
    this.andando = false;
    this.andando = (this.andando == true ? 'Verdadeiro' : 'Falso');
    return `Está caminhando? ${this.andando}`;
}
Crie um método chamado nomeCompleto, que retorne a frase:

"Olá! Meu nome é [NOME] [SOBRENOME]!"
pessoa.prototype.nomeCompleto = function(){
    return `Olá! Meu nome é ${this.nome}  ${this.sobrenome}!`;
}
Crie um método chamado mostrarIdade, que retorne a frase:

"Olá, eu tenho [IDADE] anos!"
pessoa.prototype.mostrarIdade = function(){
    return `Olá, eu tenho ${this.idade} anos!`;
}
Crie um método chamado mostrarPeso, que retorne a frase:

"Eu peso [PESO]Kg."
pessoa.prototype.mostrarPeso = function(){
    return `Eu peso ${this.peso}Kg.`;
}
Crie um método chamado mostrarAltura que retorne a frase:

"Minha altura é [ALTURA]m."
pessoa.prototype.mostrarAltura = function(){
    return `Minha altura é ${this.altura}m.`;
}
Agora vamos brincar um pouco com o objeto criado: Qual o nome completo da pessoa? (Use a instrução para responder e comentários inline ao lado da instrução para mostrar qual foi a resposta retornada)

p = new pessoa('Willian', 'Serafim', 'Masculino', 20, 1.75, 70, false, 0);
p.nomeCompleto();//"Olá! Meu nome é Willian  Serafim!"
Qual a idade da pessoa? (Use a instrução para responder e comentários inline ao lado da instrução para mostrar qual foi a resposta retornada)

p.mostrarIdade();//"Olá, eu tenho 20 anos!"
Qual o peso da pessoa? (Use a instrução para responder e comentários inline ao lado da instrução para mostrar qual foi a resposta retornada)

p.mostrarPeso();//"Eu peso 70Kg."
Qual a altura da pessoa? (Use a instrução para responder e comentários inline ao lado da instrução para mostrar qual foi a resposta retornada)

p.mostrarAltura();//"Minha altura é 1.75m."
Faça a pessoa fazer 3 aniversários.

p.fazerAniversario();//"Sua nova idade é: 21"
p.fazerAniversario();//"Sua nova idade é: 22"
p.fazerAniversario();//"Sua nova idade é: 23"
Quantos anos a pessoa tem agora? (Use a instrução para responder e comentários inline ao lado da instrução para mostrar qual foi a resposta retornada)

p.mostrarIdade();//"Olá, eu tenho 23 anos!"
Agora, faça a pessoa caminhar alguns metros, invocando o método andar 3x, com metragens diferentes passadas por parâmetro.

p.andar(100);
p.andar(200);
p.andar(300);
A pessoa ainda está andando? (Use a instrução para responder e comentários inline ao lado da instrução para mostrar qual foi a resposta retornada)

p.andar(300);//"Está caminhando? Verdadeiro"
Se a pessoa ainda está andando, faça-a parar.

p.parar();
E agora: a pessoa ainda está andando? (Use uma instrução para responder e comentários inline ao lado da instrução para mostrar a resposta retornada)

p.parar();//"Está caminhando? Falso"
Quantos metros a pessoa andou? (Use uma instrução para responder e comentários inline ao lado da instrução para mostrar a resposta retornada)

p.caminhouQuantosMetros;//600
Agora vamos deixar a brincadeira um pouco mais divertida! :D Crie um método para o objeto pessoa chamado apresentacao. Esse método deve retornar a string:

"Olá, eu sou o [NOME COMPLETO], tenho [IDADE] anos, [ALTURA], meu peso é [PESO] e, só hoje, eu já caminhei [CAMINHOU QUANTOS METROS] metros!"
Só que, antes de retornar a string, você vai fazer algumas validações:

Se o sexo de pessoa for "Feminino", a frase acima, no início da apresentação, onde diz "eu sou o", deve mostrar "a" no lugar do "o";
Se a idade for 1, a frase acima, na parte que fala da idade, vai mostrar a palavra "ano" ao invés de "anos", pois é singular;
Se a quantidade de metros caminhados for igual a 1, então a palavra que deve conter no retorno da frase acima é "metro" no lugar de "metros".
Para cada validação, você irá declarar uma variável localmente (dentro do método), que será concatenada com a frase de retorno, mostrando a resposta correta, de acordo com os dados inseridos no objeto.
pessoa.prototype.apresentacao = function(){

    let eu_sou;
    let ano;
    let metro;

    this.sexo == "Masculino" ? eu_sou = "eu sou o" :  eu_sou = "eu sou a";

    this.idade == 1 ? ano = "ano" : ano = "anos";

    this.caminhouQuantosMetros  == 1 ? metro = "metro" : metro = "metros";

    return `
        Olá, ${eu_sou} ${this.nome} ${this.sobrenome}, eu tenho ${this.idade} ${ano}
        ${this.altura}, meu peso é ${this.peso}kg e, só hoje, eu já caminhei ${this.caminhouQuantosMetros} ${metro}!
    `;
}

Agora, apresente-se ;)

p = new pessoa('Jordan', 'Navarro', 'Masculino', 21, 1.70, 60, false, 100);
p.apresentacao();
/*
"
    Olá, eu sou o Jordan , eu tenho 21 anos
    1.70, meu peso é 60kg e, só hoje, eu já caminhei 600 metros!
"
*/

p = new pessoa('Sthefani', 'Silveira', 'Feminino', 1, 1.50, 70, false, 1);
p.apresentacao();
/*
"
    Olá, eu sou a Sthefani Silveira, eu tenho 1 ano
    1.50, meu peso é 70kg e, só hoje, eu já caminhei 1 metro!
"
*/