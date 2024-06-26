import React from "react";
import { Flex, AvatarGroup, Avatar } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { VStack } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";

const ProfileHeader = () => {
  return (
    <Flex
      gap={{ base: 4, sm: 10 }}
      py={10}
      direction={{ base: "column", sm: "row" }}
    >
      <AvatarGroup
        size={{ base: "xl", md: "2xl" }}
        jusitfySelf={"center"}
        alignSelf={"flex-start"}
        mx={"auto"}
      >
        <Avatar name="Kiddo" src="/profile.jpg" alt="Kiddo"></Avatar>
      </AvatarGroup>

      <VStack alignItems={"start"} gap={2} mx={"auto"} flex={1}>
        <Flex
          gap={4}
          direction={{ base: "column", sm: "row" }}
          justifyContent={{ base: "center", sm: "flex-start" }}
          alignItems={"center"}
          w={"full"}
        >
          <Text fontSize={{ base: "sm", md: "lg" }}>Kiddo</Text>

          <Flex ga={4} alignItems={"center"} justifyContent={"center"}>
            <Button bg={"white"} color={"black"} _hover={"whiteAlpha.800"} size={{base: "xs", md:"sm"}}>Edit Profile</Button>
          </Flex>
        </Flex>

        <Flex alignItems={"center"} gap={{base:2, sm:4}}>
          <Text fontSize={{base:"xs", md:"sm"}}><Text as="span" fontWeight={"bold"} mr={1}>4</Text>Posts</Text>
          <Text fontSize={{base:"xs", md:"sm"}} ><Text as="span" fontWeight={"bold"} mr={1}>149</Text>Followers</Text>
          <Text fontSize={{base:"xs", md:"sm"}}><Text as="span" fontWeight={"bold"} mr={1}>175</Text>Following</Text>
        </Flex>

        <Flex alignItems={"center"} gap={4}>
          <Text fontSize={"sm"} fontWeight={"bold"}>Kiddo</Text></Flex>
          <Text fontSize={"sm"}>Kids the are the sweetest</Text>
        

      </VStack>
    </Flex>
  );
};

export default ProfileHeader;
