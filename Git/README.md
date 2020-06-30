# Git 👊

## 对记录的操作

1. 查看commit记录        `git log`
2. 查看当前状态          `git status`
3. 删除到[hash]的提交，保存更改         `git reset --soft [hash]`
4. 删除到[hash]的提交，交不保存更改      `git reset --hard [hash]`
5. 会滚到前一个提交       `git reset --hard HEAD~100`--hard就是删除提交记录并不保存所删除记录所做的更改
6. 消除代码冲突：         `git commit -m "commit info" ` 

## 分支操作

1. 查看分支                 `git branch` 
2. 新建并切换本地分支         `git checkout -b new111`
3. 上传远端分支              `git push origin new111:new111`
4. 查看所有分支              `git branch -a`
5. 拉去主分支到此分支         `git merge master`
6. 提交本地分支到远程仓库     `git push origin 本地分支名`
7. 删除本地分支             `git branch -d <BranchName><BranchName>`
8. 删除远端分支             `git push origin --delete new111` and `$ git push origin :new111`
9. new111f 分支与 master 分支同步   `git checkout develop` + `git rebase master`
10. 全局Git登陆             `git config --global user.email "xanadu.zxl@gamil.com"`
11. 显示远程信息             `git remote show origin`
12. 修改远端仓库地址         `git remote set-url origin [url]`

## 链接远端
1. git init
2. git add README.md
3. git commit -m "first commit"
4. 连接远端仓库 `git remote add origin https://github.com/Xanadu-zxl/gaoxian.git`
5. git push -u origin master
