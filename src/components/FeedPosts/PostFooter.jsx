import React from 'react'
import { Flex, Box, InputGroup, InputRightElement } from '@chakra-ui/react'
import { useState } from 'react'
import { Text } from '@chakra-ui/react'
import { CommentLogo, NotificationsLogo, UnlikeLogo } from '../../assets/constants'
import { Input } from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'

const PostFooter = ({username, isProfilePage}) => {
  const[liked, setLiked] = useState(false);
  const[likes, setLikes] = useState(1000);

  const handleLike = (username) => {
    if(liked){
      setLiked(false);
      setLikes(likes-1);
    }
    else{
      setLiked(true);
      setLikes(likes+1);
    }
  };

  return( 
  <Box my={2} marginTop={"auto"}>
  <Flex alignItems={"center"} gap={4} w={"full"} pt={0} mb={2} mt={4}>
    <Box onClick={handleLike}
          cursor={"pointer"}
          fontSize={18}>
      {!liked ? (<NotificationsLogo/>) : (<UnlikeLogo/>)}
    </Box>
    <Box cursor={"pointer"} fontSize={18}><CommentLogo/></Box>
  </Flex>

  <Text fontWeight={600} fontSize={"sm"}>{likes} likes</Text>
  
  {!isProfilePage && ( <>
    <Text fontWeight={700} fontSize={"sm"}>{username}</Text>
    <Text as={"span"}fontWeight={400} fontSize={"sm"}>Feeling Good</Text>
    <Text color={"gray"}fontSize={"sm"}>View all 1,000 comments</Text></>
  )}
  <Flex 
  alignItems={"center"}
  gap={2}
  justifyContent={"space-between"}
  w={"full"}>
    <InputGroup>
    <Input variant={"flushed"} placeholder='Add a comment...' fontSize={14}></Input>
    <InputRightElement>
    <Button
        fontSize={14}
         color={"blue.500"}
         fontWeight={600}
         cursor={"pointer"}
         _hover={{color:"white"}}
         bg={"transparent"}
    >Post</Button>
    </InputRightElement>
    </InputGroup>
  </Flex>
  </Box>
  )  
}

export default PostFooter;  