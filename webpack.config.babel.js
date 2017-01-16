import webpack from 'webpack'
import autoprefixer from 'autoprefixer'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'

export default {
    entry: {
        bundle: './src/app.js',
    },
    output: {
        path: __dirname + '/dist',
        filename: '[name].js',
    },
    resolve: {
        extentions: ['', '.js', '.scss']
    },
    devtool: 'inline-source-map',
    plugins: [
        // new webpack.optimize.UglifyJsPlugin()
        new ExtractTextPlugin('[name].css', {
            allChunks: true
        }),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            chunksSortMode: 'dependency'
        }),
    ],
    module: {
        loaders: [{
            test: /\.css$/,
            loader: ExtractTextPlugin.extract('style-loader', 'css-loader'),
        }, {
            test: /\.scss$/,
            loader: ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader!sass-loader'),
        }, {
            test: /\.js$/,
            exclde: /(node_modules|bower_components)/,
            loaders: ['ng-annotate', 'babel-loader'],
        }, {
            test: /\.html$/,
            loader: 'raw-loader',
            exclude: ['./src/index.html']
        }]
    },
    devServer: {
        inline: true,
    },
    postcss: function() {
        return [autoprefixer];
    }
}
