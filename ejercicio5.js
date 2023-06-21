function drawX(tamano){
    if(tamano % 2 === 0){
        console.log("escribe un numero impar");
        }else{
      for(let i = 0; i < tamano; i++){ 
    for(let j = 0; j <= tamano; j++){
        if(i === j || i+j === tamano -1){
            process.stdout.write("*");
        }else{
            process.stdout.write(" ");
        }
    }
    console.log("");
    }
}
}
drawX(8);