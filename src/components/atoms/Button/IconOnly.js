import {TouchableOpacity} from 'react-native';
import React from 'react';
import {IconBack} from '../../../assets';

export default function IconOnly({onPress}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <IconBack />
    </TouchableOpacity>
  );
}
