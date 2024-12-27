#!/usr/bin/bash

# 定义文件路径
FILE_PATH="node_modules/@umijs/plugins/dist/antd.js"

# 使用 sed 命令进行查找和替换
sed -i 's/imports\.push({ source: "antd\/dist\/reset\.css" });/\/\/ imports.push({ source: "antd\/dist\/reset\.css" });/' "$FILE_PATH"

# 删除注入的CSS
# 定义目标文件路径列表
FILES="node_modules/sweetalert2/dist/sweetalert2.all.js node_modules/sweetalert2/dist/sweetalert2.all.min.js"

# 定义要匹配的代码关键字
PATTERN='"undefined"!=typeof document&&function(e,t){'

# 遍历文件列表
for FILE_PATH in $FILES; do
  # 检查文件是否存在
  if [ ! -f "$FILE_PATH" ]; then
    echo "文件 $FILE_PATH 不存在，跳过。"
    continue
  fi

  # 判断文件中是否包含指定关键字
  if grep -q "$PATTERN" "$FILE_PATH"; then
    echo "发现动态注入的 CSS 代码，正在移除... [$FILE_PATH]"
    
    # 使用 sed 工具移除特定代码块
    sed -i.bak "/$PATTERN/,/document,.*?);/d" "$FILE_PATH"
    
    # 提示完成
    echo "已移除文件中的指定代码块 [$FILE_PATH]，备份已保存为 $FILE_PATH.bak"
  else
    echo "未找到指定代码块，无需修改。 [$FILE_PATH]"
  fi
done

echo "替换完成."
