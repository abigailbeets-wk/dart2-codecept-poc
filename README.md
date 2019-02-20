# Dart2 CodeceptJS/Puppeteer POC

This POC is to show that with Dart 2, we should be able to run functional/acceptance
tests with CodeceptJS and Puppeteer without having to run the dart2js compiler.
It also attempts to show that we can use hot reloading, and the idea that unit
tests should run each time a code change is detected.

## Setup

1. Clone the repo to your workspace
2. `cd` into the root directory
3. Run `pub get` to retrieve packages
4. Run `webdev serve` to start (add `--hot-reload` to enable hot reloading)

## Test

To run unit tests, run the command `pub run test test/unit` and view the
results. To enable re-running unit tests on code change, run `npm install
-g watch` to install the watch package. In the terminal, at the root
directory, run `watch "pub run test test/unit" web test` to re-run the unit 
tests each time code is changed in the `web` and `test` directories. You 
can add any directories you'd like to this list.

To run functional tests, `cd` into the `test` directory and run the command
`codeceptjs run` to run all functional tests. For CodeceptJS to recognize a
test file, its name must be in the format `*_test.js`.

Add the flag `--steps` to view all steps in the terminal as the test takes them.
Do NOT use this flag in CI as it will print out whatever you fill fields or
forms with.

For more information on how to configure Puppeteer settings, see: [Testing With
Puppeteer](https://codecept.io/puppeteer)

For advanced CodeceptJS usage, see: [Advanced
CodeceptJS](https://codecept.io/advanced)
