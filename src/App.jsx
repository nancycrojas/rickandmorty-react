import {
  Stack,
  VStack,
  SimpleGrid,
  HStack,
  Button,
  Center,
  AlertIcon,
  AlertDescription,
  Alert,
  Spinner,
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons'

// axios
import axios from 'axios'

// components
import { Header } from './components/Header'
import { Character } from './components/Character'
import { Filter } from './components/Filter'

function App() {
  const [characters, setCharacters] = useState([])
  const [filter, setFilter] = useState({
    name: '',
    status: '',
    gender: '',
  })

  const [error, setError] = useState(false)
  const [spinner, setSpinner] = useState(true)
  const [page, setPage] = useState(1)

  useEffect(() => {
    setSpinner(true)
    setError(false)
    const getCharacters = async () => {
      try {
        const { data } = await axios.get(
          `https://rickandmortyapi.com/api/character?name=${filter.name}&status=${filter.status}&gender=${filter.gender}&page=${page}`
        )
        setCharacters(data)
      } catch (error) {
        setError(true)
      }
      setSpinner(false)
    }
    getCharacters()
  }, [filter, page])

  const handleFilter = (name, value) => {
    setFilter({ ...filter, [name]: value })
  }

  return (
    <VStack>
      <Stack
        w="full"
        py={16}
        bgGradient="linear(to-b, #acc95f, #010300)"
        color="white"
        textAlign="center"
      >
        <Header />
      </Stack>
      <Filter handleFilter={handleFilter} />
      {error && (
        <Alert>
          <Center>
            <AlertIcon />
            <AlertDescription>
              Ups hubo un error al obtener los personajes.
            </AlertDescription>
          </Center>
        </Alert>
      )}
      {spinner && (
        <Center h="50vh">
          <Spinner />
        </Center>
      )}
      {!spinner && !error && (
        <SimpleGrid spacing={5} columns={{ base: 1, md: 2, lg: 3 }} p={2}>
          {characters.results?.map((character) => (
            <Character key={character.id} character={character} />
          ))}
        </SimpleGrid>
      )}
      <HStack pb={4}>
        <Button
          onClick={() => setPage((prev) => prev - 1)}
          isDisabled={page === 1}
          colorScheme="blackAlpha"
        >
          <ChevronLeftIcon w={8} h={8} />
        </Button>
        <Button
          onClick={() => setPage((prev) => prev + 1)}
          isDisabled={page === characters.info?.pages}
          colorScheme="blackAlpha"
        >
          <ChevronRightIcon w={8} h={8} />
        </Button>
      </HStack>
    </VStack>
  )
}

export default App
