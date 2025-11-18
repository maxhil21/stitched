import { StyleSheet, Dimensions } from "react-native";

const { height, width } = Dimensions.get("window");

export const s = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    header: {
        backgroundColor: '#0C0D0E',
        borderRadius: 15,
        height: height * 0.15,
        width: width + 4,
        left: -2,
        borderColor: '#2E2F33',
        borderWidth: 2,
        justifyContent: 'center',
    },
    headerText: {
        fontSize: height * 0.056,
        color: '#8F959E',
        alignSelf: "flex-end",
        paddingRight: "5%",
        flexDirection: 'row',
        fontFamily: 'CardotSemibold',
    },
    body: {
        flex: 1,
        top: 2,
        alignItems: 'space-around',
    },
    footer: {
        backgroundColor: '#0C0D0E',
        borderRadius: 15,
        height: height * 0.09,
        width: width + 4,
        left: -2,
        borderColor: '#2E2F33',
        borderWidth: 2,
        justifyContent: 'center',
    },
    footerText: {
        fontSize: height * 0.02,
        color: '#8F959E',
        alignSelf: "center",
        flexDirection: 'row',
        fontFamily: 'CardotSemibold',
    },
});
