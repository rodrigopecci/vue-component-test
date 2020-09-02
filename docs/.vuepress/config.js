const pkg = require('../../package.json')

module.exports = {
  title: `${pkg.name} (${pkg.version})`,
  description: pkg.description,
  dest: 'www',
  themeConfig: {
    search: false,
    nav: [
        { text: 'Code', link: 'https://github.com/rodrigopecci/vue-component-test' }
    ]
},
  plugins: [
    ['@vuepress/register-components', {
        componentsDir: `${__dirname}/../../src/`
    }],
    'demo-code'
  ]
}