'use strict'

function renderGallery() {
    const imgs = getImgs()
    const elGallery = document.querySelector('.gallery-container')
    const strHTML = imgs.map(img => `
    <img src="${img.url}" onclick="onSelectImg(this.className)" alt="${img.keywords}" class="${img.id}">`)
    elGallery.innerHTML += strHTML.join('')
}


function onDisplayEditor() {
    const elEditor = document.querySelector('.main-content')
    elEditor.classList.remove('hidden')
    elEditor.classList.add('editor-grid')
}

function onHideEditor() {
    const elEditor = document.querySelector('.main-content')
    elEditor.classList.remove('editor-grid')
    elEditor.classList.add('hidden')
}

function onDisplayAbout() {
    const elAbout = document.querySelector('.about-container')
    elAbout.classList.remove('hidden')
    onHideGallery()
    onHideEditor()
}

function onHideAbout() {
    const elAbout = document.querySelector('.about-container')
    elAbout.classList.add('hidden')
}

function onDisplayGallery() {
    const elGallery = document.querySelector('.gallery-container')
    elGallery.classList.remove('hidden')
    elGallery.classList.add('gallery-grid')
    onHideAbout()
    onHideEditor()
}

function onHideGallery() {
    const elGallery = document.querySelector('.gallery-container')
    elGallery.classList.remove('gallery-grid')
    elGallery.classList.add('hidden')
}
