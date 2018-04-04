# vue基础框架

> vue项目基础框架

## 使用步骤

``` bash
# 安装
npm install

# 分模块打包
# 默认访问地址 localhost:8080/模块名/子模块名/index.html
npm run dev 模块名

#更改端口
npm run dev 模块名 --port=端口号

#编译之后立即打开访问地址
npm run dev 模块名 --watch

# 打包编译
npm run build

#更改打包之后的输出路径（默认为dist）
npm run build --dist=目录名

# 查看打包之后各部分体积详情
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
