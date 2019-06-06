1. 在安装一个 package，而此 package 要打包到生产环境 bundle 中时，你应该使用 npm install --save。如果你在安装一个用于开发环境目的的 package 时（例如，linter, 测试库等），你应该使用 npm install --save-dev。

2. webpack 最出色的功能之一就是，除了引入 JavaScript，还可以通过 loader 引入任何其他类型的文件