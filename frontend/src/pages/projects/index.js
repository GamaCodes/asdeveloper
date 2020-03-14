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

function Projects() {
  return (
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
                Inspirado en los juegos de disparos y en la saga de Star Wars, nace STARHACK.
                <br></br>
                * Incluye batalla con el tema especial Ironhack.        

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
                        Presentación
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
                MANE Te ayuda a gestionar cualquier tipo de evento con un método de lista simple. La idea nace de la necesidad de ayudar a cualquiera a hacer su propio evento.
                </Box>
                <Flex justify="center" mt={5} mb={4}>
                  <ButtonGroup spacing={5}>
                    <Link href="https://maneironhack.herokuapp.com/" isExternal>
                      <Button variantColor="c3" size="sm">
                        Video  
                      </Button>
                    </Link>
                    <Link href="https://slides.com/adrianalexisacevedoarmenta/deck-d78fdf/fullscreen#/" isExternal>
                      <Button variantColor="c3" size="sm">
                        Presentación
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
                Integral Office es una ERP, o en otras palabras un sistema de planificacion de recursos empresariales, se crea con el fin de poder llevar un mejor control y gestion de negocios.
                </Box>
                <Flex justify="center" mt={5} mb={4}>
                  <ButtonGroup spacing={5}>
                    <Link href="https://integral-office.netlify.com/" isExternal>
                      <Button variantColor="c3" size="sm">
                        Video
                      </Button>
                    </Link>
                    <Link href="https://slides.com/araujo-code/deck-70b676/fullscreen#/" isExternal>
                      <Button variantColor="c3" size="sm">
                        Presentación
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

  );
}

export default Projects;