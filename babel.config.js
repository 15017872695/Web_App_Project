module.exports = {
  presets: [
    '@vue/app',
    // ["es2015",{"modules":false}],//cnpm add babel-preset-es2015 --dev
  ],
  "plugins": [// 借助 babel-plugin-component，我们可以只引入需要的组件，以达到减小项目体积的目的。
    [
      'import',
      {
        libraryName: 'mand-mobile',
        libraryDirectory: 'lib',
      },
      'mand-mobile'
    ],
    [
      'import', 
      {
        libraryName: "vant",
        libraryDirectory: "es", 
        style: true
      },
      'vant'
    ]
  ],

}
