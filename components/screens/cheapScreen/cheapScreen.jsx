import {s} from "./cheapScreen.style"
import {Image, Text, TouchableOpacity, View, Dimensions} from "react-native";
import {SafeAreaView, useSafeAreaInsets} from "react-native-safe-area-context";
import {useState} from "react";
import DropDownPicker from 'react-native-dropdown-picker';

export function CheapScreen({setCurrentScreen, setValue, itemId}) {

    const insets = useSafeAreaInsets();
    const {height} = Dimensions.get("window");
    const [open, setOpen] = useState(false);
    const [items, setItems] = useState([
        {label: 'Option 1', value: '1'},
        {label: 'Option 2', value: '2'},
        {label: 'diamond Bladed Knife', value: '332'}
    ]);

    const _onDropdownChange = (state) => {
        setValue(state.value);
    }

    function changeScreen() {
        setCurrentScreen('main');
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

            <View style={{flex: 1, paddingTop: height * 0.05}}>
                <Text style={s.subText}>What item are you looking for?</Text>
                <View style={s.inputContainer}>
                    <DropDownPicker
                        open={open}
                        value={itemId}
                        items={items}
                        setOpen={setOpen}
                        onSelectItem={_onDropdownChange}
                        setItems={setItems}
                        placeholder="Select an option"
                        dropDownDirection="BOTTOM"
                        style={s.input}
                        textStyle={s.inputText}
                        dropDownContainerStyle={s.dropDownContainer}
                    />
                </View>
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                    <TouchableOpacity style={s.search} onPress={() => {
                        changeScreen();
                        console.log("pressed");
                    }}>
                        <Text style={s.inputText}>Search</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    </>
}