import { Heading, VStack } from '@chakra-ui/react'
export const Header = () => {
  return (
    <VStack>
      <Heading size={{ base: '3xl', sm: '4xl' }} as="h1" pl={4} pr={4}>
        Rick and Morty API
      </Heading>
      <Heading size={{ base: 'xl', sm: '2xl' }} as="h2" pl={4} pr={4}>
        Práctica UseEffect
      </Heading>
    </VStack>
  )
}
