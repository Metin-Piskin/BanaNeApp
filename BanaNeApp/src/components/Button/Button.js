import React from "react";
import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import styles from "./Button.style";

const Button = ({ text, onPress, loading, icon, theme= 'primary' }) => {
    return (
        <TouchableOpacity style={styles[theme].container} onPress={onPress} disabled={loading}>
            {loading ? (
                <ActivityIndicator color="white" />
            ) : (
                <View style={styles[theme].button_container}>
                    <Icon name={icon} size={18} color="white" />
                    <Text style={styles[theme].title}>{text}</Text>
                </View>
            )}
        </TouchableOpacity>
    );
}
export default Button;