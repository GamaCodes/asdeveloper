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
          <p>My name is Arturo Araujo, I am particularly analytical and passionate about technology, always looking to implement new ways to optimize processes and provide solutions.</p>
          <p>I am currently a Full-Stack Web Developer with a background of more than 4 years in the administrative sector, focusing on management and finance.</p>
          <p>I firmly believe that programming is the new way to solve problems and automate processes and for this reason I decided to enter this great world of programming and thus be able to exploit my creativity and management skills by automating processes and solving the demands of the sector.</p>
          <p>The last 4 years I have dedicated myself to exploiting my creative and technological as well as administrative and management skills to optimize processes within the companies where I have collaborated.</p>
          <p>"If you can imagine it, I can program it."</p>
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
