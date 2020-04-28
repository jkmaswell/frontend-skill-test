const uiExports = {
  presets: ['@vue/cli-plugin-babel/preset'],
}

const serverExports = {
  presets: ['@babel/preset-env'],
  plugins: ['@babel/plugin-transform-runtime'],
}

const babelConfigs = {
  ui: uiExports,
  server: serverExports,
}

const babelConfigToUse = process.env.BABEL_CONFIG || 'ui'

module.exports = babelConfigs[babelConfigToUse]
