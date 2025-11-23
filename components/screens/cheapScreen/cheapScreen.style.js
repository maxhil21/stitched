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
    subText: {
        fontSize: height * 0.02,
        color: '#8F959E',
        alignSelf: "center",
        top: height * 0.05,
        fontFamily: 'CardotSemibold',
    },
    body: {
        flex: 1,
        paddingTop: height * 0.05,
        alignItems: 'center',
    },
    inputContainer: {
        backgroundColor: '#8F959E',
        justifyContent: 'flex-start',
        marginTop: height * 0.08,
        alignItems: 'flex-start',
        paddingHorizontal: width * 0.05,
        width: width * 0.9,
        borderRadius: 25,
    },
    input: {
        width: width * 0.9,
        height: height * 0.05,
        borderRadius: 15,
        color: '#5d7499',
    },
    inputText: {
        fontSize: height * 0.01,
        color: '#8F959E',
        fontFamily: 'CardotSemibold',
    },
    search: {
        backgroundColor: '#2E2F33',
        borderRadius: 15,
        height: height * 0.05,
        width: width * 0.9,
        marginTop: height * 0.05,
        alignItems: 'center',
        justifyContent: 'center',
    }
});
