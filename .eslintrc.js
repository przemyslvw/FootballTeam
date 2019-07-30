module.exports = {
    root: true,
    parserOptions: {
        parser: 'babel-eslint'
    },
    env: {
        browser: true,
    },
    extends: [
        'plugin:vue/essential'
    ],

    plugins: [
        'vue'
    ],

    rules: {
        "no-console": "off",

        'generator-star-spacing': 'off',

        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
    }
}
