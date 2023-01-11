const loginForm = document.querySelector("#login-form")
// const loginForm = document.getElementById("login-form")
const loginInput = document.querySelector("#login-form input")
// const loginInput = loginForm.querySelector("input")
const greeting = document.querySelector("#greeting")

const HIDDEN_CLASSNAME = "hidden"
const USERNAME_KEY = "username"

function onLoginSubmit(event) {
    event.preventDefault() // 브라우저의 기본 동작을 막아준다. (submit -> 브라우저 새로고침)

    const username = loginInput.value
    
    localStorage.setItem(USERNAME_KEY, username)
    loginForm.classList.add(HIDDEN_CLASSNAME)
    paintGreetings(username)
}

function paintGreetings(username) {
    greeting.innerText = `Hello ${username}` 
    greeting.classList.remove(HIDDEN_CLASSNAME)
}

const savedUsername = localStorage.getItem(USERNAME_KEY)

if (savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME)
    loginForm.addEventListener("submit", onLoginSubmit)
} else {
    paintGreetings(savedUsername)
}