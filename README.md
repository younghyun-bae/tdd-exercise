# 🧪 TDD Exercise

> Test-driven development

- Write test code before writing the actual code. The process involves:

  - _Requirements analysis and understanding → Design → TDD_.
  - Start by writing a failing test, then write just enough code to make the test pass. Next, write another failing test, implement code to pass it, and repeat. Finally, refactor the code.

- TDD improves code quality by encouraging development from the user’s perspective (focus on interfaces rather than implementation).
- It ensures thorough development by checking all requirements and goals step by step.
- Enhances the overall system design.
- Helps developers stay focused throughout the process.

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

### Secret of Test Code

- Test code, once written, must be maintained indefinitely.
- Do not test internal implementation details.
- Enhance reusability (test utilities) like seperating class component for testing.
- Thoroughly separate test code from production code.
- Use test code for documentation purposes.

### Structure of Test

- **Before**
  - beforeEach(), beforeAll()
- **A test**
  - AAA: Arrange, Act, Assert / GWT: Given(Reusability), When(intention to fail), Then(checking too many things at one function?)
- **After**
  - afterEach(), afterAll()

### What is Good Testing?

- **FIRST** Principles

  - **Fast**: Tests should run quickly. Accessing files, databases, or networks can slow down test execution and make the tests unstable by introducing dependencies. For example, use mocks and stubs to avoid such dependencies.
  - **Isolated**: Each test should focus on a single, independent component. Avoid testing multiple parts simultaneously; keep tests sharp and focused on their specific responsibility.
  - **Repeatable**: Tests must produce the same results every time they are run. Avoid relying on external factors like other tests or environmental conditions (e.g., network). Write tests that are not influenced by these factors.
  - **Self-Validating**: Tests should validate their results and report success or failure automatically. Use assertions like Jest’s `expect` and `toBe()` to compare the actual and expected results. Leverage `CI/CD` pipelines to run all tests whenever new code is added, ensuring no failures or regressions occur.
  - **Timely**: Write tests at the right time—before deploying to users or before refactoring. Testing should be proactive, not reactive.

### What should we test? (Testing Scope)

- **Right-BICEP** Framework
  - **Right**: Ensure all requirements work correctly and that outputs are accurate.
  - **Boundary conditions**: Test all edge cases, such as:
    - Invalid formats, `null`, special characters, incorrect emails, small or large numbers, duplicates, or out-of-order inputs.
    - Use the CORRECT framework: Conformance, Ordering, Range, Reference, Existence, Cardinality, Time.
  - **Inverse relationship**: Verify consistency by testing the reverse operation.
    - For example, if you added something, test removing it to return to the original state; if you added two numbers, test subtracting them.
  - **Cross-check**: Use alternative methods to verify results.
    - For instance, check if `added_fruits = total_fruits - previous_fruits` or if `Algorithm A = Algorithm B`.
  - **Error conditions**: Handle error scenarios gracefully, such as:
    - Network failures, memory shortages, or database downtime. Write tests for these unfortunate scenarios.
  - **Performance characteristics**: Use tests to measure performance with precise data.
    - Ensure performance improvements are measurable and validated through testing.

### What is Good Test Coverage? (Test Conditions)

Good coverage involves considering various conditions, not just focusing on one fact. Use the **CORRECT** framework:

- **CORRECT**
  - **Conformance**: Verify adherence to specific formats, such as phone numbers, emails, IDs, or file extensions.
    - What happens when these formats are invalid?
  - **Ordering**: Test for sequence conditions.
    - For example, check if array values remain sorted when required.
  - **Range**: Test numerical ranges.
    - What happens when values exceed the allowed range, or are too small or too large?
  - **Reference**: Test for external dependencies or specific conditions.
    - For example, does the code behave correctly in certain states or when specific resources are present or absent?
  - **Existence**: For example, how does the code handle `null`, `undefined`, empty strings, or `0`?
  - **Cardinality**: Test using the 0-1-N rule.
    - What happens when there are no values, a single value, multiple values, or an excessive number of values?
  - **Time**: Test how code handles relative, absolute, or simultaneous timing issues.
    - For example, how does it behave with out-of-order events, prolonged execution, or different local times?

## STACK Implementation with TDD

LIFO: Last In First Out

## React - Component Test

Docs: [React testing](https://reactjs.org/docs/testing.html), [jest](https://jestjs.io/), [react-testing-library](https://testing-library.com/docs/react-testing-library/intro/)

## with Youtube Project
