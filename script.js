const links = document.querySelector(".links")
const burger = document.querySelector(".burger")

burger.onclick = () => {
    links.classList.toggle('open')
}