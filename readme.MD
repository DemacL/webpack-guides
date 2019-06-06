1. 在安装一个 package，而此 package 要打包到生产环境 bundle 中时，你应该使用 npm install --save。如果你在安装一个用于开发环境目的的 package 时（例如，linter, 测试库等），你应该使用 npm install --save-dev。

2. webpack 最出色的功能之一就是，除了引入 JavaScript，还可以通过 loader 引入任何其他类型的文件

3. webpack 根据正则表达式，来确定应该查找哪些文件【test】，并将其提供给指定的 loader【use】。在这个示例中，所有以 .css 结尾的文件，都将被提供给 style-loader 和 css-loader。