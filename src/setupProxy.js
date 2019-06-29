const proxy = require('http-proxy-middleware')

module.exports = (app) => {
    app.use(proxy(
        '/app',{
            target: "http://rap2api.taobao.org",
            changeOrigin: true
        }
    )),
    app.use(proxy(
        '/login',{
            target: "https://github.com",
            changeOrigin: true
        }
    )),
    app.use(proxy(
        '/user',{
            target: "https://api.github.com",
            changeOrigin: true
        }
    ))
}