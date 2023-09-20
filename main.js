const path = require('path');
const { electron } = require('process');

const { app, BrowserWindow, globalShortcut, Menu } = require('electron');

function createWindow() {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 540,
    height: 960,
    title: 'EES 看板 Monitor',
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },
    // titleBarStyle: 'hidden',
    frame: true,
    nodeIntegration: true,
    webSecurity: false,
    allowRunningInsecureContent: true,
  });

  // 加载应用----适用于 react 开发时项目
  // mainWindow.loadURL('http://localhost:8000/');
  // 加载应用----react 打包
  mainWindow.loadURL(path.join('file://', __dirname, 'dist/index.html'));

  Menu.setApplicationMenu(null);

  if (process.platform !== 'darwin') {
    app.dock.hide();
  }

  // 打开调试.
  mainWindow.webContents.openDevTools();
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit();
});
