module.exports = {
    preset: "ts-jest", // Use ts-jest for TypeScript
    testEnvironment: "jsdom", // Set test environment to jsdom
    moduleNameMapper: {
      "^@/(.*)$": "<rootDir>/src/$1",
    },
    setupFilesAfterEnv: ["<rootDir>/jest.setup.js"], // Include setup file
    transform: {
      "^.+\\.(ts|tsx)$": "ts-jest", // Transform TypeScript files
    },
     moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
    transformIgnorePatterns: [
      "/node_modules/(?!@testing-library/jest-dom)", // Ensure jest-dom is transformed
    ],
  };
  
  
  