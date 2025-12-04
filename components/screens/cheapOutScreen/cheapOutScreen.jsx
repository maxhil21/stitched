import {useEffect, useState} from "react";
import {s} from "./cheapOutScreen.style";
import {Dimensions, Image, Text, TouchableOpacity, View} from "react-native";
import {SafeAreaView, useSafeAreaInsets} from "react-native-safe-area-context";
import Constants from "expo-constants";
import {OutBlock} from "@/screens/cheapOutScreen/outBlock";

const {height} = Dimensions.get("window");

export function CheapOutScreen({setCurrentScreen, value, data}) {
    const [itemData, setItemData] = useState(null);
    const insets = useSafeAreaInsets();

    useEffect(() => {
        async function getItem() {
            console.log("Fetching data for item ID:", value);

            const hostUri = Constants.expoConfig?.hostUri;
            const apiUrl = hostUri
                ? `http://${hostUri.split(':').shift()}:3000/listings/${value}`
                : `http://localhost:3000/listings/${value}`;

            try {
                const response = await fetch(apiUrl);
                if (!response.ok) {
                    console.error("Server responded with status", response.status);
                    return;
                }
                const data = await response.json();
                setItemData(data);
            } catch (err) {
                console.error("Fetch error:", err);
            }

        }

        getItem();
    }, [value]);

    return (
        <>
            <View style={[s.header, {top: insets.top - (height * 0.075)}]}>
                <TouchableOpacity onPress={() => setCurrentScreen('main')}>
                    <Image
                        source={require("../../../assets/icons8-back-50.png")}
                        style={s.backButton}
                    />
                </TouchableOpacity>
                <Text style={[s.headerText, {paddingTop: insets.top}]}>Profit</Text>
            </View>

            <View style={[s.safeArea, {top: insets.top + (height * 0.075)}]}>
                <OutBlock itemData={itemData} data={data}/>
            </View>
        </>
    );
}
