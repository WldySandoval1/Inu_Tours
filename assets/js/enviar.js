function pccEnviado(){
    document.getElementById("envio").innerHTML = `<i class="fa-regular fa-paper-plane fa-bounce plane" style="color: #00e900;"></i>
    <p class="menSent">Your message was successfully sent</p>`;
    mostrarResultado();
}
function mostrarResultado() {
    document.getElementById("envio").style.display = 'block';
    document.getElementById("contacto").style.display = 'none';
}
