var webpack = require('webpack');

module.exports = {
  entry: [
    'script!jquery/dist/jquery.min.js',
    'script!foundation-sites/dist/foundation.min.js',
    './app/app.jsx' //entry point
  ],
  externals: {
    jquery: 'jQuery'
  },
  plugins: [
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery': 'jquery'
    })
  ],
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },                        //output
  resolve: {
    root: __dirname,
    alias: {
      Main: 'app/components/Main.jsx',
      Nav: 'app/components/Nav.jsx',
      Countdown: 'app/components/Countdown.jsx',
      Timer: 'app/components/Timer.jsx',
      Clock: 'app/components/Clock.jsx',
      Controls: 'app/components/Controls.jsx',
      CountdownForm: 'app/components/CountdownForm.jsx',
      applicationStyles: 'app/styles/app.scss'
    },
    extensions: ['','.js','.jsx']  //look for files with extensions
  },
  module: {
    loaders: [
      {
          loader: 'babel-loader',   //load babel loader to compile react through es2015
          query: {
            presets: ['react','es2015','stage-0']
          },
          test: /\.jsx?$/,         //run only for jsx files excluding node_modules directory
          exclude: /(node_modules|bower_components)/
      }
    ]
  },
  devtool: 'cheap-module-eval-source-map'
};
