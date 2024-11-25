# Cypress Test Automation for SauceDemo

This project is set up to run end-to-end tests using **Cypress** for the [SauceDemo](https://www.saucedemo.com/) website. This README will guide you through the necessary steps to set up and run the tests for this project.

## Test Scenario
1. Login success and invalid credential login 
2. Select, Delete, Purchase Item

## Prerequisites

Before running the tests, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (version 14 or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)

## Setup

1. **Clone the repository**:
   First, clone the repository to your local machine.

   ```bash
   git clone <repository_url>
   ```
2. **Depedencies**
    Run this command in root directory
    
    ```bash
    npm install
    ```
3. **Cypress**
    Install cypress
    
    ```bash
    npm install cypress --save-dev
    ```

## How to Run
- Run all test 
    ```bash
    npm run test
    ```
- Run Through UI
    ```bash
    npx cypress open
    ```
- Run specific test
    ```bash 
    npx cypress run --spec "cypress/e2e/<test.file.spec.js>"
    ```

