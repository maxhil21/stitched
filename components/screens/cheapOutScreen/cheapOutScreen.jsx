import {s} from "./cheapOutScreen.style"
import {Dimensions, Image, Text, TouchableOpacity, View} from "react-native";
import {useSafeAreaInsets} from "react-native-safe-area-context";

const { height } = Dimensions.get("window");

export function CheapOutScreen({setCurrentScreen}) {

    const insets = useSafeAreaInsets();

    return (
        <>
            <View style={[s.header, {top: insets.top - (height * 0.075)}]}>
                <TouchableOpacity onPress={() => setCurrentScreen('main')}>
                    <Image source={require("../../../assets/icons8-back-50.png")} style={[s.backButton]}/>
                </TouchableOpacity>
                <Text style={[s.headerText, {paddingTop: insets.top}]}>Profit</Text>
            </View>
        </>
    )
}