import React from "react";
import { View, TextInput } from "react-native";
import Modal from "react-native-modal";

import styles from "./ContentInputModal.style";
import Button from "../../Button";

const ContentInputModal = ({ visible, onClose, onSend }) => {
    const [text, setText] = React.useState(null);

    const handleSend = () => {
        if(!text){
            return;
        }
        else{
            onSend(text);
            setText(null);
        }
    }

    return (
        <Modal
            style={styles.modal}
            isVisible={visible}
            swipeDirection="down"
            onSwipeComplete={onClose}
            onBackdropPress={onClose}
            onBackButtonPress={onClose}
        >
            <View style={styles.container}>
                <View style={styles.input_container}>
                    <TextInput placeholder="Yazınız..." onChangeText={setText} multiline/>
                </View>
                <Button text="Gönder" onPress={handleSend} />
            </View>
        </Modal>
    );
}
export default ContentInputModal;