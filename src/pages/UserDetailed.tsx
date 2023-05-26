import {Text, VStack} from 'native-base';
import React from 'react';
import HeadingWithBackButton from '../components/HeadingWithBackButton';

function UserDetailed({route, navigation}: any) {
  const {firstName, lastName, location, status} = route.params;
  const user = {
    firstName: 'Christoph',
    lastName: 'Ertle',
    location: 'Finsterwalde, Germany',
    status: 'Employed',
  };
  return (
    <VStack space={4} padding={{base: 6}}>
      <HeadingWithBackButton
        navigation={navigation}
        heading={firstName + ' ' + lastName}
      />
      <Text fontSize="xl" fontWeight="bold">
        {status}
      </Text>
      <Text fontSize="xl" fontWeight="bold">
        {location}
      </Text>
    </VStack>
  );
}

export default UserDetailed;
