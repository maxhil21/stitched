import {s} from "./outBlock.style";
import {View, Text} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";

export function OutBlock({itemData}) {

    return (
        <SafeAreaView style={s.safeArea}>
            <View style={s.container}>
                <Text style={s.blockText}>{itemData?.data?.[0].quality}</Text>
                <View style={s.line}/>
            </View>
        </SafeAreaView>
    );
}