import React from 'react';

import {
  Stack,
  Image,
  Box,
  SimpleGrid,
  Flex
} from "@chakra-ui/core";

import English from '../../components/Navbar'

const picture = [
  {
    name:'JS',
    src:"../js.png"
  },
  {
    name:'HTML',
    src:"../html.png"
  },
  {
    name:'CSS',
    src:"../css.png"
  },
  {
    name:'Corel Draw',
    src:"../corel.png"
  },
  {
    name:'Auto Cad',
    src:"../auto.png"
  },
  {
    name:'MongoDB',
    src:"../mongo.png"
  },
  {
    name:'Express',
    src:"../express.png"
  },
  {
    name:'React',
    src:"../react.png"
  },
  {
    name:'Node JS',
    src:"../node.png"
  }]
function Home() {
  return (
    <>
    <English/>
    <Stack
      backgroundImage= "url('/Background.jpg')"
      backgroundSize= {["contain","contain","cover","cover"]}
      width= "100vw"
      height= {["200vh", "250vh", "400vh", "250vh"]}
      alignItems="center"
    >
      <Image src="../AS developer.png" alt="A|S developer" w="30vw" mt="16vh" />

      <Box
        mt="1"
        fontWeight="semibold"
        as="h4"
        lineHeight="tight"
        w={["75vw", "50vw", "50vw", "50vw"]}
        color="white"
      >
        
        <Flex fontSize={["5vw", "6vw", "3vw"]} color="white" mt="4vh" mb="2vh">
          <p>About me:</p>
        </Flex>
        <hr></hr>
        <Box m={5}>
          <p>Mi nombre es Arturo Araujo, soy particularmente analítico y un apasionado por la tecnología, siempre buscando implementar nuevas formas de optimizar procesos y dar soluciones.</p>
          <p>Actualmente soy un Desarrollador Web Full-Stack con un background de mas de 4 años en el sector administrativo, enfocándome en la gestión y las finanzas.</p>
          <p>Creo firmemente que la programación es la nueva forma de resolver problemas y automatizar procesos y por esta razón decidí entrar a este gran mundo de la programación y así poder explotar mi creatividad y habilidades de gestión automatizando procesos y solucionando las demandas del sector.</p>
          <p>Los últimos 4 años me he dedicado a explotar mis habilidades creativas y tecnológicas así como las administrativas y de gestión para optimizar procesos dentro las empresas donde he colaborado.</p>
          <p>"Si puedes imaginarlo, puedo programarlo"</p>
        </Box>
        <hr></hr>
      </Box>
      
      <Flex 
      color="white" 
      mt="4vh"
      fontWeight="semibold"
      as="h4"
      lineHeight="tight"
      fontSize={["5vw", "6vw", "3vw"]}
      >
        <p>Stack</p>
      </Flex>



      <SimpleGrid columns={[3, 2, 3, 3]} spacing={5} m={["10"]}>
        { picture.map((e, i) => {
          return (
              <img src={e.src} alt={e.name} />
          )
          })
        }
      </SimpleGrid>
    </Stack>
    </>
  );
}

export default Home;
