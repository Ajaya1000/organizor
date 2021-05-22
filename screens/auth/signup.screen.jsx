import React from 'react';
import {SafeAreaView, ScrollView, Text, View} from 'react-native';
import LottieView from 'lottie-react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';
import {Button, TextInput} from 'react-native-paper';

import PANDA from '../../assests/signuppanda.json';

import {
  Title,
  ImageContainer,
  Content,
  Container,
  Form,
  SocialIcon,
} from './components';
// import TextInputComponent from '../../components/textinput.component';
import {FB, GOOGLE, TWITTER} from '../../assests/icon';

const SignupScreen = () => (
  <SafeAreaView>
    <Container>
      <ImageContainer>
        <LottieView source={PANDA} autoPlay loop resizeMode='contain' />
      </ImageContainer>
      <Content>
        <View>
          <Title>Signup</Title>
        </View>
        <View
          id='social-buttons'
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            paddingVertical: 20,
          }}>
          <SocialIcon source={FB} />
          <SocialIcon source={GOOGLE} />
          <SocialIcon source={TWITTER} />
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignSelf: 'center',
            marginBottom: 20,
          }}>
          <Text style={{color: '#6E7A90'}}>Or, register with email</Text>
        </View>
        <Form>
          <TextInput
            label='Email'
            keyboardType='email-address'
            left={<TextInput.Icon name='at' />}
          />
          <TextInput
            label='Name'
            keyboardType='default'
            left={<TextInput.Icon name='account-circle' />}
          />
          <TextInput
            label='Password'
            secureTextEntry
            right={<TextInput.Icon name='eye' />}
            left={<TextInput.Icon name='lock-outline' />}
          />
          <Button
            mode='contained'
            onPress={() => console.log('Pressed')}
            uppercase={false}
            color='#0663FA'
            style={{
              marginTop: 30,
              paddingVertical: 6,
              borderRadius: 10,
            }}>
            <Text>Register</Text>
          </Button>
        </Form>
      </Content>
    </Container>
  </SafeAreaView>
);
export default SignupScreen;
