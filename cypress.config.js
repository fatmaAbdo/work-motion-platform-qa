const { defineConfig } = require("cypress");
const browserify = require("@cypress/browserify-preprocessor");
const {
  addCucumberPreprocessorPlugin,
} = require("@badeball/cypress-cucumber-preprocessor");
const {
  preprendTransformerToOptions,
} = require("@badeball/cypress-cucumber-preprocessor/browserify");

 async function setupNodeEvents(on,config)
 {
  await addCucumberPreprocessorPlugin(on, config);

  on(
    "file:preprocessor",
    browserify(preprendTransformerToOptions(config, browserify.defaultOptions)),
  );

  return config;
 }


module.exports = defineConfig({
  defaultCommandTimeout: 6000,

 env: {
    baseUrl: "https://beta.workmotion.com/",
    loginPath: "https://login-sandbox.workmotion.com/api/v1/authn",
    verifyEmail: "'**/candidates/v2/applications/**/steps/**/components",
    email: "avengers.engineering+hr1@workmotion.com",
    password: "DummyPass.12"
   },
  reporter: 'cypress-mochawesome-reporter',

  retries: {
    runMode: 1,

  },
  projectId: "nodpcq",


  e2e: {
  setupNodeEvents,
    specPattern: 'cypress/e2e/features/*.feature'

  },
  cucumber: {
      stepDefinitions: ["cypress/e2e/step_definitions/*.js"],
    },
});