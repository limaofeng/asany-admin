const fs = require('fs');

const sweetalert2PackagePath = './node_modules/sweetalert2/package.json';

const packageJson = JSON.parse(fs.readFileSync(sweetalert2PackagePath));

packageJson.main = 'dist/sweetalert2.js';
packageJson.browser = 'dist/sweetalert2.js';
packageJson.module = 'dist/sweetalert2.js';

function removeDir(dir) {
  if (!fs.existsSync(dir)) {
    return;
  }
  let files = fs.readdirSync(dir);
  for (var i = 0; i < files.length; i++) {
    let newPath = dir + files[i];
    let stat = fs.statSync(newPath);
    if (stat.isDirectory()) {
      //如果是文件夹就递归下去
      removeDir(newPath);
    } else {
      //删除文件
      fs.unlinkSync(newPath);
    }
  }
  fs.rmdirSync(dir); //如果文件夹是空的，就将自己删除掉
}

removeDir('./node_modules/sweetalert2/src/scss/');

const files = [
  './node_modules/sweetalert2/src/sweetalert2.scss',
  './node_modules/sweetalert2/src/variables.scss',
  './node_modules/sweetalert2/dist/sweetalert2.css',
  './node_modules/sweetalert2/dist/sweetalert2.min.css',
];

for (var filePaht of files) {
  fs.existsSync(filePaht) && fs.unlinkSync(filePaht);
}

fs.writeFileSync(sweetalert2PackagePath, JSON.stringify(packageJson, null, 2), 'utf8');
