module.exports = {
  testEnvironment: 'jsdom',
  collectCoverageFrom: [
    'src/**/*.ts(x)?',
    '!src/pages/**/*.tsx',
    '!src/styles/**/*.ts',
  ],
  modulePaths: ['<rootDir>/src/'],
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/.next/'],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
};
