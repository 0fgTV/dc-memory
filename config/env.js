const path = require('path');

module.exports = {
  paths: {
    // Le chemin vers les fichier sources
    source: path.resolve(__dirname, '../src/'),
    // Chemin vers les fichiers compilés
    output: path.resolve(__dirname, '../dist/')
  },
  server: {
    host: process.env.HOST || 'localhost',
    port: process.env.PORT || 8080
  },
  limits: {
    images: 8192,
    fonts: 8192
  }
}