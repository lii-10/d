const darklass = document.getElementById('I')
const button = document.getElementById('B')

let light = 1;

function On(){
    if (light===0) {
        darklass.classList.add('dark')
        button.innerHTML = "&#x263E;"
        light++
    } else {
        darklass.classList.remove('dark')
        button.innerHTML = "&#x263C;"
        light--

    }
}