const path = require('path')

const port = 7070;
const title = 'vue最佳实践'

function resolve(dir) {
    // 拼接当前文件所在目录和dir
    return path.join(__dirname, dir)
}

module.exports = {
    devServer: {
        port
    },
    configureWebpack: {
        name: title
    },
    chainWebpack(config) {
        // 1.修改svg规则，排除icons目录下的svg文件
        config.module
            .rule('svg')
            .exclude.add(resolve('src/icons'))
        // 2.新增icons规则，仅打包icons目录下的svg文件
        config.module
            .rule('icons')
            .test(/\.svg$/)
            .include
                .add(resolve('src/icons'))
                .end()
            .use('svg-sprite-loader')
            .loader('svg-sprite-loader')
                .options({symbolId: 'icon-[name]'})
                .end()
    }
}