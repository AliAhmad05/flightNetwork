## Owner

Majority of the code in this repo doesn't belong to me. This automation suite was not working and I was hired to fix, improve and scale it.

## File Structure

```
└── 📁{playwright::@ts}-flightNetwork
    └── .gitignore
    └── README.md
    └── 📁dtos
        └── Travel.ts
    └── 📁enums
        └── SlidersEnum.ts
    └── package.json
    └── 📁pageObjects
        └── FiltersPO.ts
        └── HomePagePO.ts
        └── ResultsPO.ts
    └── playwright.config.ts
    └── 📁tests
        └── Test_A1_MultipleFiltering.spec.ts
```

## Getting Started

Follow the steps below to get the project set up on your local machine.

### Prerequisites

Ensure you have Node.js installed. If not, download and install it from [Node.js official website](https://nodejs.org/).

### Installation

1. Navigate to the project directory.
2. Install the required dependencies:

`npm install`

## Running Tests

### UI Mode

To run the tests in UI mode:

`npx playwright test --ui`

### Headless Mode

To run the tests in headless mode:

`npx playwright test`