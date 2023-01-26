let enviar = document.querySelector("#enviar2")
let chat = document.querySelector("#chat")
let mensaje = document.querySelector("#mensaje2")
let mensaje2 = document.querySelector("#mensaje")
let borrar = document.querySelector("#borrar2")
let theme = document.querySelector("#theme")
let footer = document.querySelector("#card-footer")
let camara  = document.querySelector("#camara2")
let carta = document.querySelector("#card")
let header = document.querySelector("#card-header")
let llamar = document.querySelector("#llamada2")
let nombre = document.querySelector("#user_info")



enviar.addEventListener("click",()=> {
    chat.innerHTML+=`<div class="d-flex justify-content-end mb-4">
    <div class="msg_cotainer_send">
        ${mensaje.value}
        <span class="msg_time_send">8:55 AM, Today</span>
    </div>
    <div class="img_cont_msg">
        <img src="https://avatars.hsoubcdn.com/ed57f9e6329993084a436b89498b6088?s=256"
            class="rounded-circle user_img_msg">
    </div>
</div>`;
mensaje2.reset()
})
borrar.addEventListener("click",()=> {
    chat.innerHTML = "";
})
theme.onclick = function(){
	borrar.classList.toggle('active');
	footer.classList.toggle('active');
	mensaje.classList.toggle('active');
	camara.classList.toggle('active');
	enviar.classList.toggle('active');
	carta.classList.toggle('active');
	header.classList.toggle('active');
	llamar.classList.toggle('active');
	nombre.classList.toggle('active');
}
