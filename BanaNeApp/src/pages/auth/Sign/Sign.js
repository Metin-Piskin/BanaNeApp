import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Formik } from 'formik';
import auth from '@react-native-firebase/auth';
import { showMessage } from "react-native-flash-message";

import styles from './Sign.style';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import authErrorMessageParser from '../../../utils/authErrorMessageParser';

const initialFormValues = {
  usermail: '',
  password: '',
  repassword: '',
};

function App({ navigation }) {
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    navigation.goBack();
  }

  const handleFormSubmit = async (formValues) => {
    if (formValues.password !== formValues.repassword) {
      showMessage({
        message: "Şifreler uyuşmuyor",
        type: "danger",
      });
      return;
    }
    try {
      await auth().createUserWithEmailAndPassword(formValues.usermail, formValues.password);
      showMessage({
        message: "Kayıt başarılı",
        type: "success",
      });
      navigation.navigate('LoginPage');
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
            <Input
              onType={handleChange('repassword')}
              value={values.repassword}
              placeholder="Şifrenizi tekrar giriniz..."
              isSecure
            />
            <Button text="Kayıt Ol" onPress={handleSubmit} loading={loading} />
          </>
        )}
      </Formik>
      <Button text="Geri" theme="secondary" onPress={handleLogin} />
    </View>
  );
}

export default App;