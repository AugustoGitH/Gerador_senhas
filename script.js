let sliderElement = document.getElementById("slider")
let valor = document.getElementById("value")
let togle = document.getElementById("togle")
let DivSenha = document.querySelector(".senha")
let buttonGerar = document.getElementById("buttonGerar")

valor.innerHTML = sliderElement.value
slider.oninput = function(){
    valor.innerHTML = this.value
}

let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&*"
let novasenha = ""

buttonGerar.addEventListener("click", ()=>{
    let divsenha = document.querySelector(".senhaGerada")
    divsenha.style.visibility = "visible"
    divsenha.style.opacity = "1"
    generatePass()
})
function generatePass(){
    let pass = ""
    for( let i = 0, n = charset.length; i < sliderElement.value; i++){
        pass += charset.charAt(Math.floor(Math.random()*n))
    }
    DivSenha.innerHTML = pass
    novasenha = pass

}
DivSenha.addEventListener("click", ()=>{
    navigator.clipboard.writeText(novasenha)
    alert("COPIADO")
})






DivSenha.addEventListener("mouseover", ()=>{
    togle.style.visibility = "visible"
    togle.style.opacity = "1"
})


