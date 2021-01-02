module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/advance/' : '/',
  lintOnSave: false,
  chainWebpack: (config) => {
    config.plugin('html').tap((args) => {
      args[0].title = 'blog✨'
      return args
    })
  },
}
