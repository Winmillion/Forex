//start from cmd "npm start"/"electron ."
const {app, BrowserWindow} = require('electron');

let mainWindow;

app.on('ready', function() {
  mainWindow = new BrowserWindow({
      height: 800,
      width: 1000
  });

  mainWindow.loadURL('file://' + __dirname + '/index.html');
});

app.on('window-all-closed', () => {
  app.quit();
});