import {Dimensions, StyleSheet} from "react-native";

const { height, width } = Dimensions.get("window");

export const s = StyleSheet.create({
    block: {
        backgroundColor: 'black',
        borderWidth: 2,
        borderColor: '#2E2F33',
        shadowColor: "#fff",
        shadowOpacity: 0.4,
        shadowRadius: 8.30,
        elevation: 13,
        width: width * 0.85,
        height: height * 0.4,
        margin: height * 0.015,
        marginTop: height * 0.07,
        borderRadius: 15,
        alignItems: 'center',
    },
    line: {
        backgroundColor: '#2E2F33',
        width: width * 0.8,
        height: height * 0.0025,
        marginTop: height * 0.01,
    },
    name: {
        fontSize: height * 0.03,
        color: '#8F959E',
        alignSelf: 'center',
        marginTop: height * 0.02,
        fontFamily: 'CardotSemibold',
        flexWrap: 'wrap',
        textAlign: 'center',

    },
    type: {
        fontSize: height * 0.02,
        color: '#8F959E',
        alignSelf: 'center',
        marginTop: height * 0.02,
        fontFamily: 'CardotSemibold',

    },
    description: {
        fontSize: height * 0.017,
        color: '#8F959E',
        alignSelf: 'center',
        textAlign: 'center',
        marginTop: height * 0.02,
        paddingLeft: height * 0.02,
        fontFamily: 'CardotSemibold',
    }
});