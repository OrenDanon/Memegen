'use strict'

function renderGallery() {
    const imgs = getImgs()
    const elGallery = document.querySelector('.gallery-container')
    const strHTML = imgs.map(img => `
    <img src="${img.url}" onclick="onSelectImg(this.id)" alt="${img.keywords}" id="${img.id}">`)
    elGallery.innerHTML = strHTML.join('')
}


function onDisplayEditor() {
    const elEditor = document.querySelector('.main-content')
    elEditor.classList.remove('hidden')
    elEditor.classList.add('editor-grid')
}


function onHideGallery() {
    const elGallery = document.querySelector('.gallery-container')
    elGallery.classList.remove('gallery-grid')
    elGallery.classList.add('hidden')
}