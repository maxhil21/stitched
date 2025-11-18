import { StyleSheet, Dimensions } from "react-native";

const { height } = Dimensions.get("window");
const { width } = Dimensions.get("window");

export const s = StyleSheet.create({
    safeArea: {
        flex: 1,
        justifyContent: 'flex-start',
        backgroundColor: '#0C0D0E'
    },
    backButton: {
        resizeMode: 'contain',
        position: 'absolute',
        left: "5%",
    },
    header: {
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
});
