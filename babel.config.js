module.exports = {
    presets: ['module:@react-native/babel-preset'],
    plugins: [
        [
            require.resolve('babel-plugin-module-resolver'),
            {
                root: ["./"],
                alias: {
                    "~": "./src",
                    "assets": "./assets",
                    "screen": "./src/screen",
                    "config": "./src/config",
                },
            },
        ],
    ]
};
