const modalOverlay = document.querySelector('.modaloverlay');
const cards = document.querySelectorAll('.card');


for(let card of cards) {

  const imgId = card.getAttribute('id')
  

  card.addEventListener("click", function(){
    modalOverlay.classList.add('active') 
    modalOverlay = document.querySelector(".img-receita").src = `/assets/${imgId}.png`
    console.log('teste')
  })
}


const closeModal = document.querySelector('.close-modal')

closeModal.addEventListener("click", function (){
    modalOverlay.classList.remove('active') // remove classe active p/ fechar modal
    
})