import type {Config} from '@jest/types';
const config: Config.InitialOptions = {
  verbose: true,
  testEnvironment: "jest-environment-jsdom",
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
};
export default config;