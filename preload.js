// 导入 Electron 的 ipcRenderer 模块
const { ipcRenderer } = require('electron');

// 在 preload.js 中添加你需要的初始化逻辑
window.addEventListener('DOMContentLoaded', () => {
  // 在渲染进程准备好后执行的代码

  // 示例：向渲染进程发送消息
  ipcRenderer.send('preload-loaded');

  // 示例：从主进程接收消息
  ipcRenderer.on('message-from-main', (event, message) => {
    // 处理从主进程传递过来的消息
    console.log(`Message from main process: ${message}`);
  });

  // 在此处可以添加更多的初始化逻辑
});
