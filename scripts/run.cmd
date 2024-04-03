@rem /usr/bin/bash

$filePath = "node_modules/@umijs/plugins/dist/antd.js"

$content = Get-Content $filePath

$content -replace 'imports\.push\(\{ source: "antd\/dist\/reset\.css" \}\);', '// imports.push({ source: "antd/dist/reset.css" });' | Set-Content $filePath
