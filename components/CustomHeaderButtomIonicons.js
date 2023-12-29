import * as React from 'react'; 
import { Ionicons } from '@expo/vector-icons';
import {
  HeaderButton,
} from 'react-navigation-header-buttons'; 

export const CustomHeaderButtomIonicons = (props) => (
  <HeaderButton IconComponent={Ionicons} iconSize={25} {...props} />
);