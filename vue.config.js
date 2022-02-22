const path = require('path');
module.exports = {
    publicPath: process.env.BASE_URL,
    assetsDir: process.env.BASE_URL, 
    devServer: {
    contentBase: path.join(__dirname, '') // 설정하면 url(/src/assets") 경로 사용 가능 
    },
    lintOnSave: false,
    css: {
        loaderOptions: {
            sass: {
                prependData: `
                @import "~@/assets/scss/common/Basic.scss";
                @import "~@/assets/scss/common/_mixin.scss";
                @import "~@/assets/scss/common/animate.scss";
                @import "~@/assets/scss/common/Loading.scss";
                `
            }
        } 
    }
     
}