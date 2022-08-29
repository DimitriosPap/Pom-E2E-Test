# Pom-E2E-Test
## Make a simple cucumber/puppeteer project that also creates reports locally. It runs in a Node.js environment and uses Jest for testing. It implements Page Object Model for infinite scalability. Also uses hooks to simplify repeated steps.

##### Description:
&ensp;In /features/foo.feature we write in Gherkin language the features we want to test dividing them in scenarios and steps.\
&ensp;Cucumber will connect those steps with the actual code when we execute the test suite.\
&ensp;In /features/steps/foo.steps.js we call for each step the class method that we need from the /pom folder.\
&ensp;In /pom we create for each page one folder with the functions and one with the selectors we need.\
&ensp;In /pom/fooPage/fooFunctions.js we create a class containing all the methods we need in Javascript.\
&ensp;The verification of the results is performed implementing the expect function from Jest.\
&ensp;In /pom/fooPage/fooSelectors.js we create a list object with all the selectors we need to call in the methods.\
&ensp;In /features/support/hooks.js we create the functions that runs repeatedly.

It is only for demonstration. If you need more information please throw a question.

Prerequisites:\
install npm package manager\
install Node.js\
install cucumber\
install puppeteer\
install html-reporter\
&ensp;run:\
&emsp;`sudo apt install npm`\
&emsp;`sudo apt install nodejs`\
&emsp;`npm init -y`\
&emsp;`npm install --save-dev @cucumber/cucumber`\
&emsp;`npm install --save-dev puppeteer`\
&emsp;`npm install cucumber-html-reporter --save-dev`


In login.feature file, ***replace the x credentials in line 15*** with yours.

run the test with command:\
&emsp;`npm test`\
or in case of multiple tests:\
&emsp;`npm run test_name`

to generate reports:\
&ensp;after the npm test command run:\
&emsp;`node index.js`
