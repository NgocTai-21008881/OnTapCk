const bookBtns = document.querySelectorAll('.js-btn-book')
const modal = document.querySelector('.js_modal')
const modalClose= document.querySelector('.js-modal-close')
const modalClosebtn = document.querySelector('.js_closebtn')
function showBookTickets() {
    modal.classList.add('open')
}

function hideBookTickets() {
    modal.classList.remove('open')
}

for (const bookBtn of bookBtns) {
    bookBtn.addEventListener('click',showBookTickets)
}

modalClose.addEventListener('click',hideBookTickets)
modalClosebtn.addEventListener('click',hideBookTickets)

