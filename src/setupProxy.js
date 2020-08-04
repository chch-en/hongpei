const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = function (app) {
    app.get("/lala", (req, res) => {
        res.json({
            ok: 1,
            msg: "lalalal"
        })
    })
}