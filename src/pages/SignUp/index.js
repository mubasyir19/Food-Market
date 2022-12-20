import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from '../../utils/colors';
import {DummyUser} from '../../assets';
import Input from '../../components/atoms/Input';
import Button from '../../components/atoms/Button';

export default function SignUp({navigation}) {
  return (
    <View>
      <View style={styles.header}>
        <View style={styles.icon}>
          <Button type="icon" onPress={() => navigation.goBack()} />
        </View>
        <View style={styles.pages}>
          <Text style={styles.title}>Sign Up</Text>
          <Text style={styles.caption}>Register and eat</Text>
        </View>
      </View>
      <View style={styles.upload}>
        <View style={styles.photoProfile}>
          <Image source={DummyUser} style={styles.photo} />
        </View>
      </View>
      <View style={styles.form}>
        <View style={styles.subForm}>
          <Input label="Full Name" name="Type your full name" />
        </View>
        <View style={styles.subForm}>
          <Input label="Email Address" name="Type your email address" />
        </View>
        <View style={styles.subForm}>
          <Input label="Password" name="Type your passsword" />
        </View>
        <View style={styles.button}>
          <Button
            title="Continue"
            onPress={() => navigation.navigate('Address')}
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
  upload: {
    marginTop: 50,
    alignItems: 'center',
  },
  photoProfile: {
    borderWidth: 1,
    borderColor: colors.secondary,
    padding: 7,
    borderRadius: 210,
    borderStyle: 'dashed',
  },
  photo: {
    width: 90,
    height: 90,
    borderRadius: 90 / 2,
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
