// Snowpack Configuration File
// ? Using Snowpack's built-in bundling support
module.exports = {
  optimize: {
    bundle: true,
    minify: true,
    target: 'es2020'
  },
  mount: {
    src: '/'
  },
  exclude: ['**/*~'],
  //   plugins: [
  //     ["@snowpack/plugin-optimize", {
  //       minifyHTML: true
  //     }]
  //   ]
  plugins: [
    [
      'snowpack-plugin-minify-html',
      {
        /**
         * @see Plugin Options below
         */
        htmlMinifierOptions: {
          sortAttributes: true,
          removeComments: true
        }
      }
    ],
    [
      'snowpack-plugin-terser',
      {
        /**
         * @see Plugin Options below
         */
        terserOptions: {
          compress: {
            arguments: true,
            passes: 2,
            unsafe_arrows: true
          }
        }
      }
    ]
  ]
}
