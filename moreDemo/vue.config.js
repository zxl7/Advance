module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/advance/' : '/',
  lintOnSave: false,
  chainWebpack: (config) => {
    config.plugin('html').tap((args) => {
      args[0].title = '扬帆✨'
      return args
    })
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: '@import "./src/assets/css/style.scss";',
      },
    },
  },
}
