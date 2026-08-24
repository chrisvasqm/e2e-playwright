# End-To-End Playwright

Demonstration project to show how to use Playwright for End-To-End testing against [Automaty](https://automaty-gd3cb.ondigitalocean.app/).

## Getting started

1. Make a copy of the `example.env` file and rename it to `.env` and setup the values that are missing.
2. Install dependencies:

```bash
bun install
```

3. Install the official Playwright [extension](https://marketplace.visualstudio.com/items?itemName=ms-playwright.playwright).

## Running the tests

```bash
# Headless run
bun run test

# Interactive UI mode
bun run gui
```

After a headless run, an HTML report is generated automatically.

## Project structure

Tests follow the [Page Object Model](https://playwright.dev/docs/pom) pattern:

```
├── page-objects/   # Page objects (e.g., Login)
├── tests/          # Test specs (e.g., automaty.spec.ts)
└── playwright.config.ts
```

## CI

A GitHub Actions workflow (`.github/workflows/playwright.yml`) runs the test suite on every push and pull request.