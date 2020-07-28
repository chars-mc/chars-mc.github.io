const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
   entry: './src/script.js',
   output: {
      path: __dirname + '/dist',
      filename: 'bundle.js'
   },
   plugins: [
      new HtmlWebpackPlugin({
         template: './src/index.hbs'
      }),
      new MiniCssExtractPlugin({
         filename: 'style.css'
      })
   ],
   module: {
      rules: [
         {
            test: /\.hbs$/i,
            // use: 'handlebars-loader'
            use: [{
               loader: 'handlebars-loader',
               options: {
                  partialDirs: __dirname + "/src/partials"
               }
           }]
         },
         {
            test: /\.s[ac]ss$/i,
            use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
         },
         {
            test: /\.(jpg|jpeg|gif|png|svg)/i,
            use: [{
               loader: 'file-loader',
               options: {
                  name: '[name].[ext]',
                  outputPath: 'static',
                  useRelativePath: true
               }
            }]
         }
      ]
   }
}