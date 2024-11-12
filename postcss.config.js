module.exports = {
    css: ['./dist/MeirMarchovich/browser/*.css'],
    content: [
        './dist/MeirMarchovich/browser/index.html',
        './dist/MeirMarchovich/browser/*.js',
    ],
    safelist: {
        // greedy: [/p-button-secondary/],
    },
    output: './dist/MeirMarchovich/browser/',
}
