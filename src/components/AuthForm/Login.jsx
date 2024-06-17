import React from 'react'
import { useState } from 'react'
import { Input, Button } from '@chakra-ui/react'

const Login = () => {

 const [inputs, setInputs] = useState({
  email: '',
  password: '',
 })

  return (
    <>
       <Input placeholder="Email address" fontSize={14} type="email" size={"sm"}
       value  = {inputs.email}
       onChange = {(e) => setInputs({...inputs, email:e.target.value})}></Input>

       <Input placeholder="Password" fontSize={14} type="password" size={"sm"}
       value  = {inputs.password}
       onChange = {(e) => setInputs({...inputs, password:e.target.value})}></Input>

        <Button w={"full"} colorScheme="blue" size={"sm"} fontSize={14}>
            Login
         </Button>
    </>
  )
}

export default Login