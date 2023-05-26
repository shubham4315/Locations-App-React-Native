import {ArrowBackIcon, Center, Pressable} from 'native-base';
import React from 'react';

interface BackButtonProps {
  navigation: any;
}

function BackButton({navigation}: BackButtonProps) {
  return (
    <Pressable onPress={() => navigation.goBack()}>
      <Center size={7} bg="gray.300" rounded="md">
        <ArrowBackIcon size={4} color="black" />
      </Center>
    </Pressable>
  );
}

export default BackButton;
