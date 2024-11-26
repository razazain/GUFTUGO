import {
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  VStack,
  Image,
  Box,
} from "@chakra-ui/react";
import React, { useState } from "react";

const Signup = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [ConfirmPassword, setConfirmpassword] = useState("");
  const [pic, setPic] = useState(null);
  const [picError, setPicError] = useState("");

  const validateImage = (file) => {
    const validTypes = ["image/jpeg", "image/png", "image/jpg"];
    if (file && !validTypes.includes(file.type)) {
      setPicError("Only JPEG or PNG images are allowed.");
      return false;
    }
    setPicError("");
    return true;
  };

  const handlePicUpload = (e) => {
    const file = e.target.files[0];
    if (file && validateImage(file)) {
      setPic(file);
    }
  };

  // submit function for the api we do later
  const SubmitHandler = () => {
    console.log(
      "Submit Function is running properly on Submit button",
      Name,
      Email,
      Password,
      ConfirmPassword
    );
  };

  return (
    <VStack spacing="5px">
      <FormControl id="first-name" isRequired>
        <FormLabel>Name</FormLabel>
        <Input
          placeholder="Enter Your Name"
          onChange={(e) => setName(e.target.value)}
        />
      </FormControl>

      <FormControl id="email" isRequired>
        <FormLabel>Email</FormLabel>
        <Input
          placeholder="Enter Your Email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormControl>

      <FormControl id="password" isRequired>
        <FormLabel>Password</FormLabel>
        <InputGroup size="md">
          <Input
            type={show ? "text" : "password"}
            placeholder="Enter Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>

      <FormControl id="confirm-password" isRequired>
        <FormLabel>Confirm Password</FormLabel>
        <InputGroup size="md">
          <Input
            type={show ? "text" : "password"}
            placeholder="Confirm Password"
            onChange={(e) => setConfirmpassword(e.target.value)}
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>

      <FormControl id="profile-picture">
        <FormLabel>Upload Profile Picture</FormLabel>
        <Input type="file" accept="image/*" onChange={handlePicUpload} />
        {picError && (
          <Box color="red.500" mt={1} fontSize="sm">
            {picError}
          </Box>
        )}
        {pic && (
          <Box mt={3}>
            <Image
              src={URL.createObjectURL(pic)}
              alt="Profile Preview"
              boxSize="100px"
              objectFit="cover"
              borderRadius="full"
            />
          </Box>
        )}
      </FormControl>

      <Button colorScheme="teal" width="100%" mt={4} onClick={SubmitHandler}>
        Sign Up
      </Button>
    </VStack>
  );
};

export default Signup;
