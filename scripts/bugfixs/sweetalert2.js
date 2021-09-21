const fs = require('fs');

const sweetalert2PackagePath = './node_modules/sweetalert2/package.json';

const packageJson = JSON.parse(fs.readFileSync(sweetalert2PackagePath));

packageJson.main = 'dist/sweetalert2.js';
packageJson.browser = 'dist/sweetalert2.js';

fs.writeFileSync(sweetalert2PackagePath, JSON.stringify(packageJson, null, 2), 'utf8');
