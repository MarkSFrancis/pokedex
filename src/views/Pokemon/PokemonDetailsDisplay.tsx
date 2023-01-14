import { PokemonResponse } from '@/lib/pocketbase/fetchPokemon'
import {
  Badge,
  Box,
  Code,
  extendTheme,
  Flex,
  Heading,
  Tag,
  Text,
  ThemeProvider,
  VStack,
  withDefaultColorScheme,
} from '@chakra-ui/react'
import { FC, useMemo } from 'react'

export interface PokemonDetailsDisplayProps {
  pokemon: PokemonResponse
}

export const PokemonDetailsDisplay: FC<PokemonDetailsDisplayProps> = (
  props
) => {
  const subTheme = useMemo(() => {
    const color = 'blue'
    return extendTheme(withDefaultColorScheme({ colorScheme: color }))
  }, [props.pokemon.type[0].name])

  return (
    <ThemeProvider theme={subTheme}>
      <Box
        bgGradient="linear(to-r, blue.300, blue.100)"
        minW="100%"
        minH="100vh"
        position="relative"
        pt={250}
      >
        <Flex justify="center" w="100%" position="absolute" top={50}>
          <img src={props.pokemon.imageUrl} height={250} width={250} />
        </Flex>
        <Box w="100%" background="white" borderTopRadius="10rem" pt={70}>
          <VStack spacing={4}>
            <Heading fontWeight="normal" size="3xl">
              {props.pokemon.name}
            </Heading>
            {props.pokemon.type.map((t) => (
              <Tag
                colorScheme="blue"
                borderRadius="full"
                variant="subtle"
                size="lg"
              >
                {t.name}
              </Tag>
            ))}
            <Text maxW="container.md">{props.pokemon.description}</Text>
            <Text whiteSpace="pre" fontFamily="monospace">
              {JSON.stringify(props.pokemon, null, 2)}
            </Text>
          </VStack>
        </Box>
      </Box>
    </ThemeProvider>
  )
}
