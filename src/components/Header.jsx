import { Heading, VStack } from '@chakra-ui/react'
export const Header = () => {
  return (
    <VStack>
      <Heading size="4xl" as="h1">
        Rick and Morty API
      </Heading>
      <Heading size="2xl" as="h2">
        Práctica UseEffect
      </Heading>
    </VStack>
  )
}
