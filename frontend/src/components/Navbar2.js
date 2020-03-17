import React from 'react'
import { withRouter } from 'react-router-dom'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink
} from '@chakra-ui/core'
import { MyContext } from '../context'

function Navbar2({ history }) {
  const go = path => history.push(path)
  return (
    <MyContext.Consumer>
      {context => {
        return (
          <Breadcrumb 
            separator="  "   
            spacing={3} 
            bottom={0}
            zIndex="99"
            textAlign="center"
            backgroundColor="#353F49"
            w="100vw"
            h="8vh"
            justify="center"
            mt={["3vh", "2vh", "0vh", "0vh"]}
          >
            <BreadcrumbItem fontSize={["3vh", "6vh", "6vh", "6vh"]}>
              <BreadcrumbLink  onClick={() => go('/es')} color="white"  > Inicio </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem fontSize={["3vh", "6vh", "6vh", "6vh"]}>
              <BreadcrumbLink onClick={() => go('/es/proyectos')} color="white"> Proyectos </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem fontSize={["3vh", "6vh", "6vh", "6vh"]}>
              <BreadcrumbLink onClick={() => go('/es/contacto')} color="white"> Contacto </BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        )
      }}
    </MyContext.Consumer>
  )
}
export default withRouter(Navbar2)
