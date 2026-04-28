// import "react-native-gesture-handler/jestSetup";
import "react-native"

jest.mock("react-native-reanimated", () =>
    require("react-native-reanimated/mock")
);

jest.mock("react-native/src/private/animated/NativeAnimatedHelper.js");

jest.mock("react-native-safe-area-context", () => ({
    useSafeAreaInsets: () => ({ top: 0, bottom: 0, left: 0, right: 0 }),
    SafeAreaView: ({ children }) => children,
}));

import {View, Text, Dimensions, ScrollView, TouchableOpacity} from "react-native";
import {SafeAreaView, useSafeAreaInsets} from "react-native-safe-area-context";
jest.mock("react-native", () => {
    const RN = jest.requireActual("react-native");

    // react-native/Libraries/NativeModules/specs/NativeDevMenu"
    RN.Linking = {
        openURL: jest.fn(),
        canOpenURL: jest.fn(),
    }

    return RN;
    // return {
    //     ...RN,
    //     // NativeModules: {
    //     //     DevMenu: jest.fn()
    //     // },
    //     Linking: {
    //         openURL: jest.fn(),
    //         canOpenURL: jest.fn(),
    //     },
    //
    //     View: jest.fn(),
    //     Text: jest.fn(),
    //     ScrollView: jest.fn(),
    //     TouchableOpacity: jest.fn(),
    //     Dimensions: {
    //         get: jest.fn().mockReturnValue({ height: 800, width: 400 }),
    //     }
    // };
});