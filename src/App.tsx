import * as React from "react"
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  theme,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  SimpleGrid,
  WrapItem,
  Center,
  Wrap,
  Container,
  Grid,
  GridItem,
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "./ColorModeSwitcher"
import { Deneme } from "./Deneme"
import { AirbnbExample } from "./AirbnbExample"
export const App = () => (
  <ChakraProvider theme={theme}>
    <Box textAlign="center" fontSize="xl">
      <Grid minH="100vh" p={3}>
        <ColorModeSwitcher justifySelf="flex-end" />

       

        <Container><Center> <Wrap>
          <WrapItem>
            <Center w='180px' h='80px' bg='red.200'>
              Box 1
            </Center>
          </WrapItem>
          <WrapItem>
            <Center w='180px' h='80px' bg='green.200'>
              Box 2
            </Center>
          </WrapItem>
          <WrapItem>
            <Center w='180px' h='80px' bg='tomato'>
              Box 3
            </Center>
          </WrapItem>
          <WrapItem>
            <Center w='180px' h='80px' bg='blue.200'>
              Box 4
            </Center>
          </WrapItem>
        </Wrap></Center></Container>

        <Container><Center></Center></Container>


        <Container><Center><Grid templateColumns='repeat(5, 1fr)' gap={6}>
          <GridItem w='100%' h='10' bg='black.500' />
          <GridItem w='100%' h='10' bg='black.500' />
          <GridItem w='100%' h='10' bg='black.500' />
          <GridItem w='100%' h='10' bg='black.500' />
          <GridItem w='100%' h='10' bg='black.500' />
        </Grid></Center></Container>

        <Container>
          <Center><Wrap >

            <WrapItem> <Box> <AirbnbExample /></Box></WrapItem>
            <WrapItem> <Box> <AirbnbExample /></Box></WrapItem>
            <WrapItem> <Box> <AirbnbExample /></Box></WrapItem>
            <WrapItem> <Box> <AirbnbExample /></Box></WrapItem>
            <WrapItem> <Box> <AirbnbExample /></Box></WrapItem>
            <WrapItem> <Box> <AirbnbExample /></Box></WrapItem>
            <WrapItem> <Box> <AirbnbExample /></Box></WrapItem>
            <WrapItem> <Box> <AirbnbExample /></Box></WrapItem>
            <WrapItem> <Box> <AirbnbExample /></Box></WrapItem>
            <WrapItem> <Box> <AirbnbExample /></Box></WrapItem>


          </Wrap></Center>
        </Container>





      </Grid>
    </Box>
  </ChakraProvider>
)
