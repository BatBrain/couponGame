const webpack = require('webpack'),
    path = require('path'),
    fs = require('fs')

var ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractSass = new ExtractTextPlugin({
    filename: "styles.css",
    //disable: process.env.NODE_ENV === "development"
});


const SRC = path.resolve(__dirname, "src"),
    NODE_MODULES = path.resolve(__dirname, "node_modules")

/* babel */
const babelSettings = JSON.parse(fs.readFileSync(".babelrc"))

const config = {
    entry: [
        './src/index.js',
        './src/index.scss'
    ],
    devtool: "source-map", // any "source-map"-like devtool is possible
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                include: SRC,
                loader: "babel-loader",
                query: babelSettings
            },
            {
                test: [
                    /\.png$/,
                    /\.jpg$/
                ],
                loader: "url-loader"
            },
            {
                test: /\.scss$/,
                use: extractSass.extract({
                    use: [{
                        loader: "css-loader",
                        options: {
                          sourceMap: true
                        }
                      },
                    {
                        loader: "sass-loader",
                        options: {
                          sourceMap: true
                        }
                    }],
                    // use style-loader in development
                    fallback: "style-loader"
                  })
                },
            {
                test: /\.svg$/,
                loader: 'svg-inline-loader'
            }
          ]
    },
    resolve: {
          modules: [
          path.join(__dirname, "src"),
          "node_modules"
        ],
        extensions: [
            '.js',
            '.jsx'
        ]
    },
    output: {
        path: path.resolve(__dirname, 'public', 'assets'),
        publicPath: '/assets',
        filename: 'bundle.js'
    },
    plugins: [
        extractSass,
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
            }
        })
    ]
};

if (process.env.NODE_ENV === 'production') {
    config.plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                screw_ie8: true
            }
        })
    )
    babelSettings.plugins.push("transform-react-inline-elements");
    babelSettings.plugins.push("transform-react-constant-elements");

} else {
    config.devtool = "#cheap-module-source-map"
    config.devServer = {
        contentBase: './public',
        hot: true,
        inline: true,
        host: "0.0.0.0",
        port: 2708
    }
    config.plugins.push(
        new webpack.HotModuleReplacementPlugin()
    );
}

module.exports = config
