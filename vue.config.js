// vue.config.js
module.exports = {
    devServer: {
        https: true,
        host: 'localhost'
    },
    css: {
        loaderOptions: {
            sass: {
                additionalData: `
       @import "@/styles/_variables.scss";
       @import "@/styles/_mixins.scss";
       `,
            },
        },
    },
};
