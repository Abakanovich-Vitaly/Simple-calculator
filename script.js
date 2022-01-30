const display = document.querySelector('.display')
const buttons = Array.from(document.querySelectorAll('.button'))

buttons.map((button) => {
  button.addEventListener('click', (e) => {
    switch (e.target.innerText) {
      case 'C':
        display.innerHTML = ''
        break
      case '=':
        try {
          display.innerHTML = eval(display.innerText)
        } catch {
          display.innerHTML = 'Error'
        }
        break
      case '←':
        if (display.innerHTML) {
          display.innerHTML = display.innerHTML.slice(0, -1)
        }
        break
      default:
        display.innerHTML += e.target.innerHTML
    }
  })
})
