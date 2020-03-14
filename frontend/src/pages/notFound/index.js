import React from 'react';
import { Flex, Image, Stack } from '@chakra-ui/core';
import English from '../../components/Navbar'

function NotFound() {
  return (
    <>
        <English/>
        <Stack height={["70vh", "80vh", "80vh", "80vh"]}>
            <Flex fontSize={["5vw", "6vw", "2vw"]} justify="center" color="white" mt={10}>
                <p>Error. Not Found</p>
            </Flex>
            <Flex justify="center" color="white" mb={3} >
                <Image src="../error.jpg" alt="A|S developer" w={["80vw", "30vw", "20vw", "40vw", ]}/>
            </Flex>
            <Flex fontSize={["5vw", "6vw", "2vw"]} justify="center" color="white" mt={1}>
                <p>Back to Home</p>
            </Flex>
        </Stack>
    </>
  );
}

export default NotFound;
