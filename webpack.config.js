const path = require('path');

module.exports = {
    entry: './assets/js/main.js', // Este es el punto de entrada principal
    output: {
        filename: 'bundle.js', // Nombre del archivo de salida
        path: path.resolve(__dirname, 'dist') // Carpeta de salida
    },
    module: {
        rules: [
            {
                test: /\.js$/, // Aplicar este loader a archivos JS
                exclude: /node_modules/, // Excluir la carpeta node_modules
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'] // Usar preset-env para compatibilidad con ES6+
                    }
                }
            }
        ]
    }
};
