This project uses:
- Cypress
- Gherkin syntax
- Page Object Model pattern
- zxing-js library to read QA codes
- cypress-if library to support if...else statements

Structure of the project:
- "Integration" directory contains of the features in Gherkin and relevant functions in JavaScript )xample: homepage.int.feature and homepage.int.js)
- "pageObjects" directory contains of the locators and helper functions for all relevant pages 
- in "Plugins" directory one can find screenshots and videos generated after the tests' executions


debug mode
```npm run cypress:open```

run all feature files in Electron
```npx cypress run --spec **/*.feature```