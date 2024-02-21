import {
  Box,
  Button,
  Flex,
  Grid,
  Heading,
  Img,
  Link,
  Text,
  keyframes,
  Spacer,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { motion } from "framer-motion";

const animationKeyframes = keyframes`
  0% { transform: scale(1) rotate(0); border-radius: 20%; }
  25% { transform: scale(2) rotate(0); border-radius: 20%; }
  50% { transform: scale(2) rotate(270deg); border-radius: 50%; }
  75% { transform: scale(1) rotate(270deg); border-radius: 50%; }
`;
const animation = `${animationKeyframes} 2s ease-in-out infinite`;

export default function Navbar() {
  const [openNav, setOpenNav] = useState(false);
  return (
    <Box>
      <Flex
        as="nav"
        alignItems={"center"}
        px="2rem"
        py="1.5rem"
        maxW="72rem"
        mx="auto"
        justifyContent={"space-between"}
        w="full"
        color="#f2ca2b"
      >
        <Flex alignItems={""} gap="2">
          <Box as={motion.div} animation={animation}>
            <Img src="img/egg-2.png" w="clamp(3rem, 7vw, 5rem)" />
          </Box>
          <Heading
            fontFamily={"'Mogra', cursive;"}
            fontSize={"1.7rem"}
            color="#f2ca2b"
          >
            $Bridge Token
          </Heading>
        </Flex>
        <Spacer />
        <Button
          bg="transparent"
          gap=".2rem"
          flexDir={"column"}
          onClick={() => setOpenNav(true)}
          display={{ base: "flex", md: "none" }}
        >
          <Text as="span" w="1rem" h=".2rem" bg="#d15555"></Text>
          <Text as="span" w="1rem" h=".2rem" bg="#d15555"></Text>
        </Button>
        <Flex
          gap={"4"}
          flexDir={{ base: "column", md: "row" }}
          pos={{ base: "fixed", md: "relative" }}
          right={{ base: openNav ? "0" : "min(-90vw, -40rem)", md: "0" }}
          top={"0"}
          w={{ base: "min(90vw, 40rem)", md: "unset" }}
          bg={{ base: "#f2ca2b", md: "transparent" }}
          p={{ base: "3rem", md: "unset" }}
          h={{ base: "100vh", md: "unset" }}
          color={{ base: "#fff", md: "inherit" }}
          transition={"all .3s ease"}
          zIndex={"2"}
        >
          <Text
            pos="absolute"
            top={"1rem"}
            right="1rem"
            textShadow={"unset"}
            onClick={() => setOpenNav(false)}
            display={{ base: "flex", md: "none" }}
            color={"#d15555"}
          >
            X
          </Text>
          <Link
            href="#about"
            textShadow={"unset"}
            _hover={{ color: "rgba(255,255,255,.6)" }}
            fontSize={"1.2rem"}
          >
            login
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
}