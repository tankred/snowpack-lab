// Snowpack Configuration File 
// Using Snowpack's built-in bundling support
module.exports = {
  optimize: {
    bundle: true,
    minify: true,
    target: 'es2018',
  },
  mount: {
    "src": "/"
  }
};
