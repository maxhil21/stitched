import {s} from "./cheapOutScreen.style"
import {Dimensions, Image, Text, TouchableOpacity, View} from "react-native";
import {useSafeAreaInsets} from "react-native-safe-area-context";

const {height} = Dimensions.get("window");

export function CheapOutScreen({setCurrentScreen, value}) {

    {/*
    async function getItem() {

        console.log("Fetching data for item ID:", value);

        try {
            console.log("hello", value);
            const response = await fetch('http://172.20.10.2:3000/items/1');
            if (!response.ok) {
                console.error("Server responded with status", response.status);
                return;
            }
            const data = await response.json();
            console.log("Fetched data:", JSON.stringify(data, null, 2));
        } catch (err) {
            console.error("Fetch error:", err);
        }
    }
*/
    }

    const insets = useSafeAreaInsets();

    return (
        <>
            <View style={[s.header, {top: insets.top - (height * 0.075)}]}>
                <TouchableOpacity onPress={() => setCurrentScreen('main')}>
                    <Image source={require("../../../assets/icons8-back-50.png")} style={[s.backButton]}/>
                </TouchableOpacity>
                <Text style={[s.headerText, {paddingTop: insets.top}]}>Profit</Text>
            </View>
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text style={s.text}>Item ID: {value}</Text>
            </View>
        </>
    );
}