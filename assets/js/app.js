const canvas = document.querySelector("canvas")
const ctx = canvas.getContext("2d")
let isDrawing = false
let rubber = false
let positionX = 0
let positionY = 0
document.querySelector(".rubber").onclick = function () {
    this.classList.toggle("active")
    if (rubber) {
        rubber = false
    } else {
        rubber = true
        this.style
    }
}
window.onmouseup = () => isDrawing = false
canvas.onmousemove = (event) => {
    if (isDrawing) {
        draw({
            event: event,
            size: Number(document.querySelector("#size").value),
            color: document.querySelector("#color").value
        })
    }
}
canvas.onmousedown = (event) => {
    isDrawing = true
    positionX = event.pageX - canvas.offsetLeft
    positionY = event.pageY - canvas.offsetTop
}
document.querySelector(".clear").onclick = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
}
function draw(e) {
    const moveX = e.event.pageX - canvas.offsetLeft
    const moveY = e.event.pageY - canvas.offsetTop
    if (rubber) {
        ctx.beginPath()
        ctx.clearRect(moveX - (e.size / 2), moveY - (e.size / 2), e.size, e.size)
    } else {
        ctx.beginPath()
        ctx.moveTo(positionX, positionY)
        ctx.lineTo(moveX, moveY)
        ctx.closePath()
        ctx.lineJoin = "round"
        ctx.lineWidth = e.size || 1
        ctx.strokeStyle = e.color
        ctx.stroke()
        positionX = moveX
        positionY = moveY
    }
}
