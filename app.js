const h1 = document.querySelector(".hello h1")

/* css 이용해서 바꾸기 (권장) */
function handleTitleClick() {
    h1.classList.toggle("clicked")
    // const clickedClass = "clicked"

    // if (h1.classList.contains(clickedClass)) {
    //     h1.classList.remove(clickedClass)
    // } else {
    //     h1.classList.add(clickedClass)
    // }
}

h1.addEventListener("click", handleTitleClick)

/* javascript 이용해서 바꾸기 */
function handleMouseEnter() {
    h1.innerText = "Mouse in"
}

function handleMouseLeave() {
    h1.innerText = "Mouse out"
}

h1.addEventListener("mouseenter", handleMouseEnter)
h1.onmouseleave = handleMouseLeave

function handleWindowResize() {
    document.body.style.backgroundColor = "tomato"
}

function handleWindowCopy() {
    alert("copier!!!")
}

function handleWindowOffline() {
    alert("no WIFI")
}

function handleWindowOnline() {
    alert("good")
}

window.addEventListener("resize", handleWindowResize)
window.addEventListener("copy", handleWindowCopy)
window.addEventListener("offline", handleWindowOffline)
window.addEventListener("online", handleWindowOnline)