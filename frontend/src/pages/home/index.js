import React from 'react';

import {
  Stack,
  Image,
  Box,
  SimpleGrid,
  Flex,
  Link
} from "@chakra-ui/core";

import English from '../../components/Navbar'

function Home({ history }) {
  const go = path => history.push(path)
  return (
    <>
    <English/>
    <Stack
      backgroundImage= "url('/Background.jpg')"
      backgroundSize= {["contain","contain","cover","cover"]}
      width= "100vw"
      height= {["70vh", "100vh", "150vh", "85vh"]}
      alignItems="center"
    >
      <Image src="../AS developer.png" alt="A|S developer" w={["30vw", "30vw", "20vw", "20vw", ]} mt="10vh" />

      <Box
        mt="1"
        fontWeight="semibold"
        as="h4"
        lineHeight="tight"
        w={["75vw", "50vw", "50vw", "50vw"]}
        color="white"
      >
        
        <Flex fontSize={["5vw", "6vw", "2vw"]} color="white" mt="4vh" mb="2vh" justify="center">
          <p>Select Language</p>
        </Flex>
        <hr></hr>
        <SimpleGrid columns={2} justify="space-around">
          <Box>
            <Flex justify="center">
              <Link onclick= "window.scrollTo(0, 0)">
                <Image onClick={() => go('/en')} src="../usa.png" alt="English" w={["30vw", "30vw", "20vw", "5vw"]} mt="1vh" />
              </Link>
            </Flex>
            <p>English</p>
            <Stack isInline justify="center">
              <Box  size={["10vw", "2vw"]} color="white"/>
            </Stack>
          </Box>
          <Box>
            <Flex justify="center">
              <Link>
                <Image onClick={() => go('/es')} src="../mex.png" alt="Español" w={["30vw", "30vw", "20vw", "5vw", ]} mt="1vh" />
              </Link>
            </Flex>
            <p>Español</p>
          </Box>
         </SimpleGrid>
        <hr></hr>

        </Box>

      




    </Stack>
    </>

  );
}

export default Home;
