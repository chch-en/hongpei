module: {//所有第三方模块的匹配规则
    rules: [//第三方匹配规则
        // 在 css-loader 之后，通过 ?  追加参数（只有css-loader可以加参数），
        { test: /\.scss$/, use: ['style-loader', 'css-loader?modules&localIdentName=[path][name]-[local]-[hash:5]', 'sass-loader'] },//打包处理 scss 文件的loader
    ]
}
