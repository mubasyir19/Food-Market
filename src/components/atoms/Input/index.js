import {StyleSheet, Text, View, TextInput} from 'react-native';
import React from 'react';
import {colors} from '../../../utils/colors';

export default function Input({label, name}) {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInput style={styles.input} placeholder={name} />
    </View>
  );
}

const styles = StyleSheet.create({
  label: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    color: colors.text.primary,
  },
  input: {
    height: 40,
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 9,
    borderRadius: 8,
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
  },
});
