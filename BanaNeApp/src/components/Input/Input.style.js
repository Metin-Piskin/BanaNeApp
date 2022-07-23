import { StyleSheet, Platform } from "react-native";

export default StyleSheet.create({
    container: {
        padding: -5,
        margin: 10,
        backgroundColor: "#e0e0e0",
        borderRadius: 10,
        flexDirection: "row",
    },
    input: {
        flex: 1,
        padding: Platform.OS === "android" ? 0 : 5,
    },
});