const canvas = document.getElementById('jsCanvas')
const ctx = canvas.getContext('2d')
const colors = document.getElementsByClassName('jsColor')
const range = document.getElementById('jsRange')
const mode = document.getElementById('jsMode')
const saveBtn = document.getElementById('jsSave')

const INITIAL_COLOR = '#2c2c2c'
const CANVAS_SIZE = 700

canvas.width = CANVAS_SIZE
canvas.height = CANVAS_SIZE

ctx.fillStyle = 'white'
ctx.fillRect(0, 0, canvas.width, canvas.height)
ctx.strokeStyle = INITIAL_COLOR
ctx.fillStyle = INITIAL_COLOR
ctx.linWidth = 2.5

let painting = false
let filling = false

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

/*
event.target.style공부
https://developer.mozilla.org/ko/docs/Web/API/Event/target
*/

function handleColorclick(event) {
  const color = event.target.style.backgroundColor
  ctx.strokeStyle = color
  ctx.fillStyle = color
}

function handleRangeChange(event) {
  const size = event.target.value
  ctx.lineWidth = size
}

function handleModeClick(event) {
  if (filling === true) {
    filling = false
    mode.innerText = 'Fill'
  } else {
    filling = true
    mode.innerText = 'Paint'
  }
}

function handleSaveClick(event) {
  const image = canvas.toDataURL('image/jpeg')
  const link = document.createElement('a')
  link.href = image
  link.download = 'PaintJS[🎨].jpeg'
  link.click()
}

function handleCanvasClick() {
  if (filling) {
    ctx.fillRect(0, 0, canvas.width, canvas.height)
  }
}

function handleCM(event) {
  event.preventDefault()
}

if (canvas) {
  canvas.addEventListener('mousemove', onMouseMove)
  canvas.addEventListener('mousedown', startPainting)
  canvas.addEventListener('mouseup', stopPainting)
  canvas.addEventListener('mouseleave', stopPainting)
  canvas.addEventListener('click', handleCanvasClick)
  canvas.addEventListener('contextmenu', handleCM)
}

Array.from(colors).forEach((color) =>
  color.addEventListener('click', handleColorclick)
)

// 정의되지 않았을 경우 꼭 확인하는 if구문 사용
if (range) {
  range.addEventListener('input', handleRangeChange)
}

if (mode) {
  mode.addEventListener('click', handleModeClick)
}

if (saveBtn) {
  saveBtn.addEventListener('click', handleSaveClick)
}
