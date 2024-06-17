//import { Center, Flex } from '@chakra-ui/react';
import AuthForm from "../../components/AuthForm/AuthForm";
import { Center, Flex, Container, VStack, Box, Image } from "@chakra-ui/react";
import React from "react";

const AuthPage = () => {
  return (
    <Flex minH={"100vh"} justifyContent={"center"} alignItems={"center"} px={4}>
      <Container maxWidth={"container.md"} padding={0}>
        <Flex justifyContent={"center"} alignItems={"center"} gap={10}>
          {/*Left-hand side */}
          <Box display={{ base: "none", md: "block" }}>
            <Image src="/auth.png" h={650} alt="Phone Image" />
          </Box>
          {/*Right-hand side */}
          <VStack spacing={4} align={"stretch"}>
            <AuthForm />
            <Box textAlign={"center"}>Get the app</Box>
            <Flex gap={5} justifyContent={"center"}>
              <Image src="./playstore.png" h={"10"} alt="PlayStore"></Image>
              <Image src="./microsoft.png" h={"10"} alt="Microsoft"></Image>
            </Flex>
          </VStack>
        </Flex>
      </Container>
    </Flex>
  );
};
export default AuthPage;
