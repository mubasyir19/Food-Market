import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from '../../utils/colors';
import {
  DummyUser,
  DummyCherry,
  DummyBurger,
  IconStarActive,
  IconStar,
  DummyKari,
} from '../../assets';

export default function Home() {
  return (
    <View style={styles.body}>
      <View style={styles.header}>
        <View>
          <Text style={styles.title}>FoodMarket</Text>
          <Text style={styles.caption}>Let's get some food</Text>
        </View>
        <Image source={DummyUser} style={styles.photoProfile} />
      </View>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={styles.menu}>
        <View style={styles.card}>
          <View>
            <Image source={DummyCherry} style={styles.img} />
          </View>
          <View style={styles.desc}>
            <Text style={styles.food}>Cherry Healthy</Text>
            <View style={styles.rating}>
              <View style={styles.star}>
                <IconStarActive />
                <IconStarActive />
                <IconStarActive />
                <IconStarActive />
                <IconStar />
              </View>
              <Text style={styles.rate}>4.5</Text>
            </View>
          </View>
        </View>
        <View style={styles.card}>
          <View>
            <Image source={DummyBurger} style={styles.img} />
          </View>
          <View style={styles.desc}>
            <Text style={styles.food}>Burger Tamayo</Text>
            <View style={styles.rating}>
              <View style={styles.star}>
                <IconStarActive />
                <IconStarActive />
                <IconStarActive />
                <IconStarActive />
                <IconStar />
              </View>
              <Text style={styles.rate}>4.5</Text>
            </View>
          </View>
        </View>
        <View style={styles.card}>
          <View>
            <Image source={DummyCherry} style={styles.img} />
          </View>
          <View style={styles.desc}>
            <Text style={styles.food}>Burger Tamayo</Text>
            <View style={styles.rating}>
              <View style={styles.star}>
                <IconStarActive />
                <IconStarActive />
                <IconStarActive />
                <IconStarActive />
                <IconStar />
              </View>
              <Text style={styles.rate}>4.5</Text>
            </View>
          </View>
        </View>
        <View style={styles.gap}></View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  // body: {
  //   backgroundColor: 'white',
  //   flex: 1,
  // },
  header: {
    marginHorizontal: 24,
    marginTop: 30,
    marginBottom: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
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
  photoProfile: {
    height: 50,
    width: 50,
    justifyContent: 'center',
    borderRadius: 8,
  },
  card: {
    backgroundColor: '#FFFFFF',
    width: 200,
    borderRadius: 12,
    marginTop: 20,
    marginStart: 24,
    marginBottom: 20,
  },
  img: {
    width: 200,
    height: 110,
    borderRadius: 8,
  },
  desc: {
    marginVertical: 12,
    marginHorizontal: 12,
  },
  food: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: colors.text.primary,
  },
  rating: {
    flexDirection: 'row',
  },
  star: {
    flexDirection: 'row',
  },
  rate: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    color: colors.text.secondary,
    marginStart: 4,
    justifyContent: 'center',
  },
  gap: {
    marginEnd: 24,
  },
});
