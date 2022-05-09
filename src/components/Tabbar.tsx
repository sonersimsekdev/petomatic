import React from 'react'
import {
    Tabs,
    TabList,
    TabPanels,
    Tab,
    TabPanel,
    Flex,
    Box,
} from '@chakra-ui/react'
import Fish from '../Tabs/Fish'
import Dog from '../Tabs/Dog'
import Bird from '../Tabs/Bird'
import Cat from '../Tabs/Cat'
export default function Tabbar() {
    return (
        <Flex justifyContent={"center"} fontSize={'2xl'}>
            <Box>
                <Tabs variant='enclosed'>
                    <TabList fontSize={'2xl'}>
                        <Tab>Balık</Tab>
                        <Tab>Kedi</Tab>
                        <Tab>Köpek</Tab>
                        <Tab>Kuş</Tab>
                    </TabList>

                    <TabPanels>
                        <TabPanel>
                           <Fish />
                        </TabPanel>
                        <TabPanel>
                            <Cat />
                        </TabPanel>
                        <TabPanel>
                            <Dog />
                        </TabPanel>
                        <TabPanel>
                            <Bird />
                        </TabPanel>
                    </TabPanels>
                </Tabs>
                </Box>
        </Flex>
    )
}
