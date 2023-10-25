module.exports = {
    webpack: (config, options) => {
        config.node = {
            // These 3 options were required to resolve errors I was getting, I added them one by one until I had no compilation errors and my page(s) worked normally!
            fs: 'empty',
            net: 'empty',
            tls: 'empty',
        }
        return config
    },
}