# playwright_test_automation

This repository contains test automation scripts using Playwright, a powerful end-to-end testing framework. Below are the instructions and details for using the libraries integrated into this project.

---

## Prerequisites

1. Install [Node.js](https://nodejs.org/) (LTS version recommended).
2. Install Playwright by running:
   ```bash
   npm install playwright
   ```
3. Clone this repository and navigate to the project directory.

---

## Libraries Used

### ZeroStep-AI Playwright Library

The ZeroStep-AI Playwright Library simplifies test automation by leveraging AI capabilities. To use this library:

1. Export your ZeroStep token as an environment variable:
   ```bash
   export ZEROSTEP_TOKEN="<your token here>"
   ```

2. The `ai()` function returns a result object structured as follows:
   ```javascript
   {
     status: 'passed' | 'failed',
     step: 'your prompt',
     details: { ... },
     error?: string
   }
   ```

### Auto-Playwright Library

The Auto-Playwright Library integrates with OpenAI to enhance test automation. To use this library:

1. Export your OpenAI API key as an environment variable:
   ```bash
   export OPENAI_API_KEY="<Your Token Here>"
   ```

---

## Running Tests

1. To execute tests, use the following command:
   ```bash
   npx playwright test
   ```

2. Test results will be available in the `test-results/` directory, and an HTML report can be found in the `playwright-report/` directory.

---

## Folder Structure

- **AIAgents/**: Contains AI-related helper scripts.
- **e2e/**: End-to-end test scripts.
- **playwright-report/**: Stores HTML reports generated after test execution.
- **test-results/**: Contains raw test result data.
- **zerostep.config.json**: Configuration file for ZeroStep-AI.

---

## Additional Resources

- [Playwright Documentation](https://playwright.dev/)
- [ZeroStep-AI Documentation](https://zerostep.ai/)
- [OpenAI Documentation](https://platform.openai.com/docs/)


## CSS Selectors
1. If Id is present
css -> tagname#id (or) #id

2. If class attribute is present
css -> tagname.class (or) .class

3. Write css based on any Attribute
css -> [attribute='value']

4. Write Css with traversing from Parent to child
css -> parenttagname >> childtagname

5. If needs to write the locator based on text
text=''

