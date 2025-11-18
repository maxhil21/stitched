import {s} from "./cheapScreen.style"
import {Image, Text, TouchableOpacity, View, Dimensions} from "react-native";
import {SafeAreaView, useSafeAreaInsets} from "react-native-safe-area-context";
import {useState} from "react";
import DropDownPicker from 'react-native-dropdown-picker';

export function CheapScreen({setCurrentScreen}) {

    const insets = useSafeAreaInsets();
    const {height} = Dimensions.get("window");
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        {label: 'Option 1', value: '1'},
        {label: 'Option 2', value: '2'},
    ]);
    return <>
        <SafeAreaView style={s.safeArea}>

            <View style={[s.header, {top: insets.top - (height * 0.075)}]}>
                <TouchableOpacity onPress={() => setCurrentScreen('main')}>
                    <Image source={require("../../../assets/icons8-back-50.png")} style={[s.backButton]}/>
                </TouchableOpacity>
                <Text style={[s.headerText, {paddingTop: insets.top}]}>Bargains</Text>
            </View>

            <View style={{flex: 1, paddingTop: height * 0.05}}>
                <Text style={s.subText}>What item are you looking for?</Text>
                <View style={s.inputContainer}>
                    <DropDownPicker
                        open={open}
                        value={value}
                        items={items}
                        setOpen={setOpen}
                        setValue={setValue}
                        setItems={setItems}
                        placeholder="Select an option"
                        dropDownDirection="BOTTOM"
                        style={s.input}
                        textStyle={s.inputText}
                        dropDownContainerStyle={s.dropDownContainer}
                    />
                </View>
            </View>
        </SafeAreaView>
    </>
}