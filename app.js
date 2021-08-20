let screen = document.getElementById("screen")
let buttons = document.getElementsByTagName("button")
for (button of buttons) {
    // console.log(button.innerHTML)
    button.addEventListener("click", (e) => {
        Buttontext = e.target.innerHTML
        if (Buttontext == "C") {
            screen.value = ""
        }
        else if (Buttontext == "←") {
            screen.value = screen.value.slice(0, -1)
        }
        else if (Buttontext == "√") {
            screen.value = Math.sqrt(screen.value)
        }
        else if (Buttontext == "=") {
            if (screen.value) {
                screen.value = eval(screen.value)
            }
        }
        else {
            screen.value += Buttontext
        }
    })
}