module.exports = function (api) {
    api.cache(true);
    return {
        presets: ['babel-preset-expo'],
        plugins: [
            [
                'babel-plugin-module-resolver',
                {
                    root: ['./src/'],
                    alias: {
                        constants: './src/constants',
                        configs: './src/configs',
                        types: './src/types',
                        enums: './src/enums',
                        state: './src/state',
                        helpers: './src/helpers',
                        components: './src/components',
                        views: './src/views',
                        index: './src/index',
                    },
                },
            ],
        ],
    };
};
