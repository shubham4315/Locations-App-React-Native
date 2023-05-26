import {AddIcon, Box, Fab, ScrollView, Text, VStack} from 'native-base';
import React from 'react';
import PersonCard from '../components/PersonCard';
import backgroundImage from '../../static/images/freiburg-city.jpeg';

export default function Home({navigation}: any) {
  return (
    <Box>
      <ScrollView
        // hide scrollbar
        showsVerticalScrollIndicator={false}>
        <VStack
          space={8}
          padding={{
            base: 6,
          }}
          justifyContent="space-between"
          flex={1}>
          <Text fontSize="2xl" fontWeight="bold">
            Dashboard
          </Text>

          <VStack alignItems="flex-start" height={'100%'} space={6}>
            <PersonCard
              status="Student"
              firstName="Nils"
              lastName="Ertle"
              location="Freiburg, Germany"
              backgroundImage={backgroundImage}
              onPress={() =>
                // TODO: pass params
                navigation.navigate('UserDetailed', {
                  firstName: 'Nils',
                  lastName: 'Ertle',
                  location: 'Freiburg, Germany',
                  status: 'Student',
                })
              }
            />
            <PersonCard
              status="Student"
              firstName="Nils"
              lastName="Ertle"
              location="Freiburg, Germany"
              backgroundImage={backgroundImage}
            />
            <PersonCard
              status="Student"
              firstName="Nils"
              lastName="Ertle"
              location="Freiburg, Germany"
              backgroundImage={backgroundImage}
            />
            <PersonCard
              status="Student"
              firstName="Nils"
              lastName="Ertle"
              location="Freiburg, Germany"
              backgroundImage={backgroundImage}
            />
          </VStack>
        </VStack>
      </ScrollView>
      <Fab
        onPress={() => navigation.navigate('AddEntry')}
        renderInPortal={false}
        shadow={4}
        size="lg"
        icon={<AddIcon />}
        label="Add User"
      />
    </Box>
  );
}
