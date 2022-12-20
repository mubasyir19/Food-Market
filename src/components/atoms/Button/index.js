import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {colors} from '../../../utils/colors';
import IconOnly from './IconOnly';

export default function Button({type, title, onPress}) {
  if (type === 'icon') {
    return <IconOnly onPress={onPress} />;
  }
  return (
    <TouchableOpacity style={styles.container(type)} onPress={onPress}>
      <Text style={styles.text(type)}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: type => ({
    height: 45,
    borderRadius: 8,
    backgroundColor: type === 'secondary' ? colors.secondary : colors.primary,
  }),
  text: type => ({
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    textAlign: 'center',
    paddingVertical: 12,
    color: type === 'secondary' ? colors.white : colors.text.primary,
  }),
});
