import React from 'react'
import { Image, Text, Flex } from '@chakra-ui/react'

const GoogleAuth = () => {
  return (
    <Flex
            alignItems={"center"}
            justifyContent={"center"}
            cursor={"pointer"}
          >
            <Image src="./google.png" w={5} alt="Google" />
            <Text mx={2} color="blue.500">
              Login with Google
            </Text>
    </Flex>
  )
}

export default GoogleAuth