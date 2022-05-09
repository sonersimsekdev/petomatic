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
import Body from "./components/Body"
// 
export const App = () => (
  <ChakraProvider theme={theme}>
    <Body/>
  </ChakraProvider>
)
