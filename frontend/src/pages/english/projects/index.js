import React from 'react';

import {
  Stack,
  Image,
  Box,
  Flex,
  Link,
  Button,
  ButtonGroup
} from "@chakra-ui/core";

import English from '../../../components/Navbar'
function Projects() {
  return (
    <>
    <English/>
    <Stack
      backgroundImage= "url('/Background.jpg')"
      backgroundSize= {["contain","contain","cover","cover"]}
      width= "100vw"
      height= {["150vh", "250vh", "300vh", "250vh"]}
      alignItems="center"
    >
        <Flex fontSize={["5vw","3vw"]} color="white" mt={["10vh", "20vh"]}>
          <p>Star Hack</p>
        </Flex>
        <Box w={["80vw", "50vw"]} borderWidth="1px" rounded="lg" overflow="hidden" bg="white">
            <Flex justify="center">
              <Image src="../LogoStarHack.png" alt="star hack" w={["30vw", "20vw"]} mt="2vh"/>
            </Flex>
            <Box p="4">

                <Box
                fontWeight="semibold"
                as="h4"
                lineHeight="tight"

                >
                Inspired by shooting games and the Star Wars saga, STARHACK is born.
                <br></br>
                * Includes battle with the special Ironhack theme.      

                </Box>
                <Flex justify="center" mt={5} mb={4}>
                  <ButtonGroup spacing={5}>
                    <Link href="https://asdeveloper-app.github.io/Star-Hack/" isExternal>
                      <Button variantColor="c3" size="sm">
                        Video
                      </Button>
                    </Link>
                    <Link href="https://slides.com/araujo-code/deck/fullscreen#/" isExternal>
                      <Button variantColor="c3" size="sm">
                        Slides
                      </Button>
                    </Link>
                    <Link href="https://asdeveloper-app.github.io/Star-Hack/" isExternal>
                      <Button variantColor="c3" size="sm">
                        Demo
                      </Button>
                    </Link>
                  </ButtonGroup>
                </Flex>

            </Box>
        </Box>

        <Flex fontSize={["5vw","3vw"]} color="white" mt="4vh">
          <p>Mane</p>
        </Flex>
        <Box w={["80vw", "50vw"]} borderWidth="1px" rounded="lg" overflow="hidden" bg="white">
            <Flex justify="center">
              <Image src="../mane.png" alt="star hack" w={["30vw", "20vw"]} mt="2vh"/>
            </Flex> 
            <Box p="4">

                <Box
                fontWeight="semibold"
                as="h4"
                lineHeight="tight"
                >
                  MANE Helps you manage any type of event with a simple list method. The idea was born from the need to help anyone to make their own event.                </Box>
                <Flex justify="center" mt={5} mb={4}>
                  <ButtonGroup spacing={5}>
                    <Link href="https://maneironhack.herokuapp.com/" isExternal>
                      <Button variantColor="c3" size="sm">
                        Video  
                      </Button>
                    </Link>
                    <Link href="https://slides.com/adrianalexisacevedoarmenta/deck-d78fdf/fullscreen#/" isExternal>
                      <Button variantColor="c3" size="sm">
                        Slides
                      </Button>
                    </Link>
                    <Link href="https://maneironhack.herokuapp.com/" isExternal>
                      <Button variantColor="c3" size="sm">
                        Demo  
                      </Button>
                    </Link>
                  </ButtonGroup>
                </Flex>

            </Box>
        </Box>

        <Flex fontSize={["5vw","3vw"]} color="white" mt="4vh">
          <p>Integral Office</p>
        </Flex>
          <Box w={["80vw", "50vw"]} borderWidth="1px" rounded="lg" overflow="hidden" bg="white" >
            <Flex justify="center">
              <Image src="../iologo.png" alt="star hack" w={["30vw", "20vw"]} mt="2vh"/>
            </Flex>
            <Box p="4">

                <Box
                fontWeight="semibold"
                as="h4"
                lineHeight="tight"
                >
                Integral Office is an ERP, or in other words an enterprise resource planning system, it is created in order to be able to better control and manage business.                </Box>
                <Flex justify="center" mt={5} mb={4}>
                  <ButtonGroup spacing={5}>
                    <Link href="https://integral-office.netlify.com/" isExternal>
                      <Button variantColor="c3" size="sm">
                        Video
                      </Button>
                    </Link>
                    <Link href="https://slides.com/araujo-code/deck-70b676/fullscreen#/" isExternal>
                      <Button variantColor="c3" size="sm">
                        Slides
                      </Button>
                    </Link>
                    <Link href="https://integral-office.netlify.com/" isExternal>
                      <Button variantColor="c3" size="sm">
                        Demo
                      </Button>
                    </Link>
                  </ButtonGroup>
                </Flex>

            </Box>
        </Box>
 
    </Stack>
    </>

  );
}

export default Projects;