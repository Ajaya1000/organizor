import React from 'react';
import {Image, ScrollView, Text, View} from 'react-native';
import styled from 'styled-components';

export const Title = styled(Text)`
  color: #172b4d;
  font-size: 40px;
`;

export const ImageContainer = styled(View)`
  height: 40%;
`;
export const Content = styled(View)`
  /* background-color: gray; */
  height: 60%;
  padding-bottom: 20px;
`;
export const Container = styled(View)`
  width: 90%;
  justify-content: center;
  margin-left: 5%;
  height: 100%;
`;

export const Form = styled(ScrollView)``;

const SocialStyledView = styled(View)`
  padding: 6px 25px;
  border-width: 1px;
  border-color: gray;
  border-radius: 10px;
`;
export const SocialIcon = ({source}) => (
  <SocialStyledView>
    <Image source={source} />
  </SocialStyledView>
);
