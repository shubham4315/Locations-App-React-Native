import {
  ArrowBackIcon,
  Box,
  Center,
  HStack,
  Input,
  Pressable,
  Text,
  VStack,
} from 'native-base';
import React from 'react';
import BackButton from '../components/BackButton';
import HeadingWithBackButton from '../components/HeadingWithBackButton';

function AddEntry({navigation}: any) {
  return (
    <VStack
      space={4}
      padding={{
        base: 6,
      }}>
      <HeadingWithBackButton navigation={navigation} heading="Add User" />
      <Input placeholder="Firstname" />
      <Input placeholder="Lastname" />
      <Input placeholder="Year" />
      <Input placeholder="Location" />
    </VStack>
  );
}

export default AddEntry;
