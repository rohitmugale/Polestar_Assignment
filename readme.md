## Project Overview










## Project Title: Automated Testing Framework for Polestar Portal 

## Project Description:

 - Polestar official U.S. website focuses on providing information about its electric vehicles, sustainability initiatives, and cutting edge technology.The Polestar website is the digital storefront for Polestar, a performance electric vehicle (EV). The website serves as an online platform for customers and prospective buyers to explore Polestars vehicles, learn about the companys commitment to sustainability, and engage with its unique product offerings. It offers a seamless user experience for browsing car models, exploring configurations, and making purchasing decisions.
- It includes features such as vehicle configurations, booking test drives, exploring car models, and information on sustainability.

## Scope of Automated Testing:
tests will cover:

- Frontend: Validating the user experience of the Polestar Developer Portal.
- Backend: Validating the REST API endpoints (GET, POST, PUT, DELETE) using the Reqres API 
- load testing using k6.

## Test Framework Setup:
Tools and Technologies:
- Install VS Code,Node.js and NPM.
- Ensure that NodeJS is installed.
- Set up NPM to manage packages.
- Install Playwright and Dependencies:
npm install playwright
- Optionally, install browser-specific drivers like chromium, firefox, or webkit.
- Install other dependencies like Supertest for API tests.
- Configure Test Framework: 
Set up test directories for frontend and backend tests.
Configure environment files 
- Create Test Cases:
test cases for UI components and API endpoints.
Ensure tests handle various edge cases.
- Set Up Parallel Execution:
Modify test runner configurations to allow parallel test execution.
Playwright allows parallel testing by creating multiple browser contexts or launching tests concurrently.
- Set Up Reporting:
- Push to GitHub Repository
Set up a new repository on GitHub.
Commit and push the automation test scripts to the repository.
- JavaScript: The primary programming language used.
- Playwright: For automating browser interactions for frontend testing.
- Create a New Project Directory:
- Start by creating a new directory for the project and initializing a Node.js project:
- npm Node Package Manager, comes with Node.js
- K6: For load testing.
- GitHub Actions: For CI/CD integration.


 ## Goals of the Project:
 
- Provide detailed information about Polestars range of electric vehicles.
- Facilitate smooth user navigation and enhance user engagement.
- Create a modern, sustainable design that reflects Polestars core values.
- Integrate e-commerce and service booking features.
- Automate the testing of the Polestar website for functionality, responsiveness, and performance.
- Ensure the website works correctly across Chrome, Firefox, and WebKit. 
- Develop a robust test automation framework for frontend UI and backend APIs.
- Automate test execution and generate reports.
- Enable parallel test execution to improve test efficiency.
- K6 for Load Testing will enable the team to proactively measure and ensure that the portal.Verify that the portal can scale under increasing traffic and load.
- Store and manage the test suite on GitHub.

## Tools and Technologies:
List the technologies, tools, and libraries used in the project.

- Frontend Testing: Playwright (JavaScript/TypeScript) 
- Backend Testing: JavaScript/TypeScript - A library for testing REST APIs by making HTTP requests and validating responses
- Load Testing Tool: k6 powerful open source tool for load testing and performance measurement that allows you to define test scenarios in JavaScript.
- Version Control: GitHub

## Conclusion:
In this project we have successfully set up an automation framework for both frontend and backend testing using Playwright. 

- Automated tests for the Polestar developer portal frontend.
- Automated tests for REST API endpoints backendusing reqres.in.
- Parallel test execution to speed up the testing process.
- K6 is an effective and reliable tool for load testing. It provides powerful capabilities to simulate real-world user traffic and stress test systems, helping to identify performance issues and potential  early in the development process.
- Pushed the entire test suite to a GitHub repository for version control.


