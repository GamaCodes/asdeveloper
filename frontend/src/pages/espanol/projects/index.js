import React from 'react';

import {
  Stack,
  Image,
  Box,
  Flex,
  Link,
  Button,
  ButtonGroup,
  Breadcrumb,
  BreadcrumbItem
} from "@chakra-ui/core";

import Espanol from '../../../components/Navbar2'

const scrollToRef = () => window.scrollTo(0, 0)  

function Proyectos({history}) {
  const go = path => history.push(path)
  return (
    <>
    <Espanol/>
    <Stack
      backgroundImage= "url('/Background.jpg')"
      backgroundSize= {["contain","contain","cover","cover"]}
      width= "100vw"
      alignItems="center"
    >
        <Flex fontSize={["5vw","3vw"]} color="white" mt={["10vh", "20vh"]}>
          <p>Star Hack</p>
        </Flex>
        <Box w={["80vw", "50vw"]} borderWidth="1px" rounded="lg" overflow="hidden" bg="white">
            <Flex justify="center">
              <Image src="../LogoStarHack.png" alt="StarHack" w={["30vw", "20vw"]} mt="2vh"/>
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
                  <ButtonGroup spacing={1}>
                    <Link href="https://asdeveloper-app.github.io/Star-Hack/" isExternal>
                      <Button variantColor="c3" size="sm" mb={2}>
                        Video
                      </Button>
                    </Link>
                    <Link href="https://slides.com/araujo-code/deck/fullscreen#/" isExternal>
                      <Button variantColor="c3" size="sm" mb={2}>
                        Presentación
                      </Button>
                    </Link>
                    <Link href="https://asdeveloper-app.github.io/Star-Hack/" isExternal>
                      <Button variantColor="c3" size="sm" mb={2}>
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
              <Image src="../mane.png" alt="Mane" w={["30vw", "20vw"]} mt="2vh"/>
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
                  <ButtonGroup spacing={1}>
                    <Link href="https://maneironhack.herokuapp.com/" isExternal>
                      <Button variantColor="c3" size="sm" mb={2}>
                        Video  
                      </Button>
                    </Link>
                    <Link href="https://slides.com/adrianalexisacevedoarmenta/deck-d78fdf/fullscreen#/" isExternal>
                      <Button variantColor="c3" size="sm" mb={2}>
                        Presentación
                      </Button>
                    </Link>
                    <Link href="https://maneironhack.herokuapp.com/" isExternal>
                      <Button variantColor="c3" size="sm" mb={2}>
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
              <Image src="../iologo.png" alt="IntegralOffice" w={["30vw", "20vw"]}mt="2vh"/>
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
                  <ButtonGroup spacing={1}>
                    <Link href="https://youtu.be/_BWe5pw9KFc/" isExternal>
                      <Button variantColor="c3" size="sm" mb={2}>
                        Video
                      </Button>
                    </Link>
                    <Link href="https://slides.com/araujo-code/deck-70b676/fullscreen#/" isExternal>
                      <Button variantColor="c3" size="sm" mb={2}>
                        Presentación
                      </Button>
                    </Link>
                    <Link href="https://integral-office.netlify.com/" isExternal>
                      <Button variantColor="c3" size="sm" mb={2}>
                        Demo
                      </Button>
                    </Link>
                  </ButtonGroup>
                </Flex>

            </Box>
        </Box>
        <br></br>
        <br></br>
        <br></br>
    </Stack>

    <Breadcrumb 
      separator="  "   
      spacing={3} 
      bottom={0}
      zIndex="99"
      textAlign="center"
      backgroundColor="#353F49"
      w="100vw"
      h="10vh"
      justify="center"
      position="relative"
    >
      <BreadcrumbItem>
        <Link href="https://www.linkedin.com/in/arturo-araujo-alvarez/" isExternal>
          <Image src="../link.png" alt="linkedin" w={["8vh", "8vh", "8vh", "7vh"]} /> 
        </Link>
      </BreadcrumbItem>
      <BreadcrumbItem >
        <Link onClick={()=>scrollToRef()}>
          <Image onClick={() => go('/en/projects')} src="../usa.png" alt="espanol" w={["8vh", "8vh", "8vh", "7vh"]} /> 
        </Link>
      </BreadcrumbItem>
      <BreadcrumbItem >
        <Link href="https://github.com/ASdeveloper-app" isExternal>
          <Image src="../git.png" alt="github" w={["8vh", "8vh", "8vh", "7vh"]} /> 
        </Link>
      </BreadcrumbItem>
    </Breadcrumb>
    </>

  );
}

export default Proyectos;