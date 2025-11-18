import {Dimensions, Text, View} from 'react-native';
import { s } from './mainScreen.style';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Blocks } from "./blocks/blocks";

export function Screen({ setCurrentScreen}) {

    const insets = useSafeAreaInsets();
    const { height } = Dimensions.get("window");

    return (
        <View style={s.container}>
            <View style={[s.header, {top: insets.top - (height * 0.075)}]}>
                <Text style={[s.headerText, {paddingTop: insets.top}]}>Stitched</Text>
            </View>
            <View style={s.body}>
                <Blocks setCurrentScreen={setCurrentScreen}/>
            </View>
            <View style={[s.footer, {paddingBottom: insets.bottom}]}>
                <Text style={s.footerText}>Nothing fancy down here quite yet</Text>
            </View>
        </View>
    );
}