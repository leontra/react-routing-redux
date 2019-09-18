module.exports = {
    verbose: true,
    testMatch: [ "**/tests/**/?(*.)+(spec|test).[jt]s?(x)" ],
    testPathIgnorePatterns: ["/node_modules/", "jest.config.js"],
    bail: 1,
    rootDir: "../",
    setupFilesAfterEnv: ["./tests/enzyme.setup.js"]
}