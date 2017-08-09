const electron = require('electron')
const { app, BrowserWindow } = electron

const path = require('path')
const url = require('url')

let win

function createWindow(){
    win = new BrowserWindow ({width:1000, height:700})
    
    win.setTitle('Google Office 1.0')

    // CARGA DE UN ARCHIVO DENTRO DEL PROYECTO
    win.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file',
        slashes: true
    }))
    
    // CARGA DE URLs DE GOOGLE DOCS   
    //win.loadURL('https://docs.google.com/document/u/0/')
    //win.loadURL('https://docs.google.com/spreadsheets/u/0/')
    //win.loadURL('https://docs.google.com/presentation/u/0/')
}

app.on('ready', createWindow)