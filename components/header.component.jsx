import React from 'react';
import {Appbar} from 'react-native-paper';

const HeaderComponent = ({toggleSideMenu, isSideMenuOpen}) => (
  <Appbar.Header style={{backgroundColor: 'transparent', elevation: 0}}>
    <Appbar.Action icon='menu' onPress={() => toggleSideMenu(1)} />
  </Appbar.Header>
);
export default HeaderComponent;
