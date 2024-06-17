import React from "react";
import { Avatar, background, textDecoration } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { Flex, Text  } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const SuggestedHeader = () => {
  return (
    <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>
      <Flex alignItems={"center"} gap={2}>
        <Avatar name={"Natasha"} size={"lg"} src={"/profile.jpg"} />
        <Text fontSize={12} fontWeight={"bold"}>
          Kiddo
        </Text>
      </Flex>
      <Link  
      size={"xs"}
      _hover={{background: "transparent"}}
      as={RouterLink}
      to={"/auth"}
      fontSize={14}
      fontWeight={"medium"}
      color={"blue.400"}
      style={{textDecoration: "none"}}
      cursor={"pointer"}>
       Log out</Link>
    </Flex>
  );
};

export default SuggestedHeader;
