import React from 'react';
import {Text, View} from 'react-native';
import {
  ContainerComponent,
  ContentComponent,
  HeaderComponent,
} from '../components';

const SettingScreen = ({toggleSideMenu, isSideMenuOpen}) => (
  <ContainerComponent isSideMenuOpen={isSideMenuOpen}>
    <HeaderComponent
      toggleSideMenu={toggleSideMenu}
      isSideMenuOpen={isSideMenuOpen}
    />
    <ContentComponent>
      <Text>Setting Screen</Text>
    </ContentComponent>
  </ContainerComponent>
);
export default SettingScreen;
