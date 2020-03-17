import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import { createContact } from "../../../services/index";
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
  Textarea,
  Link,
} from "@chakra-ui/core";
import Espanol from '../../../components/Navbar2'

class CreateContact extends Component {
  state = {
    name: "", 
    email: "", 
    phone: "", 
    reason: "", 
    message: ""
  };

  submit = async e => {
    e.preventDefault();
    await createContact(this.state.name, this.state.email, this.state.phone, this.state.reason, this.state.message);
    alert("Mensaje enviado. Te contactaremos lo antes posible");
    this.props.history.push("/es");
  };

  handleInput = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  render() {
    return (
      <>
        <Espanol/>
        <Stack
          backgroundImage= "url('/Background.jpg')"
          backgroundSize= {["contain","contain","cover","cover"]}
          width= "100vw"
          height= {["150vh", "250vh", "250vh", "180vh"]}
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
              <p>Datos de Contacto:</p>
            </Flex>
            <hr></hr>
            <SimpleGrid columns={[1, 2]} justify="space-around">
              <Box>
                <br></br>
                <p>Telefono:</p>
                <p>55 5417-8003</p>
                <Stack isInline justify="center">
                  <Link href="https://wa.me/5215554178003" isExternal>
                    <Box as={IoLogoWhatsapp} size={["10vw", "2vw"]} color="white"/> 
                  </Link>
                </Stack>
                <br></br>
              </Box>
              <Box>
              <br></br>
                <p>Email:</p>
                <p>arturo.araujo.alvarez@gmail.com</p>
                <Stack isInline justify="center">
                  <Link href="mailto:arturo.araujo.alvarez@gmail.com" isExternal>
                    <Box as={IoIosMail} size={["10vw", "2vw"]} color="white"/>
                  </Link>
                </Stack>
                <br></br>
              </Box>
            </SimpleGrid>
            <hr></hr>

            <Flex fontSize={["5vw", "2vw"]} color="white" mt="4vh" mb="2vh">
              <p>Envia un Mensaje:</p>
            </Flex>
            <hr></hr>
            <form onSubmit={this.submit}>
              <FormControl isRequired mt={2}>
                <FormLabel htmlFor="name">Nombre</FormLabel>
                <Input 
                  color="black" 
                  id="name" 
                  placeholder="Nombre"
                  name="name"
                  type="text"
                  value={this.state.name}
                  onChange={this.handleInput} 
                />
              </FormControl>
              <FormControl isRequired>
                <FormLabel htmlFor="email">Email</FormLabel>
                <Input 
                color="black" 
                id="email" 
                placeholder="Email"
                name="email"
                type="email"
                value={this.state.email}
                onChange={this.handleInput}  
                />
              </FormControl>
              <FormControl isRequired>
                <FormLabel htmlFor="phone">Telefono</FormLabel>
                <Input 
                color="black" 
                id="phone" 
                placeholder="Telefono"
                name="phone"
                type="number"
                value={this.state.phone}
                onChange={this.handleInput}
                />
              </FormControl>

              <FormControl isRequired>
                
              <FormLabel htmlFor="reason">Motivo de contacto</FormLabel>
                <Select 
                  placeholder="Elegir"
                  onChange={this.handleInput}
                  id="reason"
                  name="reason"
                  color="black"
                  >
                  <option value="Personal">Personal</option>
                  <option value="Job">Trabajo</option>
                  <option value="Information">Informes</option>
                  <option value="Other">Otro</option>
                </Select>
              </FormControl>


              <FormControl isRequired>
                <FormLabel htmlFor="message">Mensaje</FormLabel>
                <Textarea 
                color="black" 
                placeholder="Mensaje"
                id="message" 
                name="message"
                type="String"
                value={this.state.message}
                onChange={this.handleInput} />
              </FormControl>
      
              <Button
                    backgroundColor="c3.100"
                    color="white"
                    w={["30vw", '20vw', '10vw']}
                    justify="center"
                    m={4}
                    type="submit" 
                    value="Create Contact"
                  >
                    Enviar
              </Button>
            </form>
            <br></br>
            <hr></hr>
          </Box>
        </Stack>
      </>
    );
  }
}


export default withRouter(CreateContact);

