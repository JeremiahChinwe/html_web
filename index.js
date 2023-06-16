const menu = document.querySelector('.menu_items')
const closeMenu = document.querySelector(".times")
const menuBtn = document.querySelector('.menu-button').addEventListener('click', () => {
    menu.classList.toggle("showMenu")
    console.log("clicked")
})

closeMenu.addEventListener("click", () => {
    menu.classList.remove("showMenu")
})




