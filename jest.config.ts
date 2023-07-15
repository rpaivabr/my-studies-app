import type { Config } from 'jest';

const config: Config = {
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  collectCoverageFrom: [
    'src/**/*.ts',
    '!src/main.ts',
    '!src/environments/**',
    '!src/app/mocks/**',
    '!**/test-*',
    '!**/index.ts',
    '!**/*.interface.ts',
    '!**/*.module.ts',
    '!**/*.config.ts',
    '!**/*.routes.ts',
  ],
  coveragePathIgnorePatterns: ['node_modules', 'interfaces'],
  coverageThreshold: {
    global: {
      statements: 80,
      branches: 80,
      functions: 80,
      lines: 80,
    },
  },
};

export default config;