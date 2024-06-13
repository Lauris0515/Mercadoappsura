
let url="http://localhost:8080/storeapi/v1/usuario"

let peticion={
    method:"GET",
    headers:{}   
 }

 fetch(url,peticion)
.then(function(respuesta){
    return respuesta.json()
})
.then(function(respuesta){
    console.log(respuesta)

    //recorriendo la respuesta para hacer render

    let fila=document.getElementById("fila")
    respuesta.forEach(function(usuario){
    let columna=document.createElement("div")
    columna.classList.add("col")
    let tarjeta=document.createElement("div")
    tarjeta.classList.add("card","shadow","h-100")
   

    let nombreUsuario=document.createElement("h5")
     nombreUsuario.classList.add("text-center")
     nombreUsuario.textContent=usuario.nombre

     let cedula=document.createElement("h5")
     cedula.classList.add("text-center")
     cedula.textContent=usuario.nombre

     let correo=document.createElement("h5")
     correo.classList.add("text-center")
     correo.textContent=usuario.nombre

    
    tarjeta.appendChild(nombreUsuario)
    columna.appendChild(tarjeta)
    fila.appendChild(columna)
    
    })
})
.catch(function(respuesta){
    console.log(respuesta)
})
      