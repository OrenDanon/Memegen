'use strict'

var gKeywordSearchCountMap = { 'funny': 12, 'cat': 2, 'baby': 4, 'dog': 2, 'men': 11, 'president': 3, 'comics': 1 }

var gImgs = [
{ id: 1, url: 'img/1.jpg', keywords: ['funny', 'president', 'men'] },
{ id: 2, url: 'img/2.jpg', keywords: ['funny', 'dog'] },
{ id: 3, url: 'img/3.jpg', keywords: ['funny', 'dog', 'baby'] },,
{ id: 4, url: 'img/4.jpg', keywords: ['funny', 'cat'] },
{ id: 5, url: 'img/5.jpg', keywords: ['funny', 'baby'] },
{ id: 6, url: 'img/6.jpg', keywords: ['funny', 'men'] },
{ id: 7, url: 'img/7.jpg', keywords: ['funny', 'baby'] },
{ id: 8, url: 'img/8.jpg', keywords: ['funny', 'men'] },
{ id: 9, url: 'img/9.jpg', keywords: ['funny', 'baby'] },
{ id: 10, url: 'img/10.jpg', keywords: ['funny', 'president', 'men'] },
{ id: 11, url: 'img/11.jpg', keywords: ['funny', 'men'] },
{ id: 12, url: 'img/12.jpg', keywords: ['funny', 'men'] },
{ id: 13, url: 'img/13.jpg', keywords: ['funny', 'men'] },
{ id: 14, url: 'img/14.jpg', keywords: ['funny', 'men'] },
{ id: 15, url: 'img/15.jpg', keywords: ['funny', 'men'] },
{ id: 16, url: 'img/16.jpg', keywords: ['funny', 'men'] },
{ id: 17, url: 'img/17.jpg', keywords: ['funny', 'president', 'men'] },
{ id: 18, url: 'img/18.jpg', keywords: ['funny', 'comics'] }
];

var gMeme = {
    selectedImgId: 1,
    selectedLineIdx: 0,
    lines: [
        {
            txt: '',
            size: 20,
            align: 'left',
            color: 'red'
        }
    ]
}

function getMeme() {
    return gMeme
}

function txtLine(txt) {
    gMeme.lines[1].txt = txt
}
