import React from "react";
import { View, TextInput } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import styles from "./Input.style";

const Input = ({placeholder, value, onType, iconname, isSecure}) => {
    return (
        <View style={styles.container}>
            <TextInput 
            autoCapitalize="none"
            style={styles.input} 
            placeholder={placeholder}
            onChangeText={onType}
            value={value}
            secureTextEntry={isSecure}
            /> 
            <Icon name={iconname} size={25} color="gray" />
        </View>
    );
}
export default Input;