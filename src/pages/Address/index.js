import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Button from '../../components/atoms/Button';
import {colors} from '../../utils/colors';
import Input from '../../components/atoms/Input';

export default function Address({navigation}) {
  return (
    <View>
      <View style={styles.header}>
        <View style={styles.icon}>
          <Button type="icon" onPress={() => navigation.goBack()} />
        </View>
        <View style={styles.pages}>
          <Text style={styles.title}>Address</Text>
          <Text style={styles.caption}>Make sure it's valid</Text>
        </View>
      </View>
      <View style={styles.form}>
        <View style={styles.subForm}>
          <Input label="Phone No." name="Type your phone number" />
        </View>
        <View style={styles.subForm}>
          <Input label="Address" name="Type your address" />
        </View>
        <View style={styles.subForm}>
          <Input label="House No." name="Type your house number" />
        </View>
        <View style={styles.subForm}>
          <Input label="City" name="Type your city" />
        </View>
        <View style={styles.button}>
          <Button
            title="Sign Up Now"
            onPress={() => navigation.navigate('MainApp')}
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
    flexDirection: 'row',
  },
  icon: {
    justifyContent: 'center',
  },
  pages: {
    marginStart: 26,
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
});
