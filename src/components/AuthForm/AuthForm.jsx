import {
  Box,
  VStack,
  Image,
  Flex,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";
//import React from "react";
import GoogleAuth from "./GoogleAuth";
//import { useNavigate } from "react-router-dom";
//import Sidebar from "../Sidebar/Sidebar";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  // const [inputs, setInputs] = useState({
  //  email: '',
  //  password: '',
  //  confirmPassword: '',
  // })


  return (
    <>
      <Box border={"1px solid gray"} borderRadius={4} padding={5}>
        <VStack spacing={4}>
          <Image
            src="./logo.png"
            h={24}
            cursor={"pointer"}
            alt="Instagram"
          ></Image>

          {/* <Input placeholder="Email address" fontSize={14} type="email"
          value  = {inputs.email}
          onChange = {(e) => setInputs({...inputs, email:e.target.value})}></Input>

          <Input placeholder="Password" fontSize={14} type="password"
          value  = {inputs.password}
          onChange = {(e) => setInputs({...inputs, password:e.target.value})}></Input> */}

          {/* {!isLogin ? (
            <Input
              placeholder="Confirm Password"
              fontSize={14}
              type="password"
              value  = {inputs.confirmPassword}
              onChange = {(e) => setInputs({...inputs, confirmPassword:e.target.value})}
            ></Input>
          ) : null}

          {/*<Button w={"full"} colorScheme="blue" size={"sm"} fontSize={14}>
            {isLogin ? "Log In" : "Sign Up"}
          </Button> */}

          {isLogin ? <Login/> : <Signup/>}

          {/*---------------OR-------------- */}
          <Flex
            alignItems={"center"}
            justifyContent={"center"}
            my={4}
            w={"full"}
            gap={1}
          >
            <Box flex={2} h={"1px"} bg={"gray.400"} />
            <Text mx={1} color={"white"}>
              OR
            </Text>
            <Box flex={2} h={"1px"} bg={"gray.400"} />
          </Flex>

          <GoogleAuth/>
        </VStack>
      </Box>

      <Box border={"1px solid gray"} borderRadius={4} padding={5}>
        <Flex alignItems={"center"} justifyContent={"center"}>
          <Box mx={2} fontSize={14}>
            {isLogin ? "Don't have an account?" : "Already have an account"}
          </Box>

          <Box
            onClick={() => setIsLogin(!isLogin)}
            color={"blue.500"}
            cursor={"pointer"}
          >
            {isLogin ? "Sign up" : "Log in"}
          </Box>
        </Flex>
      </Box>
    </>
  );
};
export default AuthForm;
