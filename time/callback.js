function receptor(callback,parametro){
    setTimeout(()=>{
        console.log('Dentro de la funcion receptor')
    },0); //se ejecuta de ultimo ya que tiene un tiempo 
    callback(parametro) //llama a callback
}

function funcionargumento(parametro){
    console.log(`${parametro} es un argumento`);
}

receptor(funcionargumento,'ximena');

