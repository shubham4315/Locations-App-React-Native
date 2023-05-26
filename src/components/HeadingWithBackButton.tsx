import {HStack, Text} from 'native-base';
import React from 'react';
import BackButton from './BackButton';

interface Props {
  navigation: any;
  heading: string;
}

function HeadingWithBackButton({navigation, heading}: Props) {
  return (
    <HStack space={3} alignItems="center">
      <BackButton navigation={navigation} />
      <Text fontSize="2xl" fontWeight="bold">
        {heading}
      </Text>
    </HStack>
  );
}

export default HeadingWithBackButton;
