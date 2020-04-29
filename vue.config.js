module.exports = {
  runtimeCompiler: true, // https://cli.vuejs.org/config/#runtimecompiler
  filenameHashing: false,
  devServer: {
    port: 8081,
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        changeOrigin: false,
        secure: false,
        headers: {
          'x-forwarded-proto': 'https',
        },
      },
    },
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import url('https://fonts.googleapis.com/css?family=Work+Sans:200,300,400,700&display=swap');
          @import './src/assets/scss/constants';
        `,
      },
    },
  },
}
