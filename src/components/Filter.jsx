import { Search2Icon } from '@chakra-ui/icons'
import React from 'react'
import {
  Input,
  InputGroup,
  InputRightElement,
  Select,
  SimpleGrid,
} from '@chakra-ui/react'

export const Filter = ({ handleFilter }) => {
  return (
    <SimpleGrid w="full" columns={{ base: 1, md: 3 }} gap={2} p={2}>
      <InputGroup>
        <Input
          name="name"
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              handleFilter('name', e.target.value.toLowerCase())
            }
          }}
          type="text"
          placeholder="Search by name..."
        />
        <InputRightElement role="button">
          <Search2Icon />
        </InputRightElement>
      </InputGroup>
      <Select
        placeholder="Status - All"
        name="status"
        onChange={(e) => handleFilter('status', e.target.value.toLowerCase())}
      >
        <option value="alive">Alive</option>
        <option value="dead">Dead</option>
        <option value="unknown">Unknown</option>
      </Select>
      <Select
        placeholder="Gender - All"
        name="gender"
        onChange={(e) => handleFilter('gender', e.target.value.toLowerCase())}
      >
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="genderless">Genderless</option>
        <option value="unknown">Unknown</option>
      </Select>
    </SimpleGrid>
  )
}
