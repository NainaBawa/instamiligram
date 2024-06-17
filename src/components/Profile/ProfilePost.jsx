import { GridItem } from "@chakra-ui/react";
import React from "react";
import { Flex, Box } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { AiFillHeart } from "react-icons/ai";
import { FaComment } from "react-icons/fa";
import { Image } from "@chakra-ui/react";
import { Avatar } from "@chakra-ui/react";
import { MdDelete } from "react-icons/md";
import { Divider, VStack } from "@chakra-ui/react";
import PostFooter from "../FeedPosts/PostFooter"
import Comment from "../Comment/Comment";
import {
  Modal,
  ModalOverlay,
  useDisclosure,
  ModalContent,
  ModalCloseButton,
  ModalBody,
} from "@chakra-ui/react";

const ProfilePost = ({ img }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <GridItem
        cursor={"pointer"}
        borderRadius={4}
        overflow={"hidden"}
        border={"1px solid"}
        borderColor={"whiteAlpha.300"}
        position={"relative"}
        aspectRatio={1 / 1}
        onClick={onOpen} // Trigger modal open on click
      >
        <Flex
          opacity={0}
          _hover={{ opacity: 1 }}
          position={"absolute"}
          top={0}
          left={0}
          right={0}
          bottom={0}
          bg={"blackAlpha.700"}
          transition={"all 0.3s ease"}
          zIndex={1}
          justifyContent={"center"}
        >
          <Flex alignItems={"center"} justifyContent={"center"} gap={50}>
            <Flex>
              <AiFillHeart size={20} />
              <Text fontWeight={"bold"} ml={2}>
                7
              </Text>
            </Flex>

            <Flex>
              <FaComment size={20} />
              <Text fontWeight={"bold"} ml={2}>
                7
              </Text>
            </Flex>
          </Flex>
        </Flex>

        <Image
          src={img}
          alt="Profile Post"
          w={"100%"}
          h={"100%"}
          objectFit={"cover"}
        />
      </GridItem>

      <Modal
        isOpen={isOpen}
        onClose={onClose}
        isCentered={true}
        size={{ base: "2xl", md: "3xl" }}
      >
        <ModalOverlay />
        <ModalContent>
        <ModalCloseButton />
          <ModalBody bg={"black"} pb={5}>
            <Flex
              gap={4}
              w={{ base: "90%", sm: "70%", md: "full" }}
              mx={"auto"}
            >
              <Box
                borderRadius={4}
                overflow={"hidden"}
                border={"1px solid"}
                borderColor={"whiteAlpha.300"}
                flex={1.5}
              >
                <Image src={img} alt="Profile Post"></Image>
              </Box>
              <Flex
                flex={1}
                flexDir={"column"}
                px={10}
                display={{ base: "none", md: "flex" }}
              >
                <Flex alignItems={"center"} justifyContent={"space-between"}>
                  {/* First Child - Username and Avatar */}
                <Flex alignItems={"center"} gap={4}>
                  <Avatar src="profile.jpg" size={"sm"} name="Kiddo"></Avatar>
                  <Text fontWeight={"bold"} fontSize={12}>
                    Kiddo
                  </Text>
                </Flex>

                {/* Second child - Deleton icon on the right hand side */}
                <Box
                  _hover={{ bg: "whiteAlpha.300", color: "red.600" }}
                  borderRadius={4}
                  p={1}
                >
                  <MdDelete size={20} cursor={"pointer"}></MdDelete>
                </Box>
                </Flex>
                <Divider my={4} bg={"gray.500"}></Divider>
                <VStack w={"full"} alignItems={"start"} maxH={"350px"} overflowY={"auto"}>

                <Comment
                createdAt="1 day ago"
                username="Natasha"
                profilePic="/img1.png"
                text="Looking pretty"></Comment>

                <Comment
                createdAt="12 hr ago"
                username="Joshua"
                profilePic="/img2.png"
                text="Beautiful"></Comment>

                <Comment
                createdAt="5 hours ago"
                username="Emma"
                profilePic="/img3.png"
                text="Amazing"></Comment>

                <Comment
                createdAt="1 day ago"
                username="Natasha"
                profilePic="/img1.png"
                text="Looking pretty"></Comment>

                <Comment
                createdAt="12 hr ago"
                username="Joshua"
                profilePic="/img2.png"
                text="Beautiful"></Comment>

                <Comment
                createdAt="5 hours ago"
                username="Emma"
                profilePic="/img3.png"
                text="Amazing"></Comment>

                <Comment
                createdAt="1 day ago"
                username="Natasha"
                profilePic="/img1.png"
                text="Looking pretty"></Comment>

                <Comment
                createdAt="12 hr ago"
                username="Joshua"
                profilePic="/img2.png"
                text="Beautiful"></Comment>

                <Comment
                createdAt="5 hours ago"
                username="Emma"
                profilePic="/img3.png"
                text="Amazing"></Comment>

                </VStack>

                <Divider my={4} bg={"gray.800"}></Divider>

                <PostFooter isProfilePage={true}/>

              </Flex>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ProfilePost;
