import React from 'react';
import { IoLogoWhatsapp } from "react-icons/io"
import { IoIosMail } from "react-icons/io"
import {
  Stack,
  Image,
  Box,
  Flex,
  SimpleGrid,
  FormControl,
  FormLabel,
  Input,
  Select,
  Button,
  Textarea
} from "@chakra-ui/core";
import English from '../../../components/Navbar'

function Contact () {
  return (
    <>
    <English/>
    <Stack
      backgroundImage= "url('/Background.jpg')"
      backgroundSize= {["contain","contain","cover","cover"]}
      width= "100vw"
      height= {["150vh", "250vh", "250vh", "170vh"]}
      alignItems="center"
    >
      <Image src="../AS developer.png" alt="A|S developer" w="20vw" mt="20vh" />

      <Box
        mt="1"
        fontWeight="semibold"
        as="h4"
        lineHeight="tight"
        w={["75vw", "50vw", "50vw", "50vw"]}
        color="white"
      >
        
        <Flex fontSize={["5vw", "2vw"]} color="white" mt="4vh" mb="2vh">
          <p>Contact Information:</p>
        </Flex>
        <hr></hr>
        <SimpleGrid columns={[1, 2]} justify="space-around">
          <Box>
            <br></br>
            <p>Phone:</p>
            <p>55 5417-8003</p>
            <Stack isInline justify="center">
              <Box as={IoLogoWhatsapp} size={["10vw", "2vw"]} color="white"/>
            </Stack>
            <br></br>
          </Box>
          <Box>
          <br></br>
            <p>Email:</p>
            <p>arturo.araujo.alvarez@gmail.com</p>
            <Stack isInline justify="center">
              <Box as={IoIosMail} size={["10vw", "2vw"]} color="white"/>
            </Stack>
            <br></br>
          </Box>
         </SimpleGrid>
        <hr></hr>

        <Flex fontSize={["5vw", "2vw"]} color="white" mt="4vh" mb="2vh">
          <p>Envia un menaje:</p>
        </Flex>
        <hr></hr>
        <FormControl isRequired mt={2}>
          <FormLabel htmlFor="fname">Nombre</FormLabel>
          <Input color="black" id="fname" placeholder="Nombre" />
        </FormControl>
        <FormControl isRequired>
          <FormLabel htmlFor="fname">Correo</FormLabel>
          <Input color="black" id="fname" placeholder="Correo" />
        </FormControl>
        <FormControl isRequired>
          <FormLabel htmlFor="fname">Telefono</FormLabel>
          <Input color="black" id="fname" placeholder="Telefono" />
        </FormControl>
        <FormControl isRequired>
        <FormLabel htmlFor="fname">Motivo de contacto</FormLabel>
          <Select 
            placeholder="Selecciona"
            name="tipo"
            color="black"
            >
            <option value="Cable">Personal</option>
            <option value="Terminal">Trabajo</option>
            <option value="Conector">Informes</option>
            <option value="Clavija">Otro</option>
          </Select>
        </FormControl>
        <FormControl isRequired>
          <FormLabel htmlFor="fname">Mensaje</FormLabel>
          <Textarea color="black" placeholder="Mensaje" />
        </FormControl>
 
        <Button
              backgroundColor="c3.100"
              color="white"
              type="submit"
              w={["30vw", '20vw', '10vw']}
              justify="center"
              m={4}
            >
              Send
            </Button>
        <br></br>
        <hr></hr>
      </Box>
    </Stack>
    </>
  );
}

export default Contact;
