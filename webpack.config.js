module.exports = {
    mode: "development",
    module: {
        rules: [
            {
                test: /\.(svg|png)$/,
                use: [{loader: 'file-loader'}]
            }
        ]
    }
};
