exports.config = {
  tests: './test/functional/*_test.js',
  output: './test/functional/output',
  helpers: {
    Puppeteer: {
      url: 'http://localhost:8080',
      show: true,
      windowSize: '1280x960',
      fullPageScreenshots: true,
      waitForNavigation: ['domcontentloaded']
    }
  },
  include: {
    I: './test/functional/custom_steps.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'dart2-codecept-poc'
}
