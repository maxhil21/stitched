import {s} from "./blocks.style"
import {Text, TouchableOpacity} from "react-native";
import {SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context";

export function Blocks({ setCurrentScreen}) {
    return (
        <SafeAreaProvider style={s.safeArea}>
            <TouchableOpacity style={s.container} onPress={() => setCurrentScreen('cheap')}>
                <Text style={s.blockText}>Find items with a high profit margin</Text>
            </TouchableOpacity>
            <TouchableOpacity style={s.container} onPress={() => setCurrentScreen('average')}>
                <Text style={s.blockText}>Find the best price to sell for</Text>
            </TouchableOpacity>
        </SafeAreaProvider>
    )
}