import * as React from "react"
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  theme,
  Center,
  Grid,
  Container,
  Flex,
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "./ColorModeSwitcher"
import Header from "./components/Header"
import Body from "./components/Body"
// 
export const App = () => (
  <ChakraProvider theme={theme}>
    <Box textAlign="center" fontSize="xl">
      <Flex>
      <Header />
      
      </Flex>
      
      <Grid minH="90vh" p={3}>
        <Body />
      </Grid>
    </Box>
  </ChakraProvider>
)
