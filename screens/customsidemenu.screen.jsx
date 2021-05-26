import React from 'react';
import {Pressable, Text, View} from 'react-native';
import {
  Avatar as PaperAvatar,
  Button,
  IconButton,
  List,
} from 'react-native-paper';
import styled from 'styled-components';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import IMG from '../assests/image/me.jpg';

const Root = styled(View)`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background-color: #051d55;
`;

const Content = styled(View)`
  flex: 1;
  padding-right: 30%;
  padding-top: 25%;
  padding-left: 30px;
  flex-direction: column;
`;

const ClosedSideMenuButtonView = styled(View)`
  flex-direction: row;
  justify-content: flex-end;
`;

const StyledCloseSideMenuButton = styled(Pressable).attrs(() => ({
  android_ripple: {
    color: '#ffffff50',
    borderless: true,
    radius: 25,
  },
}))`
  border-radius: 50px;
  transform: rotate(-90deg);
  border-width: 1.5px;
  border-color: #2c4787;
`;

const AvatarView = styled(View)`
  flex-direction: row;
  justify-content: flex-start;
`;

const AvatarContent = styled(View)`
  padding: 3px;
  border-color: #ec77fd;
  border-width: 3px;
  border-radius: 1000px;
  overflow: hidden;
  border-top-color: #2c4787;
  border-bottom-color: #2c4787;
`;

const TitleView = styled(View)`
  flex-direction: column-reverse;
  align-items: flex-start;
`;

const TitleContent = styled(Text)`
  font-size: 50px;
  color: #fff;
  text-transform: capitalize;
`;

const NavigatorMenuView = styled(View)`
  flex-direction: column;
  align-items: flex-start;
  margin-top: 30px;
`;

const NavigationMenuItemView = styled(Pressable).attrs(() => ({
  android_ripple: {
    color: '#2c4787',
    borderless: false,
  },
}))`
  width: 100%;
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
  padding: 5px;
`;

const NavigationMenuItemIcon = styled(Icon).attrs(() => ({
  size: 30,
  color: '#2c4787',
}))``;

const NavigationMenuItemLabel = styled(Text)`
  padding-left: 30px;
  font-size: 20px;
  color: #fff;
`;

const CloseSideMenuButton = props => (
  <StyledCloseSideMenuButton {...props}>
    <IconButton icon='apple-keyboard-control' color='#fff' />
  </StyledCloseSideMenuButton>
);

const Avatar = ({src}) => (
  <AvatarView>
    <AvatarContent>
      <PaperAvatar.Image source={src} size={100} />
    </AvatarContent>
  </AvatarView>
);

const Title = ({text}) => {
  let textArray = [];
  if (typeof text === 'string') textArray = text.split(' '); // split by spaces

  return (
    <TitleView>
      {textArray.map(item => (
        <TitleContent key={item}>{item}</TitleContent>
      ))}
    </TitleView>
  );
};

const NavigationMenuItem = ({name, icon, label, onPress}) => (
  <NavigationMenuItemView onPress={() => onPress(name)}>
    <NavigationMenuItemIcon name={icon} />
    <NavigationMenuItemLabel>{label}</NavigationMenuItemLabel>
  </NavigationMenuItemView>
);

// <Button title='First Item' icon={icon} onPress={() => onPress(name)}>
//   {label}
// </Button>
const NavigatorMenu = props => {
  const {navigate, navigationRef, toggleSideMenu} = props;

  const handlePress = (name, params) => {
    navigate(name, params);
    toggleSideMenu(0);
  };

  return (
    <NavigatorMenuView>
      <NavigationMenuItem
        name='Home'
        icon='home'
        label='Home'
        onPress={handlePress}
      />
      <NavigationMenuItem
        name='Setting'
        icon='cog'
        label='Settings'
        onPress={handlePress}
      />
    </NavigatorMenuView>
  );
};

const CustomSideMenu = props => {
  const {navigate, toggleSideMenu, navigationRef, ...rest} = props;

  const handlePress = () => {
    toggleSideMenu(0);
  };

  return (
    <Root {...rest}>
      <Content>
        <ClosedSideMenuButtonView>
          <CloseSideMenuButton onPress={handlePress} />
        </ClosedSideMenuButtonView>
        <Avatar src={IMG} />
        <Title text='Ajaya Mati' />
        <NavigatorMenu
          navigate={navigate}
          navigationRef={navigationRef}
          toggleSideMenu={toggleSideMenu}
        />
      </Content>
    </Root>
  );
};
export default CustomSideMenu;
