const text = document.querySelector(".sec-text")
const Load = () => {
    setTimeout(() => {
        text.textContent = "Larapong Developer"
    }, 0)
    setTimeout(() => {
        text.textContent = "P5.Js Developer"
    }, 4000)
    setTimeout(() => {
        text.textContent = "Html Coder"
    }, 8000) 
}

Load()
setInterval(Load, 12000)