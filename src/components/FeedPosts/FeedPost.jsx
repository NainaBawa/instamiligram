//import React from 'react'
import PostHeader from './PostHeader'
import PostFooter from './PostFooter'
import { Box, Image } from '@chakra-ui/react'
import { BiBorderRadius } from 'react-icons/bi'

const FeedPost = ({img, username, avatar}) => {
  return (
    <>
    <PostHeader username={username} avatar={avatar}/>

    <Box my={2} overflow={"hidden"} borderRadius={4}>
     <Image src={img} alt={username}/>
    </Box>

    <PostFooter username={username}/>
    </>
  );
};

export default FeedPost;
