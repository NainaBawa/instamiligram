import React from 'react'
import SuggestedHeader from './SuggestedHeader'
import { VStack, textDecoration } from '@chakra-ui/react'
import { Flex, Text, Box } from '@chakra-ui/react'
import { color } from 'framer-motion'
import SuggestedUser from './SuggestedUser'
import { BiFontSize } from 'react-icons/bi'
import { Link } from 'react-router-dom'

const SuggestedUsers = () => {
  return (
   <>
    <VStack py={8} px={6} gap={4}>
     <SuggestedHeader/>
     <Flex alignItems={"center"} justifyContent={"space-between"} w={"full"}>
      <Text fontSize={12} fontWeight={"bold"} color={"gray.500"}>Suggested For You</Text>
      <Text fontSize={12} fontWeight={"bold"} _hover={{color: "gray.400"}} cursor={"pointer"}>See all</Text>
     </Flex>
     <SuggestedUser name="Jacky Chan" followers="50M" avatar="/jacky.jpg"/>
     <SuggestedUser name="Bruce Lee" followers="54M" avatar="/bruce.jpg"/>
     <SuggestedUser name="Jennifer Winget" followers="192K" avatar="/jennifer.jpg"/>
     
     <Box 
     fontSize={12}
     color={"gray.500"}
     mt={5}
     alignSelf={"start"}
     >
     © 2024 Built By{" "}
     <Link href="https:/www.youtube.com/@kiddo" target={"_blank"} color={"blue.500"} FontSize={14} _hover={{textDecoration:"underline"}}>Kiddo</Link>

     </Box>
    </VStack>
    </>
  )
}

export default SuggestedUsers