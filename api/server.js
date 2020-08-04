const express = require("express");
const db = require("./db");
const app = express();


//商品信息
app.get("/goodsLlst", async (req, res) => {
    const goodsLlst = await db.find("goodsLlst", {
        sort: {
            addTime: 1
        }
    })
    res.json({
        ok: 1,
        goodsLlst
    })
})

app.listen(80, function () {
    console.log("success")
})