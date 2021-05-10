#!/usr/bin/env sh

# sudo chmod -R 777 ./test.sh 给予权限
# 当发生错误时中止脚本
set -e
npm run build
cd dist
git init
git add -A
git commit -m 'deploy'
git push -f https://github.com/Xanadu-zxl/advance.git master:gh-pages
cd -

