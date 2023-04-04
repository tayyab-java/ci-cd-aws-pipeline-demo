module.exports = {
  testEnvironment: 'node',
  roots: ['<rootDir>/test'],
  testMatch: ['**/*.test.ts'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
<<<<<<< HEAD
  }
=======
  },
    reporters: [
    'default',
    [ 'jest-junit', {
      outputDirectory: "./output/",
      outputName: "test_output"
    } ]
  ]

>>>>>>> 839669313a74547fd9fd658f594c1bbffe0929cd
};
