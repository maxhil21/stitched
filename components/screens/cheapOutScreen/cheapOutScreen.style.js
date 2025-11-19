import {Dimensions, StyleSheet} from "react-native";

const { height } = Dimensions.get("window");
const { width } = Dimensions.get("window");

export const s = StyleSheet.create({
    header: {
        flex: 1,
        backgroundColor: '#0C0D0E',
        position: 'absolute',
        width: width + 4,
        left: -2,
        borderRadius: 15,
        height: height * 0.15,
        borderColor: '#2E2F33',
        borderWidth: 2,
        justifyContent: 'center',
    },
    headerText: {
        fontSize: height * 0.056,
        position: 'absolute',
        color: '#8F959E',
        alignSelf: "flex-end",
        paddingRight: "5%",
        flexDirection: 'row',
        fontFamily: 'CardotSemibold',
    },
    backButton: {
        resizeMode: 'contain',
        position: 'absolute',
        left: "5%",
    },
    text: {
        fontSize: height * 0.03,
        color: '#8F959E',
        alignSelf: "center",
        top: height * 0.05,
    }
});
