/**
 ** @testing-library configurations
 */
// make debug output for TestingLibrary Errors larger
process.env.DEBUG_PRINT_LIMIT = '15000'

// QUICK NOTE about '@testing-library/jest-dom/extend-expect'
// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/extend-expect'
// import 'mutationobserver-shim' // I have no idea why we need this but we need it during testing https://www.npmjs.com/package/mutationobserver-shim

// test/setup-env.js
// add this to your setupFilesAfterEnv config in jest so it's imported for every test file
import { server } from './server'
beforeAll(() => server.listen())
// if you need to add a handler after calling setupServer for some specific test
// this will remove that handler for the rest of them
// (which is important for test isolation):
afterEach(() => server.resetHandlers())
afterAll(() => server.close())
