import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Formik } from 'formik';
import auth from '@react-native-firebase/auth';
import { showMessage } from "react-native-flash-message";

import styles from './Login.style';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import authErrorMessageParser from '../../../utils/authErrorMessageParser';

const initialFormValues = {
  usermail: '',
  password: '',
};

function App({ navigation }) {
  const [loading, setLoading] = useState(false);
  
  const handleSignUp = () => {
    navigation.navigate('SignPage');
  }

  const handleFormSubmit = async (formValues) => {
    try {
      setLoading(true);
      await auth().signInWithEmailAndPassword(formValues.usermail, formValues.password);
      setLoading(false);
    } catch (error) {
      showMessage({
        message: authErrorMessageParser(error.code),
        type: "danger",
      });
      setLoading(false);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>bana ne?</Text>
      <Formik initialValues={initialFormValues} onSubmit={handleFormSubmit}>
        {({ values, handleChange, handleSubmit }) => (
          <>
            <Input
              onType={handleChange('usermail')}
              value={values.usermail}
              placeholder="e-postanızı giriniz..."
            />
            <Input
              onType={handleChange('password')}
              value={values.password}
              placeholder="Şifrenizi giriniz..."
              isSecure
            />
            <Button text="Giriş Yap" onPress={handleSubmit} loading={loading} />
          </>
        )}
      </Formik>
      <Button text="Kayıt Ol" theme="secondary" onPress={handleSignUp} />
    </View>
  );
}

export default App;