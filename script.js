// [Snack 1]
// Crea 10 oggetti che rappresentano una zucchina, indicandone per ognuno varietà,
// peso e lunghezza. Calcola quanto pesano tutte le zucchine.

// Crea 10 oggetti che rappresentano una zucchina


var zucchina1 = {
    varietà: "Zucchino nero di Milano",
    peso: 43,
    lunghezza: 25
}
var zucchina2 = {
    varietà: "Zucchino ortolano di Faenza",
    peso: 45,
    lunghezza: 22
}
var zucchina3 = {
    varietà: "Zucchina lunga fiorentina",
    peso: 21,
    lunghezza: 33
}
var zucchina4 = {
    varietà: "Zucchina striata di Napoli",
    peso: 58,
    lunghezza: 15
}
var zucchina5 = {
    varietà: "Zucchina striata di Napoli",
    peso: 54,
    lunghezza: 5
}
var zucchina6 = {
    varietà: "Zucchina rigata pugliese",
    peso: 87,
    lunghezza: 7
}
var zucchina7 = {
    varietà: "Zucchina rigata pugliese",
    peso: 33,
    lunghezza: 12
}
var zucchina8 = {
    varietà: "Zucchino nero di Milano",
    peso: 55,
    lunghezza: 14
}
var zucchina9 = {
    varietà: "Zucchino nero di Milano",
    peso: 58,
    lunghezza: 13
}
var zucchina10 = {
    varietà: "Zucchino nero di Milano",
    peso: 69,
    lunghezza: 20
}

var leMieZucchine = [zucchina1, zucchina2, zucchina3, zucchina4, zucchina5, zucchina6, zucchina7, zucchina8, zucchina9, zucchina10];
var sommaPeso = 0;
console.log(leMieZucchine);


for (var i = 0; i < leMieZucchine.length; i++) {
    var zucchinaDellArray = leMieZucchine[i];
    sommaPeso += zucchinaDellArray.peso
}

console.log(sommaPeso)

