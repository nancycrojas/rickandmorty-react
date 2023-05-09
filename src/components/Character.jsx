import {
  Circle,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Text,
  VStack,
} from '@chakra-ui/react'
import React from 'react'

export const Character = ({ character }) => {
  const { name, status, location, image, species } = character
  return (
    <SimpleGrid
      columns={2}
      templateColumns={{ base: '200px', md: '200px 1fr', sm: '300px' }}
      bg="#202329"
      rounded="lg"
      color="white"
      overflow="hidden"
    >
      <Image src={image} alt={name} roundedLeft="lg" />
      <VStack align="flex-start" p={2}>
        <Heading size="md" as="h6">
          {name}
        </Heading>
        <Flex align="center" gap={2}>
          <Circle
            size={3}
            bg={
              (status === 'Alive' && 'green.400') ||
              (status === 'Dead' && 'red.400') ||
              'white'
            }
          />
          <Text>
            {status} - {species}
          </Text>
        </Flex>
        <Text color="gray.300">Last known location:</Text>
        <Text>{location.name}</Text>
      </VStack>
    </SimpleGrid>
  )
}
