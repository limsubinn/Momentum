const title = document.querySelector(".hello h1")

title.innerText = "Got you!"

function handleTitleClick() {
    title.style.color = "blue"
}

title.addEventListener("click", handleTitleClick)

