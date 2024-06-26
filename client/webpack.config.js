// 'use strict';

// let path = require('path');

// module.exports = {
//     mode: 'development',
//     entry: './js/main.js',
//     output: {
//         filename: 'bundle.js',
//         path: __dirname + '/dist/js'
//     },
//     watch: true,

//     devtool: "source-map",

//     module: {}
// };

'use strict';

const path = require('path');

module.exports = (env) => {
    return {
        mode: env.mode,
    entry: {
        home: './src/js/main.js',
        services: './src/js/services.js',
        contacts:'./src/js/contacts.js',
        about: './src/js/about_us.js',
        lawyers: './src/js/lawyers.js',
        detailed: './src/js/detailedArt.js'
    },
    output: {
        filename: '[name].js', // Используем [name] для динамического имени файла на основе ключа entry
        path: path.resolve(__dirname, 'build/'),
        clean: true
    },
    watch: true,
    module: {}, // Добавьте здесь конфигурацию для модулей, если она требуется.
    }
    
};