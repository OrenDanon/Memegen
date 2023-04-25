'use strict'

let gElCanvas
let gCtx
let gCurrShape = {
    shape: 'rect',
    fillColor: '#FFC0CB',
    strokeColor: '#00CED1',
    offsetX: 0,
    offsetY: 0,
    startPosX: 0,
    startPosY: 0,
    dX: 0,
    dY: 0,
    isDrag: false
}

const TOUCH_EVS = ['touchstart', 'touchmove', 'touchend']


function init() {
    gElCanvas = document.querySelector('.canvas')
    gCtx = gElCanvas.getContext('2d')
    console.log('gCtx', gCtx)
    resizeCanvas()
    addListeners()
}

function resizeCanvas() {
    const elContainer = document.querySelector('.canvas-container')
    gElCanvas.width = elContainer.offsetWidth
    gElCanvas.height = elContainer.offsetHeight
}

function onDown(ev) {
    gCurrShape.isDrag = true
    getEvPos(ev)
    gCurrShape.startPosX = gCurrShape.offsetX
    gCurrShape.startPosY = gCurrShape.offsetY
}

function onMove(ev) {
    if (!gCurrShape.isDrag) return
    const pos = getEvPos(ev)
    gCurrShape.dX = Math.abs(gCurrShape.offsetX - gCurrShape.startPosX) * 2
    gCurrShape.dY = Math.abs(gCurrShape.offsetY - gCurrShape.startPosY) * 2
    gCurrShape.startPosX = gCurrShape.offsetX
    gCurrShape.startPosY = gCurrShape.offsetY
    draw()
}

function onUp() {
    gCurrShape.isDrag = false
}

function getEvPos(ev) {
    gCurrShape.offsetX = ev.offsetX
    gCurrShape.offsetY = ev.offsetY
    if (TOUCH_EVS.includes(ev.type)) {
        ev.preventDefault()
        ev = ev.changedTouches[0]
        gCurrShape.offsetX = ev.pageX - ev.target.offsetLeft - ev.target.clientLeft
        gCurrShape.offsetX = ev.pageY - ev.target.offsetTop - ev.target.clientTop
    }
}

function addListeners() {
    addMouseListeners()
    addTouchListeners()
    window.addEventListener('resize', () => {
        init()
    })
}

function addMouseListeners() {
    gElCanvas.addEventListener('mousedown', onDown)
    gElCanvas.addEventListener('mousemove', onMove)
    gElCanvas.addEventListener('mouseup', onUp)
}

function addTouchListeners() {
    gElCanvas.addEventListener('touchstart', onDown)
    gElCanvas.addEventListener('touchmove', onMove)
    gElCanvas.addEventListener('touchend', onUp)
}



function setFillColor(fillColor) {
    gCurrShape.fillColor = fillColor
}

function setStrokeColor(strokeColor) {
    gCurrShape.strokeColor = strokeColor
}

function setShape(shape) {
    gCurrShape.shape = shape
}

function draw() {

    switch (gCurrShape.shape) {
        case 'triangle':
            drawTriangle(gCurrShape.offsetX, gCurrShape.offsetY)
            break
        case 'rect':
            drawRect(gCurrShape.offsetX, gCurrShape.offsetY)
            break
        case 'text':
            drawText('Hello', gCurrShape.offsetX, gCurrShape.offsetY)
            break
        case 'line':
            drawLine(gCurrShape.offsetX, gCurrShape.offsetY)
            break
        case 'arc':
            drawArc(gCurrShape.offsetX, gCurrShape.offsetY)
            break
            case 'pencil':
            drawPencil(gCurrShape.offsetX, gCurrShape.offsetY)
            break
    }
}

function drawLine(x, y, xEnd = gCurrShape.dX, yEnd = gCurrShape.dY) {
    gCtx.beginPath()
    gCtx.moveTo(x, y)
    gCtx.lineTo(xEnd, yEnd)
    gCtx.lineWidth = 3
    gCtx.strokeStyle = gCurrShape.strokeColor
    gCtx.stroke()
}

function drawTriangle(x, y) {
    gCtx.beginPath()
    gCtx.moveTo(x, y)
    gCtx.lineTo(200, gCurrShape.dY)
    gCtx.lineTo(gCurrShape.dX, 200)
    gCtx.closePath()
    gCtx.strokeStyle = gCurrShape.strokeColor
    gCtx.stroke()
    gCtx.fillStyle = gCurrShape.fillColor
    gCtx.fill()
}

function drawRect(x, y) {
    gCtx.strokeStyle = gCurrShape.strokeColor
    gCtx.strokeRect(x, y, gCurrShape.dX, gCurrShape.dY)
    gCtx.fillStyle = gCurrShape.fillColor
    gCtx.fillRect(x, y, gCurrShape.dX, gCurrShape.dY)
}

function drawArc(x, y) {
    gCtx.beginPath()
    gCtx.arc(x, y, gCurrShape.dX, gCurrShape.dY, 0, 2 * Math.PI)
    gCtx.strokeStyle = gCurrShape.strokeColor
    gCtx.stroke()
    gCtx.fillStyle = gCurrShape.fillColor
    gCtx.fill()
}

function drawText(text, x, y) {
    gCtx.lineWidth = 2
    gCtx.strokeStyle = gCurrShape.strokeColor
    gCtx.fillStyle = gCurrShape.fillColor
    gCtx.font = `${gCurrShape.dX + gCurrShape.dY}px Arial`
    gCtx.textAlign = 'center'
    gCtx.textBaseline = 'middle'

    gCtx.fillText(text, x, y)
    gCtx.strokeText(text, x, y)
}

function drawPencil(x, y) {
        gCtx.beginPath()
        gCtx.lineWidth = 5
        gCtx.arc(x, y, 5, 0, 2 * Math.PI)
        gCtx.fillStyle = gCurrShape.fillColor
        gCtx.fill()
}

function clearCanvas() {
    gCtx.clearRect(0, 0, gElCanvas.width, gElCanvas.height)
}