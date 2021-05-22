import React from 'react';
import {SafeAreaView, ScrollView, Text, View} from 'react-native';
import LottieView from 'lottie-react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';
import {Button, TextInput} from 'react-native-paper';

import PANDA from '../../assests/loginpanda.json';
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

const LoginScreen = () => (
  <SafeAreaView>
    <Container>
      <ImageContainer>
        <LottieView source={PANDA} autoPlay loop resizeMode='contain' />
      </ImageContainer>
      <Content>
        <ScrollView>
          <Title>Login</Title>
          <Form>
            <TextInput
              label='Email'
              keyboardType='email-address'
              left={<TextInput.Icon name='at' />}
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
              <Text>Login</Text>
            </Button>
            <View style={{flexDirection: 'row', alignSelf: 'flex-end'}}>
              <Button uppercase={false} mode='text' color='#0663FA' compact>
                <Text>Forget password?</Text>
              </Button>
            </View>

            <View style={{flexDirection: 'row', alignSelf: 'center'}}>
              <Text style={{color: '#6E7A90'}}>Or, login with</Text>
            </View>
            <View
              id='social-buttons'
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                paddingVertical: 20,
              }}>
              {/* make these button with ripple effect */}
              <SocialIcon source={FB} />
              <SocialIcon source={GOOGLE} />
              <SocialIcon source={TWITTER} />
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignSelf: 'center',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{color: '#434852'}}>New to Organizor?</Text>
              <Button uppercase={false} mode='text' color='#0663FA' compact>
                <Text>Register</Text>
              </Button>
            </View>
          </Form>
        </ScrollView>
      </Content>
    </Container>
  </SafeAreaView>
);
export default LoginScreen;
