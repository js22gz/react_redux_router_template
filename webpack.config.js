module.exports = {
   entry: {
    js: "./app/index",
    html: "./index.html"
  },
    output: {
        filename: "./build/bundle.js"
    },
module: {
     loaders: [
      {
        test: /.js?$/,
        loader: 'babel',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      },
            {
        test: /\.html$/,
        loader: "file?name=[name].[ext]",
      },

    ]
}
};
