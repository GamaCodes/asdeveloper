import React from 'react'
import { withRouter} from 'react-router-dom'
import {
  Breadcrumb,
  BreadcrumbItem,
  Image,
  Link,
} from '@chakra-ui/core'
import { MyContext } from '../context'

function Footer({ history }) {
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
          >
            <BreadcrumbItem mt={1}>
              <Link href="https://www.linkedin.com/in/arturo-araujo-alvarez/" isExternal>
                <Image src="../link.png" alt="linkedin" w={["8vh", "8vh", "8vh", "7vh"]} /> 
              </Link>
            </BreadcrumbItem>
            <BreadcrumbItem >
              <Link href="https://github.com/ASdeveloper-app" isExternal>
                <Image src="../git.png" alt="github" w={["8vh", "8vh", "8vh", "7vh"]} /> 
              </Link>
            </BreadcrumbItem>
          </Breadcrumb>
        )       
    }}
    </MyContext.Consumer>
  )
}
export default withRouter(Footer)







