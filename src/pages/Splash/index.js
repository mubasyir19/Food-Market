import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {ILLogo} from '../../assets';
import {colors} from '../../utils/colors';

export default function Splash({navigation}) {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('SignIn');
    }, 3000);
  }, [navigation]);
  return (
    <View style={styles.pages}>
      <ILLogo />
      <Text style={styles.title}>FoodMarket</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  pages: {
    backgroundColor: colors.primary,
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 32,
    fontFamily: 'Poppins-Medium',
    color: colors.text.primary,
    marginTop: 30,
  },
});
