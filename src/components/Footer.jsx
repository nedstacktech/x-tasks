import React from "react";
import { Box, Flex, Img, Text } from "@chakra-ui/react";
import {FaXTwitter} from "react-icons/fa6"

const Footer = () => {
  return (
    <Flex bg="brand.900">
      <Flex
        px="6"
        py="4"
        maxW="70rem"
        mx="auto"
        justifyContent={"space-between"}
        alignItems="center"
        w="full"
      >
        <Flex alignItems="center" gap="2">
          {/* <Img src="images/logo.png" w="clamp(1.5rem, 5vw, 3rem)" /> */}
          <Img src="images/bridge2.png" w="clamp(4rem, 8vw, 6rem)" />
        </Flex>
        <Text w="auto" color="white">&copy;2024 Bridge token</Text>
        <FaXTwitter color="white" />
      </Flex>
    </Flex>
  );
};

export default Footer;
