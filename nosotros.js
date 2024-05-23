const formulario = document.getElementById("formulario")
formulario.addEventListener("submit",function(){
const nombre =document.getElementById("nombre").value
const email =document.getElementById("email").value
const telefono =document.getElementById("telefono").value
const mensaje =document.getElementById("mensaje").value

console.log("el nombre es "+nombre)
console.log("el email es "+email)
console.log("el telefono es "+telefono)
console.log("el mensaje es "+mensaje)
alert("Sus datos se guardaron correctamente")
}
)
