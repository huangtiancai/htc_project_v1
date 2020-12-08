let path = require('path');

// export一个对象
module.exports = {
  // 模式
  mode: 'development',
  // 入口
  entry: './src/index.js',
  // 出口
  output: {
    // 输出的文件名
    filename: 'boundle.js',
    // 输出的目录（必须是绝对路径）
    path: path.resolve(__dirname, 'build')
  }
}