const path = require('path');
//console.log(path.join(__dirname,'public'));
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = (env) => {
  //if the env == production 
  const isProduction = env === 'production';
  const CSSExtract = new ExtractTextPlugin('styles.css')

  // console.log("env",env);
  return {
    entry: './src/app.js',
    output: {
      path: path.join(__dirname, 'public'),
      filename: 'bundle.js'
    },
    module: { //run babel when it encounters js files
      rules: [{
        loaders: [{ 
          test: /\.js$/,
          exclude: /node_modules/,
          loader:'babel-loader'
        }],
      }, {
        test: /\.s?css$/,
        use: CSSExtract.extract({
          use: [{
              loader: 'css-loader',
              options: {
                sourceMap: true
              }
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true
              }
            }
          ]
        })
      }]
    },
    plugins: [
      CSSExtract
    ],
    devtool: isProduction ? 'source-map' : 'inline-source-map',
    devServer: {
      contentBase: path.join(__dirname, 'public'),
      historyApiFallback: true
    }
  }

};