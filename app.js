const canvas = document.getElementById('jsCanvas')
const ctx = canvas.getContext('2d')

ctx.strokeStyle = '##2c2c2c'
ctx.linWidth = 2.5

let painting = false

function stopPainting() {
  painting = false
}

function startPainting() {
  painting = true
}

function onMouseMove(event) {
  const x = event.offsetX
  const y = event.offsetY
  console.log(x, y)
}

if (canvas) {
  canvas.addEventListener('mousemove', onMouseMove)
  canvas.addEventListener('mousedown', startPainting)
  canvas.addEventListener('mouseup', stopPainting)
  canvas.addEventListener('mouseleave', stopPainting)
}
