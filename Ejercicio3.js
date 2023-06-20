function countNameRepetitions(names) {
    let conteo ={};
    for (const d of names) {
        if (conteo [d]){
            conteo [d] += "*";
        } else {
        conteo [d] = "*";
    }
}
return conteo;
}
let nombres =["Marlen","Diego","Sara","Camila","Marlen","Camila","Marlen","Marlen","Sara","Sara",]
console.log(countNameRepetitions(nombres));
