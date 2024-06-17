import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import { Avatar } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'

const PostHeader = ({username, avatar}) => {
  return (
    <>
    {/*Complete flex to write the heading of the post*/}
    <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"} my={2 }>

    {/*Left side of the header conataining avatar and the username*/}
    <Flex alignItems={"center"} gap={2}>
      <Avatar src={avatar} alt="user profile pic" size={"sm"}></Avatar>  
      <Flex fontSize={12} gap={2} fontWeight={"bold"}>{username}
       
      <Box color={"gray.500"}> • 1w</Box>
      </Flex>
    </Flex>

    {/*Right side text - follow/unfollow */}
    <Box cursor={"pointer"}>
      <Text 
      fontSize={12} 
      color={"blue.500"}
      fontWeight={"bold"}
      _hover={{
        color: "white"
      }}
      transition={"0.2s ease-in-out"}
      >Unfollow</Text></Box>
    </Flex>
    </>
  )
}

export default PostHeader;