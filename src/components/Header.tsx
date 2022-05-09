import React from 'react'
import {
    Box,
    Center,
    Container,
    Flex,
    Text,
    Heading,
    Tabs,
    TabList,
    TabPanels,
    Tab,
    TabPanel
} from "@chakra-ui/react"
import { ColorModeSwitcher } from '../ColorModeSwitcher'

export default function Header() {
    return (
        <Flex bg={'gray.700'} color={'gray.50'} height={'10vh'} width={'100vw'} justifyContent={'space-between'} alignItems={'center'}>
            <Box>
                <Box>
                    <Center>
                        <Heading fontSize='xl'>PETOMATİC</Heading>
                    </Center>

                </Box>
                <Box>
                    <Center>
                        <Text fontSize='lg'>A useful, simple, pet animal farming management tool.</Text>
                    </Center>
                </Box>
            </Box>
            <Flex >
                <Box>
                    <ColorModeSwitcher justifySelf="flex-end" />
                </Box>
            </Flex>
        </Flex>
    )
}
