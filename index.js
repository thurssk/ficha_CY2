// - variaveis em JavaScript

var serieFavorita = "Game of anatomy"
var serieInteressante = "The walking dead"
var serieMuitoBoa = "Strange Thrones"

// - valores de posicao automaticos no array
var series = ["Game of anatomy", "", "The walking dead",  "Strange Thrones"]

// - valores de posicao manual no array
var series = []; 
series[2] = "Game of anatomy"
series[0] = "The walking dead"
series[3] = "Strange Thrones"
// - ["The walking dead", "", "Game of anatomy", "Strange Thrones"]

// - acessar o valor do array pela posicao
var medalhaDePrata = series[2];
document.write(medalhaDePrata);

// - copia por valor
var series2 = series;

// - copia por valor
var series2 = series.splice();

// - lista é um array multidimensional
var lista = [];
lista["series"] = ["Game os anatomy", "The walking things", "Strange thrones"];
lista["filmes"] = [];
lista["filmes"][0] = "infinite league";
lista["filmes"][1] = "Justice War";

document.write(lista["series"][1]);
document.write(lista["filmes"][1]);
// condicional
var num = 10

if(num == 10){
    document.write("É igual")}
else{
    document.write("É diferente")
}

var hora = 12
if(hora < 12) {document.write("Bom dia!");}
else if(hora < 18) {document.write("Boa tarde!");}
else if(hora < 19 && hora < 7) {document.write("Boa noite!");}

var opcao = 1
var saldo = 300

switch(opcao){
    case 1:
        document.write("Seu saldo: " + saldo);
        break;
    case 2:
        document.write("adicionado" + saldo);
        break;
    default:
        document.write("deslogando!")
}