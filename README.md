## 这是什么

Mimiron是一个基于react的组件库, 包含基本HTML组件和常用业务组件两部分, 也包括了react打包相关的工具链.

Mimiron2是[Mimiron](https://github.com/ctyun/Mimiron)的第二版本, 不向下兼容.

Mimiron2经过打包之后得到一个js文件, 一个css文件, 之间引入HTML页面即可, 在前端使用babel对JSX和ES6语法进行转义, 一般用于构建单页应用, 关于前端路由和权限控制请参考[demo项目](FIXME)

### 使用

1. 打包组件库 `npm run release`

1. 打包样式文件 `npm run creatcss`

1. 调试 `npm run debug`


### Tips

1. 在webpack中公用一个entry会导致无法暴露output.library中的元素.


### 基本元素的样式修改

1. btn: margin:0, 5px
