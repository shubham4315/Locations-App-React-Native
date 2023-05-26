import {
  Badge,
  Box,
  Card,
  Flex,
  HStack,
  Image,
  Pressable,
  Spacer,
  Text,
  VStack,
} from 'native-base';
import React from 'react';

interface PersonCardProps {
  status: string;
  firstName: string;
  lastName: string;
  location: string;
  backgroundImage: any;
  onPress?: () => void;
}

function PersonCard({
  status,
  firstName,
  lastName,
  location,
  backgroundImage,
  onPress,
}: PersonCardProps) {
  return (
    <Pressable onPress={onPress}>
      {({isHovered, isFocused, isPressed}) => {
        return (
          <Box
            shadow="1"
            bg={
              isPressed
                ? 'coolGray.200'
                : isHovered
                ? 'coolGray.200'
                : 'coolGray.100'
            }
            rounded="16">
            <Image
              source={backgroundImage}
              style={{height: 200}}
              alt=""
              rounded={16}
            />
            <VStack p={5}>
              <HStack alignItems="center">
                <Badge
                  colorScheme="green"
                  _text={{
                    color: 'white',
                  }}
                  variant="solid"
                  rounded="4">
                  {status}
                </Badge>
                <Spacer />
                <Text fontSize={10} color="coolGray.800">
                  since 2 1/2 years
                </Text>
              </HStack>
              <Text
                color="coolGray.800"
                mt="3"
                fontWeight="medium"
                fontSize="xl">
                {firstName} {lastName}
              </Text>
              <Text color="coolGray.600" fontWeight="medium" fontSize="sm">
                {location}
              </Text>
            </VStack>
          </Box>
        );
      }}
    </Pressable>
  );
}

export default PersonCard;
