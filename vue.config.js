module.exports = {
    // 全局样式引用
    css:{
        loaderOptions:{
            sass:{
                data:`
                    @import "@/assets/css/variable.scss"; 
                    @import "@/assets/css/common.scss";
                    @import "@/assets/css/mixin.scss";
               `
            }
        }
    },
     // 配置
    chainWebpack: (config)=>{
        // 文件目录配置别名    我们可以把src配置为@，如果需要就不用到根目录开始写了，直接用@/xxx/进行引
        config.resolve.alias
        .set('@', resolve('src'))
        .set('assets',resolve('src/assets'))
        .set('components',resolve('src/components'))
        .set('router',resolve('src/router'))
        .set('utils',resolve('src/utils'))
        .set('static',resolve('src/static'))
        .set('store',resolve('src/store'))
        .set('views',resolve('src/views'))
    },
    // 跨域配置
    devServer: {
        proxy: {
            '/api': {
                target: 'http://192.168.2.30:8080/',
                changeOrigin: true
            }
        }
    },
    assetsDir: 'assets',   // 静态文件目录
    publicPath: './',    // 编译后的地址，可以根据环境进行设置
    lintOnSave: true, // 是否开启编译时是否不符合eslint提示
    // js,css代码的最小化压缩和分割
    chainWebpack: config => {
        // 因为 vuecli 3默认开启 prefetch(预先加载模块)，提前获取用户未来可能会访问的内容在首屏会把这十几个路由文件，都一口气下载了所以我们要关闭这个功能，在 vue.config.js中设置
        config.plugins.delete('prefetch')
        
        //压缩
        config.optimization.minimize(true);
        //分割
        config.optimization.splitChunks({
            chunks: 'all'
        });
        
    },
}