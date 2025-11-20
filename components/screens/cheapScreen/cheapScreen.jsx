import {s} from "./cheapScreen.style"
import {Image, Text, TouchableOpacity, View, Dimensions, TextInput} from "react-native";
import {SafeAreaView, useSafeAreaInsets} from "react-native-safe-area-context";
import {useState} from "react";
import Constants from "expo-constants";

export function CheapScreen({setCurrentScreen, setValue}) {

    const insets = useSafeAreaInsets();
    const {height} = Dimensions.get("window");
    const [searchText, setSearchText] = useState('');
    const [itemId, setItemId] = useState(null);

    async function getId(text) {

        console.log(text);

        const hostUri = Constants.expoConfig?.hostUri;
        const apiUrl = hostUri
            ? `http://${hostUri.split(':').shift()}:3000/items/${text}`
            : `http://localhost:3000/items/${text}`;

        try {
            const response = await fetch(apiUrl);
            if (!response.ok) {
                console.error("Server responded with status", response.status);
            }
            const data = await response.json();
            const foundItem = data.data[0].item_id;
            setItemId(foundItem);
        } catch (err) {
            console.error("Fetch error:", err);
        }
    }

    function goToOut() {
        if (!itemId) {
            <Text>No item found, Please try again</Text>
            return;
        }

        setValue(itemId);
        setCurrentScreen('cheapOut');
    }

    return <>
        <SafeAreaView style={s.safeArea}>

            <View style={[s.header, {top: insets.top - (height * 0.075)}]}>
                <TouchableOpacity onPress={() => setCurrentScreen('main')}>
                    <Image source={require("../../../assets/icons8-back-50.png")} style={[s.backButton]}/>
                </TouchableOpacity>
                <Text style={[s.headerText, {paddingTop: insets.top}]}>Bargains</Text>
            </View>

            <View style={s.body}>
                <Text style={s.subText}>What item are you looking for?</Text>
                <View style={s.inputContainer}>
                    <TextInput
                        style={s.input}
                        placeholder="Search..."
                        value={searchText}
                        onChangeText={setSearchText}
                        onEndEditing={() => getId(searchText)}
                        returnKeyType="search"
                        />
                </View>
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                    <TouchableOpacity style={s.search} onPress={() => {
                        goToOut();
                    }}>
                        <Text style={s.inputText}>Search</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    </>
}