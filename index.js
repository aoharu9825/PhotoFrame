'use strict';

const electron = require("electron");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const Menu = electron.Menu;
const dialog = electron.dialog;
let mainWindow;
let settingsWindow;

let menuTemplate = [{
  label: 'PhotoFrame',
  submenu: [
    {label: 'reload', accelerator: 'CmdOrCtrl+R', click: function(item, focusedWindow) {
        if (focusedWindow)
          focusedWindow.reload();
      }
    },
    { label: 'About' , accelerator: 'CmdOrCtrl+A', click: function() { showAboutDialog(); }},
    { type: 'separator' },
    { label: 'Settings' , accelerator: 'CmdOrCtrl+,', click: function() { showSettingsWindow(); }},
    { type: 'separator' },
    { label: 'Quit' , accelerator: 'CmdOrCtrl+Q', click: function() { app.quit(); }}
  ]
}];

let menu = Menu.buildFromTemplate(menuTemplate);

function createMainWindow(){
   Menu.setApplicationMenu(menu);
   mainWindow = new BrowserWindow({
     width: 800,
     height: 600,
     webPreferences: {webSecurity: false}
   });
   mainWindow.loadURL('file://' + __dirname + '/index.html');
   mainWindow.on('closed', function() {
     mainWindow = null;
   });
}

function showSettingsWindow() {
  settingsWindow = new BrowserWindow({width: 600, height: 400});
  settingsWindow.loadURL('file://' + __dirname + '/settings.html');
  settingsWindow.show();
  settingsWindow.on('closed', function() {
    settingsWindow = null;
  });
}

function showAboutDialog(){
  dialog.showMessageBox({
    type: 'info',
    buttons: ['OK'],
    message: 'About This App',
    detail: 'This app was created by aoharu9825 which is my username of my GitHub account. If you have some questions about this app, please feel free to ontact with me by GitHub'
  });
}

app.on('ready', function() {
  createMainWindow();
});

app.on('window-all-closed', function() {
  if (process.platform != 'darwin') {
    app.quit();
  }
});

app.on('activate', function() {
  if (mainWindow === null) {
    createMainWindow();
  }
});
