const controles = document.querySelector('#controles')
const cssText = document.querySelector('.css')
const btn = document.querySelector('.btn')

controles.addEventListener('change', handleChange)

const handleStyle = {
    element: btn,
    texto(value) {
        this.element.innerText = value
    },
    backgroundColor(value) {
        this.element.style.backgroundColor = value
    },
    height(value) {
        this.element.style.height = value + 'px'
    },
    color(value) {
        this.element.style.color = value
    }

}



function handleChange(event) {
    const name = event.target.name
    const value = event.target.value

    handleStyle[name](value)
    console.log(name)
}

