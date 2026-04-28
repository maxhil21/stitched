module.exports = {
    preset: "jest-expo",

    setupFilesAfterEnv: [
        "@testing-library/jest-native/extend-expect",
    ],

    transformIgnorePatterns: [
        "node_modules/(?!(jest-)?react-native|@react-native|expo|@expo|react-native|@testing-library)",
    ],

    moduleNameMapper: {
        "^react-native-gesture-handler$": "<rootDir>/__mocks__/react-native-gesture-handler.js",
    },
};