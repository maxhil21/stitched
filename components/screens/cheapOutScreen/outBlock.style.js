import {Dimensions, StyleSheet} from "react-native";

const { height, width } = Dimensions.get("window");

export const s = StyleSheet.create({
    safeArea: {
        flex: 1,
        justifyContent: 'space-between',
    },
    container: {
        flexDirection: 'row',
        flex: 0.4,
        backgroundColor: '#0C0D0E',
        borderRadius: 15,
        margin: height * 0.015,
        padding: height * 0.02,
        borderWidth: 2,
        borderColor: '#2E2F33',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.6,
        shadowRadius: 5.46,

        elevation: 9,
    },
    blockText: {
        color: '#8F959E',
        alignSelf: 'center',
        textAlign: 'center',
        flexWrap: 'wrap',
        fontSize: height * 0.03,
        fontFamily: 'CardotSemibold',
    }
});