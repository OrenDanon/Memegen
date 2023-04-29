'use strict'

let gElCanvas
let gCtx
let gCanvasWidth = 450
let gCanvasHeight = 450


function init() {
    gElCanvas = document.querySelector('.canvas')
    gCtx = gElCanvas.getContext('2d')
    console.log('gCtx', gCtx)
    renderMeme()
    renderGallery()
}

function onSelectImg(elImgId) {
    setgMemeImg(elImgId)
    onDisplayEditor()
    onHideGallery()
    renderMeme()
}

function renderMeme() {
    gElCanvas = document.querySelector('.canvas')
    gCtx = gElCanvas.getContext('2d')
    const meme = getMeme()
    const elImg = new Image()
    elImg.src = `memes/${meme.selectedImgId}.jpg`
    elImg.onload = () => {
        gCtx.drawImage(elImg, 0, 0, gElCanvas.width, gElCanvas.height)
        meme.lines.forEach(line => {
        gCtx.font = line.size + `px ` + line.fontFamily
        gCtx.textAlign = line.align
        gCtx.strokeStyle = line.strokeColor
        gCtx.fillStyle = line.fillColor
        let memeTxt = ''
        if (line.txt) {
            memeTxt = line.txt;
        }
        gCtx.fillText(memeTxt, line.offsetX, line.offsetY)
        gCtx.strokeText(memeTxt, line.offsetX, line.offsetY)
    })
    }
}


function onAddLine() {
    addLine()
    renderMeme()
}


function onNextLine(idx) {
    nextLine(idx)
    renderMeme()
}


function onDeleteLine() {
    deleteLine()
    renderMeme()
}


function onAllignLeft(value) {
    allignLeft(value)
    renderMeme()
}

function onAllignCenter(value) {
    allignCenter(value)
    renderMeme()
}

function onAllignRight(value) {
    allignRight(value)
    renderMeme()
}

function onSetFillColor(fillColor) {
    setFillColor(fillColor)
    renderMeme()
}

function onSetStrokeColor(strokeColor) {
    setStrokeColor(strokeColor)
    renderMeme()
}


function onSetFontFamily(fontFamily) {
    setFontFamily(fontFamily)
    renderMeme()
}

function onTxtSizeIncrease() {
    txtSizeIncrease()
    renderMeme()
}

function onTxtSizeDecrease() {
    txtSizeDecrease()
    renderMeme()
}

function onTxtLine(txt) {
    txtLine(txt)
    renderMeme()
}