import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { OutBlock } from '@/screens/cheapOutScreen/outBlock';

jest.mock('react-native-safe-area-context', () => ({
    useSafeAreaInsets: () => ({ top: 0, bottom: 0, left: 0, right: 0 }),
    SafeAreaView: ({ children }) => children,
}));


import "react-native"

jest.mock("react-native-reanimated", () =>
    require("react-native-reanimated/mock")
);

jest.mock("react-native/src/private/animated/NativeAnimatedHelper.js");

let mockOpenUrl = jest.fn();

jest.mock("react-native", () => {
    const tempLinkingMock = {
        openURL: mockOpenUrl,
        canOpenURL: jest.fn()
    }

    const RN = jest.requireActual("react-native");
    RN.Linking = tempLinkingMock;


    return RN;

});


describe('OutBlock', () => {

    const mockData = {
        data: [
            {
                cost: 1500,
                quality: 90,
                expected_price: 2000,
                item_id: 123
            }
        ]
    };

    test('shows loading when no data', () => {
        const { getByText } = render(<OutBlock itemData={null} />);
        expect(getByText('Loading', { exact: false })).toBeTruthy();
    });

    test('renders item data', () => {
        const { getByText } = render(<OutBlock itemData={mockData} />);

        expect(getByText(/cost:/)).toBeTruthy();
        expect(getByText(/quality:/)).toBeTruthy();
        expect(getByText(/expected price:/)).toBeTruthy();
    });

});