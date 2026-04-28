import {s} from "./averageScreen.style"
import {Dimensions, Image, Text, TouchableOpacity, View} from "react-native";
import {SafeAreaView, useSafeAreaInsets} from "react-native-safe-area-context";

export function AverageScreen({setCurrentScreen}) {

    const insets = useSafeAreaInsets();
    const {height} = Dimensions.get("window");

    return <>
        <SafeAreaView style={s.safeArea}>
            <View style={[s.header, {top: insets.top - (height * 0.075)}]}>
                <TouchableOpacity onPress={() => setCurrentScreen('main')}>
                    <Image source={require("../../../assets/icons8-back-50.png")} style={[s.backButton]}/>
                </TouchableOpacity>
                <Text style={[s.headerText, {paddingTop: insets.top}]}>Average</Text>
            </View>
            <View style={[s.body, {top: insets.top}]}>
                <Text style={s.subHeadText}>Price calculator</Text>
                <Text style={s.text}>Item: </Text>
            </View>
        </SafeAreaView>
    </>
}
