module.exports = {
    // webpack(config) {
    //     config.module.rules.push(
    //         // {
    //         //     // parse css font face
    //         //     test: /\.(png|woff|woff2|eot|svg)$/,
    //         //     loader: 'url-loader?limit=100000',
    //         // },
    //         // {
    //         //     test: /\.(png|jpg|gif)$/i,
    //         //     use: [
    //         //         {
    //         //             loader: 'url-loader',
    //         //             options: {
    //         //                 limit: 8192,
    //         //             },
    //         //         },
    //         //     ],
    //         // },
    //         {
    //             // load ttf
    //             test: /\.ttf$/,
    //             use: [
    //                 {
    //                     loader: 'ttf-loader',
    //                     options: {
    //                         name: './font/[hash].[ext]',
    //                     },
    //                 },
    //             ],
    //         }
    //     )
    //     return config
    // },
    exportPathMap: function() {
        return {
            '/': { page: '/' },
        }
    },
}
