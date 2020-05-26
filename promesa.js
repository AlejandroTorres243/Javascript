var promesa = new Promise((resolve, reject)=>{
    setTimeout( () =>{
        var mensaje = "Esta es una promesa"
        cont = false

        if(cont = true)
            //resolve(mensaje)
            cont = false
        
        if(cont = false)
            reject("WARNIG!!!!")

    }, 3000)
})

promesa.then(resultado => {
    document.getElementById("caja").innerHTML += `Mensaje exitoso`
})
.catch(error => {
    document.getElementById("caja").innerHTML += `Mensaje fallido`
});