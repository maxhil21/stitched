import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { OutBlock } from '@/screens/cheapOutScreen/outBlock';

// Mocks (REQUIRED for your setup)
jest.mock('react-native-safe-area-context', () => ({
    useSafeAreaInsets: () => ({ top: 0, bottom: 0, left: 0, right: 0 }),
    SafeAreaView: ({ children }) => children,
}));


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

    test('pressing item opens link', () => {
        const { getAllByRole } = render(<OutBlock itemData={mockData} />);

        const buttons = getAllByRole('button');
        fireEvent.press(buttons[0]);

        expect(Linking.openURL).toHaveBeenCalled();
    });

});