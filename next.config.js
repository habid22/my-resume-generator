// next.config.js
module.exports = {
    webpack(config) {
      config.module.rules.push({
        test: /\.(mp3|wav)$/, // Handle audio files
        use: {
          loader: 'file-loader',
          options: {
            publicPath: '/_next/static/sounds/',
            outputPath: 'static/sounds/',
            name: '[name].[ext]',
            esModule: false,
          },
        },
      });
  
      return config;
    },
  };
  