

export function semaforo(cor){
    cor = cor.toLowerCase();
    let msg = "";
    if(cor === "verde"){
        msg = "Espere!";
    }
    else if(cor === "amarelo"){
        msg = "Espere!";
    }
    else if(cor === "vermelho"){
        msg = "Pode Passar!";
    }
    else{
        msg = "Inválido!";
    }
    return msg;
}

export function diaSemana(dia){
    let msg = "";
    if(dia === "0"){
        msg = "Domingo";
    }
    else if(dia === "1"){
        msg = "Segunda";
    }
    else if(dia === "2"){
        msg = "Terça";
    }
    else if(dia === "3"){
        msg = "Quarta";
    }
    else if(dia === "4"){
        msg = "Quinta";
    }
    else if(dia === "5"){
        msg = "Sexta";
    }
    else if(dia === "6"){
        msg = "Sabádo";
    }
    else{
        msg = "Inválido"
    }
    return msg;
}

export function fatorial(n){
  var resultado = 1;

  for(var count=1 ; count<=n ; count++)
    resultado *= count;

  return resultado;

}

export function fatorial2(n) {
    if (n > 1) {
        return n * fatorial2(n - 1)
    }
    else if(0) {
        n = 1;
        return n
    }
    return n
}

export function sequenciaPar(arr){
    arr.forEach((number) =>  {
        number * 2;
    });
    return arr;
}
