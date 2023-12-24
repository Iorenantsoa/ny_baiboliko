import * as React from 'react';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import {
  HeaderButton,
} from 'react-navigation-header-buttons'; 

export const MaterialHeaderButton = (props) => (
  <HeaderButton IconComponent={MaterialIcons} iconSize={25} {...props} />
);