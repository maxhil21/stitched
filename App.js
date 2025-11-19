import {useFonts} from 'expo-font';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Screen} from "@/screens/mainScreen/mainScreen";
import {useState} from "react";
import {CheapScreen} from "@/screens/cheapScreen/cheapScreen";
import {AverageScreen} from "@/screens/averageScreen/averageScreen";
import {CheapOutScreen} from "@/screens/cheapOutScreen/cheapOutScreen";

export default function App() {

    const [value, setValue] = useState(null);

    const [currentScreen, setCurrentScreen] = useState('main');

    function renderCurrentScreen() {
        switch (currentScreen) {
            case 'main':
                console.log('rendering main screen');
                return <Screen setCurrentScreen={setCurrentScreen}/>;
            case 'cheap':
                return <CheapScreen setCurrentScreen={setCurrentScreen} setValue={setValue} itemId={value}/>;
            case 'average':
                return <AverageScreen setCurrentScreen={setCurrentScreen}/>;
            case 'cheapOut':
                return <CheapOutScreen setCurrentScreen={setCurrentScreen} value={value}/>;

            default:
                return null;
        }
    }

    const [fontsLoaded] = useFonts({
        "CardotSemibold": require("./assets/fonts/CardotSemibold-1jzKM.ttf")
    });

    if (!fontsLoaded) return null;

    return (
        <SafeAreaProvider>
            {renderCurrentScreen()}
        </SafeAreaProvider>
    );
}
