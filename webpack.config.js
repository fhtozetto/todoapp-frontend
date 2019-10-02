const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
    entry: './src/index.jsx', // arquivo inicial do sistema
    output: {
        path: __dirname + '/public', // pasta padrão de saida
        filename: './app.js' // nome do arquivo gerado
    },
    devServer: {
        port: 8080, // porta padrão do servidor
        contentBase: './public', //pasta onde estarão os arquivos gerados (linha 7)
    },
    resolve: {
        extensions: ['', '.js', '.jsx'], // é necessário para reconhecer essas extensões
        alias: {
            modules: __dirname + '/node_modules' // (moudules) conterá o caminho da pastas node-modules
        }
    },
    plugins: [
        new ExtractTextPlugin('app.css') // nome do arquivo gerado (CSS) 
    ],
    module: {
        loaders: [{
            test: /.js[x]?$/, //será feito um parse tanto em 'js' emquanto no 'jsx'  
            loader: 'babel-loader', //irá usar o babel para o parse
            exclude: /node_modules/, // irá ignorar a pasta node modules
            query: {
                presets: ['es2015', 'react'], 
                plugins: ['transform-object-rest-spread'] 
            }
        }, {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
        }, {
            test: /\.woff|.woff2|.ttf|.eot|.svg*.*$/, //extensão de fontes 
            loader: 'file'
        }]
    }
}