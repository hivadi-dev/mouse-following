const ball = document.getElementById('ball')

document.addEventListener('mousemove', (e) => {
    let x = e.clientX
    let y = e.clientY
    ball.style.left = x + 'px'
    ball.style.top = y + 'px'
})