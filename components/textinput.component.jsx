import React from 'react';
import {View} from 'react-native';
import {TextInput} from 'react-native-paper';
import styled from 'styled-components';

const StyledTextInputComponent = styled(TextInput)``;

const Affix = ({name, text}) =>
  name ? <TextInput.Icon name={name} /> : <TextInput.Affix text={text} />;

// {
//   if (name) return <TextInput.Icon name={name} />;
//   if (text) return <TextInput.Affix text={text} />;
//   return undefined;
// };

const TextInputComponent = props => {
  const {leftText, rightText, leftIcon, rightIcon, ...rest} = props;

  return (
    <View>
      <Affix name={leftIcon} text={leftText} />
      <StyledTextInputComponent
        editable
        left={<Affix name={leftIcon} text={leftText} />}
        right={<Affix name={rightIcon} text={rightText} />}
        {...rest}
      />
    </View>
  );
};

export default TextInputComponent;
