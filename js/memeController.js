'use strict'

let gElCanvas
let gCtx
let gSelectedImg
let gText = ''
let gPos = {
    offsetX: 220,
    offsetY: 30
}

function init() {
    gElCanvas = document.querySelector('.canvas')
    gCtx = gElCanvas.getContext('2d')
    console.log('gCtx', gCtx)
    // addListeners()
    renderMeme()
}

function renderMeme() {
    const meme = getMeme()
    if(gSelectedImg) {
        onSelectImg(gSelectedImg)
        drawText(gText , gPos.offsetX, gPos.offsetY)
    }
}

function drawText(text, offsetX, offsetY) {
    gCtx.lineWidth = 2
    gCtx.strokeStyle = 'white'
    gCtx.fillStyle = 'black'
    gCtx.font = '25px Arial'
    gCtx.textAlign = 'center'
    gCtx.textBaseline = 'middle'

    gCtx.fillText(text, offsetX, offsetY)
    gCtx.strokeText(text, offsetX, offsetY)
}

function onTxtLine(txt) {
    gText = txt
    // txtLine(txt)
    renderMeme()
}


function resizeCanvas() {
    const elContainer = document.querySelector('.canvas-container')
    gElCanvas.width = elContainer.offsetWidth
    gElCanvas.height = elContainer.offsetHeight
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
}

function setStrokeColor(strokeColor) {
}


function drawRect(x, y) {
    gCtx.strokeStyle = gCurrShape.strokeColor
    gCtx.strokeRect(x, y, gCurrShape.dX, gCurrShape.dY)
    gCtx.fillStyle = gCurrShape.fillColor
    gCtx.fillRect(x, y, gCurrShape.dX, gCurrShape.dY)
}

function clearCanvas() {
    gCtx.clearRect(0, 0, gElCanvas.width, gElCanvas.height)
}