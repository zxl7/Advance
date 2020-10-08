# Docker 👊

- 删除所有不使用的镜像：docker image prune --force --all 或者 docker image prune -f -a
- 删除所有停止的容器 docker container prune -f
- 进入容器：docker exec -it id /bin/bash
- 搜索镜像：docker search [REPOSITORY[:TAG]]
- 拉取镜像：docker pull [REPOSITORY[:TAG]]
- 查看镜像列表：docker image ls
- 删除镜像：docker image rm [REPOSITORY[:TAG]] / docker rmi [REPOSITORY[:TAG]]
- 删除全部镜像：docker rmi \$(docker images -q)
- 停用全部运行中的容器：docker stop \$(docker ps -q)
- 删除全部容器：docker rm \$(docker ps -aq)
- 一条命令实现停用并删除容器：docker stop $(docker ps -q) & docker rm \$(docker ps -aq)
- docker 镜像名称由 REPOSITORY 和 TAG 组成 [REPOSITORY[:TAG]]，TAG 默认为 latest
- docker build -t vuenginxcontainer . -t 是给镜像命名
- . 是基于当前目录的 Dockerfile 来构建镜像
- docker run -p 8080:8080 -it [REPOSITORY[:TAG]]（name+版本号） sht d h
