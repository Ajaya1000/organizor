import React from 'react';
import {Text} from 'react-native';
import {
  ContainerComponent,
  ContentComponent,
  HeaderComponent,
} from '../components';

const HomeScreen = ({toggleSideMenu, isSideMenuOpen}) => (
  <ContainerComponent isSideMenuOpen={isSideMenuOpen}>
    <HeaderComponent
      toggleSideMenu={toggleSideMenu}
      isSideMenuOpen={isSideMenuOpen}
    />
    <ContentComponent>
      <Text>Home Screen</Text>
    </ContentComponent>
  </ContainerComponent>
);
export default HomeScreen;
