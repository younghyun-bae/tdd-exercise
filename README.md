# TDD Exercise

## Unit Test

with [Jest](https://jestjs.io/docs/getting-started)

```
npm init --yess
npm install jest -global
jest --init //yes>no>node>yes>v8>yes
npm install --save--dev jest
npm install @types/jest

// Wirting test code

npm run test

// Checking how much the written test codes cover actual implementation
jest --coverage
```

### Calulator Testing

### Async Testing

### Mocking

### Stub

## Testing Principles

- Secret of Test Code

  - Test code, once written, must be maintained indefinitely.
  - Do not test internal implementation details.
  - Enhance reusability (test utilities) like seperating class component for testing.
  - Thoroughly separate test code from production code.
  - Use test code for documentation purposes.

- Structure of Test
  - Before
    - beforeEach(), beforeAll()
  - a test
    - AAA: Arrange, Act, Assert / GWT: Given(Reusability), When(intention to fail), Then(checking too many things at one function?)
  - After
    - afterEach(), afterAll()
