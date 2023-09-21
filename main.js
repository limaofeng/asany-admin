const path = require('path');
const { electron } = require('process');

const { app, BrowserWindow, globalShortcut, Menu } = require('electron');

function createWindow() {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 1080,
    height: 1920,
    minWidth: 540, // 设置窗口的最小宽度
    minHeight: 960, // 设置窗口的最小高度
    title: 'EES 看板 Monitor',
    // icon: path.join(__dirname, '/public/icon_256x256.png'),
    icon: path.join(__dirname, '/dist/icon_256x256.png'),
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

  mainWindow.on('maximize', () => {
    mainWindow.setFullScreen(true);
  });

  // if (process.platform !== 'darwin') {
  //   app.dock.hide();
  // }

  // 打开调试.
  // mainWindow.webContents.openDevTools();
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
