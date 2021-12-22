## 脚手架开发流程详解

* 创建`npm`项目
* 创建脚手架入口文件, 最上方添加:
```js
#!/usr/bin/env node
```
* 配置`package.json`, 添加`bin`属性
* 编写脚手架代码
* 将脚手架发布到npm(如果要进行本地调试, 直接使用`npm link`创建一个软连接即可)


链接本地脚手架
```shell
cd your-cli-dir
npm link
```

链接本地库文件到本地脚手架:
```shell
cd your-lib-dir
npm link
cd your-cli-dir
npm link your-lib
```


###Lerna

Lerna 是一个基于git+npm的多package(多个npm包)项目的管理工具

###### 优势
* 大幅减少重复操作 
* 提升操作的标准化

> Lerna是架构优化的产物, 它揭示了一个架构真理: 项目复杂度提升后, 就需要对项目进行架构优化, 架构优化的主要目标往往都是以效能为核心的

```shell
lerna add axios --scope=@feiyan-cli/core
lerna add @feiyan-cli/core --scope=@feiyan-cli/fetch 把@feiyan-cli/core放到@feiyan-cli/fetch中
```



原生脚手架开发痛点分析
* 
