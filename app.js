const canvas = document.getElementById('jsCanvas')
const ctx = canvas.getContext('2d')

canvas.width = 700
canvas.height = 700

ctx.strokeStyle = '##2c2c2c'
ctx.linWidth = 2.5

let painting = false

function stopPainting() {
  painting = false
}

function startPainting() {
  painting = true
}

/* 
참조
https://developer.mozilla.org/ko/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes 
*/

function onMouseMove(event) {
  const x = event.offsetX
  const y = event.offsetY
  if (!painting) {
    console.log('creating path in', x, y)
    ctx.beginPath()
    ctx.moveTo(x, y)
  } else {
    console.log('creating line in', x, y)
    ctx.lineTo(x, y)
    ctx.stroke()
  }
}

if (canvas) {
  canvas.addEventListener('mousemove', onMouseMove)
  canvas.addEventListener('mousedown', startPainting)
  canvas.addEventListener('mouseup', stopPainting)
  canvas.addEventListener('mouseleave', stopPainting)
}
