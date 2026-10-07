#!/bin/zsh
cd "$(dirname "$0")"
echo '東山校園大騷動：開啟 http://127.0.0.1:4173（Ctrl+C 關閉）'
python3 -m http.server 4173 --bind 127.0.0.1 --directory dist
