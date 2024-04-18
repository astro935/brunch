module.exports = {
    files: {
      javascripts: { joinTo: 'app.js' },
      stylesheets: { joinTo: 'app.css' }
    },
  
    // If using Babel for newer JavaScript features
    plugins: {
      babel: { presets: ['@babel/preset-env'] }
    }
  };