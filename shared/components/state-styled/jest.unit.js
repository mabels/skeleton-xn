module.exports = {
  testEnvironment: "jsdom",
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  },
  testRegex: 'src/.*(\\.)test\\.tsx?$',
  moduleFileExtensions: [
    'ts',
    'tsx',
    'js',
    'jsx',
    'json',
    'node'
  ],
  setupFilesAfterEnv: [
    "./rtl.setup.js"
  ]
};
