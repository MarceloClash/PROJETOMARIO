const botaotrailer = document.querySelector (".botaotrailer");
const botaofecharmodal = document.querySelector (".fechar modal");
const video = document.getElementById ("video");
const modal = document.querySelector (".modal");
const linkdovideo = video.scr;

function alternarModal(){
    modal.classList.toggle ("aberto");
    
}
botaotrailer.addEventListener("click", () => {
    alternarModal();
    video.setAttribute("src", linkDoVideo);
});
botaofecharmodal.addEventListener ("click", () => {
    alternarModal();
    video.setAttribute("src", "");
});











