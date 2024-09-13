# playwright-assignment
playwright-assignment

<!-- TABLE OF CONTENTS -->
<h2>
    <details open="open">
        <summary class="normal">Table of Contents</summary>
        <h5>
          <ol>
            <li>
              <a href="#about-the-project">About the Project</a>
              <ul>
                <li><a href="#built-with">Built With</a>
              </ul>
            </li>
            <li>
              <a href="#getting-started">Getting Started</a>
              <ul>
                <li><a href="#prerequisites">Prerequisites</a>
                <li><a href="#installation">Installation</a>
              </ul>
            </li>
            <li><a href="#usage">Usage</a></li>
          </ol>
        </h5>    
    </details>
</h2>

<!-- ABOUT THE PROJECT -->

## About the Project

Playwright assignment project is based on Microsoft Playwright which enables reliable end-to-end testing for modern web apps.

### Built With

- [Playwright](https://playwright.dev)
- [Typescript](https://www.typescriptlang.org/)

## Getting Started

### Prerequisites

The following software are required:

- nodejs : Download and Install Node JS from
  ```sh
  https://nodejs.org/en/download/
  ```
- Install Java 8 or 11

### Installation

1. Clone the repo using below URL

```sh
https://github.com/LahiruMadhawa2020/playwright-assignment
```

2. Navigate to folder and install npm packages using:

```sh
npm install
```

3. Install browsers using the below command
```sh
npm run postinstall
```

## Usage
1. To run the pre determined commands in the package.json file - Type:
  ```sh
  npm run <name-of-command>
  ```
2. To run the smoke test cases with one of the below browsers:
- chrome
- firefox
- edge
- webkit

  2.1. Headed mode and trace on full parallel
  ```sh
  npm run test-smoke-<browser>-headed-traceon
  ```
  2.2. Headless mode and trace on full parallel
  ```sh
  npm run test-smoke-<browser>-headless-traceon
  ```
  3. Also the capability is enabled to:
  3.1. Run the test file from the file location with the trace enabled only on failure
  ```sh
  npm run test-chrome-<headed/headless>
  ```
  3.2. Run the test file from the file location with trace on always
  ```sh
  npm run test-chrome-<headed/headless>-traceson
  ```
