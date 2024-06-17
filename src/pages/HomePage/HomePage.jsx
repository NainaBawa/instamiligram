import React from 'react';
import SuggestedUsers from '../../components/SuggestedUsers/SuggestedUsers';
import { Container, Box, Flex } from '@chakra-ui/react';
import FeedPosts from '../../components/FeedPosts/FeedPosts';

const HomePage = () => {
 return(
  //Size is set to large
  <Container maxW={"container.lg"}>  

  <Flex gap={20}>

  {/*The left container*/}
   <Box flex={2} py={10}><FeedPosts/></Box>

   {/*The right container*/}
   <Box flex={3} mr={20}
   display={{base:"none", lg:"block"}}
   maxW={"300px"}>
    <SuggestedUsers/>
    </Box>
 
  </Flex>
  </Container>
 )
};
export default HomePage;