const withFonts = require('next-fonts')
const withBundleAnalyzer = require('@zeit/next-bundle-analyzer')

module.exports = withBundleAnalyzer(
    withFonts({
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
        analyzeServer: ['server', 'both'].includes(process.env.BUNDLE_ANALYZE),
        analyzeBrowser: ['browser', 'both'].includes(
            process.env.BUNDLE_ANALYZE
        ),
        bundleAnalyzerConfig: {
            server: {
                analyzerMode: 'static',
                reportFilename: '../bundles/server.html',
            },
            browser: {
                analyzerMode: 'static',
                reportFilename: '../bundles/client.html',
            },
        },
        exportPathMap: function() {
            return {
                '/': { page: '/' },
            }
        },
    })
)
