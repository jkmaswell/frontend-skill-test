const uiConfig = {
  preset: '@vue/cli-plugin-unit-jest',
  testMatch: [
    '**/src/**/*.spec.(js|jsx|ts|tsx)|**/__tests__/*.(js|jsx|ts|tsx)',
    '**/shared/**/*.spec.(js|jsx|ts|tsx)',
  ],
  coveragePathIgnorePatterns: ['<rootDir>/src/router/'],
  coverageDirectory: '<rootDir>/coverage/ui/coverage',
  collectCoverage: true,
}

const serverConfig = {
  testMatch: ['<rootDir>/server/**/*.spec.(js|jsx|ts|tsx)'],
  collectCoverage: true,
  coverageDirectory: '<rootDir>/coverage/server/coverage',
  coveragePathIgnorePatterns: ['<rootDir>/server/config'],
}

const configurations = {
  ui: uiConfig,
  server: serverConfig,
}

module.exports = configurations[process.env.JEST_CONFIG || 'ui']
