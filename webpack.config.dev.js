import path from 'path';
//webpack is configured by just exporting an object
export default {
  debug: true,  //this enables debugging info as we run our build
  devtool: 'inline-source-map',
  noInfo: false,    // displays info about files, set to false to remove noise during dev
  entry: [
    path.resolve(__dirname, 'src/index')
  ],
  target: 'web',
  output: { //here we define where it should create the dev bundle
    // webpack won't generate any physical files for our dev build. it will serve our build from memory
    path: path.resolve(__dirname, 'src'),
    publicPath: '/',
    filename: 'bundle.js' //place bundle in the root of our source directory
  },
  plugins: [], //optionslly define plugins to enhance webpack's power
  module: { //we want to tell webpack the file types it wants to handle
    loaders: [ //loaders teach webpack how to handle different file types
      {test: /\.js$/, exclude: /node_modules/, loaders: ['babel']},
      {test: /\.css$/, loaders: ['style','css']}
    ]
  }
}