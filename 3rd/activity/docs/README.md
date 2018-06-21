# 如何贡献文档

* [本地启动项目](?id=本地启动项目)
* [本地编写 markdown](?id=本地编写markdown)
* [更新代码](?id=更新代码)
* [预览及构建](?id=预览及构建)
* [发布到内网](?id=发布到内网)

### 本地启动项目



1、将`代码`pull` 到本地

2、切换分支到 `docs/activity`:

```
  git fetch
  git checkout --track origin/docs/activity
```

3、启动文档：

```
   cnpm install 或 npm install
   npm run doc:hd
```

4、访问`http://localhost:3000` 即可查看文档

### 本地编写`markdown`

1、文档路径在`sword/3rd/activity/docs/`

2、左侧导航区域编写在`_sidebar.md` 中, 每个导航可拆解为 `- [导航内容](url)`

3、创建文件，编写`markdown`，阐述规范：

* 阐述背景
* 是否涉及到配置，如果 OK，可阐述如何配置
* 如何查看配置后的内容，比如预览，内测环境查看等，阐述如何查看
* 阐述开发流程，包括`本地开发`、`发布` 等一系列完成需求的动作
* 阐述代码上传及合并，发送`merge request`给到谁
* 阐述重要且有坑的地方

### 更新代码

将`develop` 分支 合并到 `docs/acitivty`,确保`develop`分支的内容都能更新到`docs/activity`：

```
  git checkout develop
  git pull origin develop
  git checkout docs/activity
  git merge develop
```

### 预览及构建

1、编写文档时，可实时查看编写的内容是否 OK，如果编写完成，需要执行构建

```
   npm run deploy:doc:hd
```

2、完成后，进入到`server`文件夹

```
 cd server
```

3、在`server`内，如果还没有安装依赖，需要执行：

```
cnpm install 或 npm install
```

4、安装完成后，执行 `npm start`， 成功后，访问`http://localhost:3006/` 点击 `活动组`

5、查看文档，是否跟之前的改动 OK， 如果 OK，提交本地的修改:

```
  git add .
  git commit -m 'xx'
  git push origin docs/activity
```

### 发布到内网
