import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from '../../utils/colors';
import Input from '../../components/atoms/Input';
import Button from '../../components/atoms/Button';

export default function SignIn({navigation}) {
  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.title}>Sign In</Text>
        <Text style={styles.caption}>Find your best ever meal</Text>
      </View>
      <View style={styles.form}>
        <View style={styles.subForm}>
          <Input label="Email Address" name="Type your email address" />
        </View>
        <View style={styles.subForm}>
          <Input label="Password" name="Type your password" />
        </View>
        <View style={styles.button}>
          <Button title="Sign In" />
        </View>
        <View style={styles.button2}>
          <Button
            type="secondary"
            title="Create New Account"
            onPress={() => navigation.navigate('SignUp')}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    marginHorizontal: 24,
    marginTop: 30,
    marginBottom: 24,
  },
  title: {
    fontSize: 22,
    fontFamily: 'Poppins-Medium',
    color: colors.text.primary,
  },
  caption: {
    fontFamily: 'Poppins-Light',
    fontSize: 14,
    color: colors.text.secondary,
  },
  form: {
    marginTop: 24,
    marginHorizontal: 24,
  },
  subForm: {
    marginTop: 16,
  },
  button: {
    marginTop: 24,
  },
  button2: {
    marginTop: 12,
  },
});
