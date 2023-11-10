# Getting Started

[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://github.com/ihbayraker/test-automation/blob/main/LICENSE)

- This project uses Playwright with typescript to automate web and api testing.
- It's configured to run several web and api tests out of the box and uses page-object model as it's core framework.
- The web test are ran on [DemoQA](https://demoqa.com) while api tests use this [Swagger](https://demoqa.com/swagger/).
- Installing playwright and the dependencies are required to execute tests.
- To execute the tests in default configuration locally run the command below through command console.
```sh
$ npx playwright test
```
- After the execution the report of the results can be found in **playwright-report** folder.
- Any failures in execution of the tests will produce a screenshot and embed them into reports.

# Configuration
- Test suite can be fully personalized by editing the **playwright.config.ts** file.
- The default configuration values are as follows.

| Option | Parameter | Description |
| ------ | ------ | ------ |
| testDir | ./tests | All test scripts needs to be in given folder. |
| timeout | 30 * 1000  | Each test has 30 seconds before it fails by timing out.  |
| expect: {timeout} | 5000 |  Assertions have maximum 5 seconds before they timeout. |
| reporter | html | Reports will be html. |
| browserName | chromium | Test Suite will run on chromium by default but it can be changed. |
| headless | false | Tests can be ran headless by setting this true. |
| screenshot | only-on-failure | Determines when will screenshots be taken, by default its at a failure. |
| launchOptions | args: ["--start-maximized"] | Sets driver to the maximum size the current screen allows. |

# Scenarios
- There are in total 9 scenarios bundled in this project. 7 of them are web tests while 2 of them are api tests
- Web tests can be found in **tests/e2e/ui** while the api tests are in **tests/e2e/api**

 | Spec | Test | Description |
 | ------ | ------ | ------ |
 | ./ui/TC01.spec.ts | Verify entry creation, Verify entry updation  | Tests the web tables on DemoQA, In first scenario a new entry is inserted to the table while in second one a default entry is updated. Sceario params are determined in the spec file.  |
 | ./ui/TC02.spec.ts | Verify broken image | Test the broken image on DemoQA. The existence of the image is validated with a get request.  |
 | ./ui/TC03.spec.ts | Verify user can submit the form | Tests the form on DemoQA, Scenario params are determined in the spec file. This scenario will fail on headless mode because of the ads on site. |
 | ./ui/TC04.spec.ts | Verify the progress bar | Tests the progress bar on DemoQA, driver will wait until the bar reaches to 100% before passing this scenario. |
 | ./ui/TC05.spec.ts | Verify the tooltip | Tests the tooltips on DemoQA, mouse will hover over the button to revale the tooltip and will verify it's contents. |
 | ./ui/TC06.spec.ts | Verify user can drag and drop |Tests the drag and drop on DemoQa, the box is held with mouse and moved to drag area. |
 | ./api/TC01.spec.ts | add/delete books, Unathorized addition Attempt | Tests the bookstore apis, user and a token created in each scenario, in first one a happy path is followed by new books being added to user's account then one removed after verification, in second one adding books without authorization is attempted. |
