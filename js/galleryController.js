'use strict'

function onSelectImg(elImg) {
    onDisplayEditor()
    onHideGallery()
    gSelectedImg = elImg
    clearCanvas()
    gCtx.drawImage(elImg, 0, 0, gElCanvas.width, gElCanvas.height)
    drawText(gText , gPos.offsetX, gPos.offsetY)
    // selectImg(elImg)
}


function onDisplayEditor() {
    const elEditor = document.querySelector('.main-content')
    elEditor.classList.remove('hidden')
    elEditor.classList.add('block')
    // editor-grid
}


function onHideGallery() {
    const elGallery = document.querySelector('.gallery-container')
    elGallery.classList.remove('gallery-grid')
    elGallery.classList.add('hidden')
    renderMeme()
}