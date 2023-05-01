'use strict'

var gKeywordSearchCountMap = { 'funny': 12, 'cat': 2, 'baby': 4, 'dog': 2, 'men': 11, 'president': 3, 'comics': 1 }

var gImgs = [
    { id: 1, url: 'memes/1.jpg', keywords: ['funny', 'president', 'men'] },
    { id: 2, url: 'memes/2.jpg', keywords: ['funny', 'dog'] },
    { id: 3, url: 'memes/3.jpg', keywords: ['funny', 'dog', 'baby'] },
    { id: 4, url: 'memes/4.jpg', keywords: ['funny', 'cat'] },
    { id: 5, url: 'memes/5.jpg', keywords: ['funny', 'baby'] },
    { id: 6, url: 'memes/6.jpg', keywords: ['funny', 'men'] },
    { id: 7, url: 'memes/7.jpg', keywords: ['funny', 'baby'] },
    { id: 8, url: 'memes/8.jpg', keywords: ['funny', 'men'] },
    { id: 9, url: 'memes/9.jpg', keywords: ['funny', 'baby'] },
    { id: 10, url: 'memes/10.jpg', keywords: ['funny', 'president', 'men'] },
    { id: 11, url: 'memes/11.jpg', keywords: ['funny', 'men'] },
    { id: 12, url: 'memes/12.jpg', keywords: ['funny', 'men'] },
    { id: 13, url: 'memes/13.jpg', keywords: ['funny', 'men'] },
    { id: 14, url: 'memes/14.jpg', keywords: ['funny', 'men'] },
    { id: 15, url: 'memes/15.jpg', keywords: ['funny', 'men'] },
    { id: 16, url: 'memes/16.jpg', keywords: ['funny', 'men'] },
    { id: 17, url: 'memes/17.jpg', keywords: ['funny', 'president', 'men'] },
    { id: 18, url: 'memes/18.jpg', keywords: ['funny', 'comics'] }
]

var gMeme = {
    selectedImgId: 1,
    selectedLineIdx: 0,
    lines: [
        {
            txt: 'Add your text here',
            size: 28,
            align: 'center',
            strokeColor: 'white',
            fillColor: 'black',
            fontFamily: 'Impact',
            offsetX: 220,
            offsetY: 50
        },
        {
            txt: 'Add your text here',
            size: 28,
            align: 'center',
            strokeColor: 'white',
            fillColor: 'black',
            fontFamily: 'Impact',
            offsetX: 220,
            offsetY: 400
        }
    ]
}

function getMeme() {
    return gMeme
}

function getImgs() {
    return gImgs
}


function addLine() {
    gMeme.lines.push(
        {
            txt: 'Add your text here',
            size: 28,
            align: 'center',
            strokeColor: 'white',
            fillColor: 'black',
            fontFamily: 'Impact',
            offsetX: 200,
            offsetY: gCanvasHeight / 2
        })
        gMeme.selectedLineIdx = gMeme.lines.length - 1
    }

    function resetMeme(elImgId) {
        gMeme = {
            selectedImgId: elImgId,
            selectedLineIdx: 0,
            lines: [
                {
                    txt: 'Add your text here',
                    size: 28,
                    align: 'center',
                    strokeColor: 'white',
                    fillColor: 'black',
                    fontFamily: 'Impact',
                    offsetX: 220,
                    offsetY: 50
                },
                {
                    txt: 'Add your text here',
                    size: 28,
                    align: 'center',
                    strokeColor: 'white',
                    fillColor: 'black',
                    fontFamily: 'Impact',
                    offsetX: 220,
                    offsetY: 400
                }
            ]
        }
    }
    
    function txtLine(txt) {
        gMeme.lines[gMeme.selectedLineIdx].txt = txt
    }
    
    function nextLine(idx) {
    if (idx >= 0) {
        gMeme.selectedLineIdx = idx;
        return;
    }
    if (gMeme.selectedLineIdx === gMeme.lines.length - 1) {
        gMeme.selectedLineIdx = 0
    } else {
        gMeme.selectedLineIdx++
    }
}

function deleteLine() {
    gMeme.lines[gMeme.selectedLineIdx].txt = ''
}

function allignRight(value) {
    gMeme.lines[gMeme.selectedLineIdx].align = value
}

function allignCenter(value) {
    gMeme.lines[gMeme.selectedLineIdx].align = value
}

function allignLeft(value) {
    gMeme.lines[gMeme.selectedLineIdx].align = value
}

function setFillColor(fillColor) {
    gMeme.lines[gMeme.selectedLineIdx].fillColor = fillColor
}

function setStrokeColor(strokeColor) {
    gMeme.lines[gMeme.selectedLineIdx].strokeColor = strokeColor
}

function align(value){
    gMeme.lines[gMeme.selectedLineIdx].align = value
}

function txtSizeDecrease() {
    gMeme.lines[gMeme.selectedLineIdx].size -= 3
}

function txtSizeIncrease() {
    gMeme.lines[gMeme.selectedLineIdx].size += 3
}

function setFontFamily(fontFamily) {
    gMeme.lines[gMeme.selectedLineIdx].fontFamily = fontFamily
}