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
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  FaDiscord,
  FaLinkedinIn,
  FaSignInAlt,
  FaTelegram,
  FaTwitter,
  FaYoutube,
  FaTimes,
} from "react-icons/fa";
import io from "socket.io-client";
const API_URL = "http://localhost:3000";
const socket = io(API_URL);

const animationKeyframes = keyframes`
  0% { transform: scale(1) rotate(0); border-radius: 20%; }
  25% { transform: scale(2) rotate(0); border-radius: 20%; }
  50% { transform: scale(2) rotate(270deg); border-radius: 50%; }
  75% { transform: scale(1) rotate(270deg); border-radius: 50%; }
`;
const animation = `${animationKeyframes} 2s ease-in-out infinite`;

export default function Navbar() {
  const [openNav, setOpenNav] = useState(false);
  const [user, setUser] = useState({});
  const [disabled, setDisabled] = useState("");
  let popup = null;

  useEffect(() => {
    socket.on("user", (user) => {
      console.log(popup);
      popup.close();
      setUser(user);
    });
  }, []);
  const checkPopup = () => {
    const check = setInterval(() => {
      if (!popup || popup.closed || popup.closed === undefined) {
        clearInterval(check);
        setDisabled("");
      }
    }, 1000);
  };
  const openPopup = () => {
    const width = 600,
      height = 600;
    const left = window.innerWidth / 2 - width / 2;
    const top = window.innerHeight / 2 - height / 2;

    const url = `${API_URL}/auth/twitter?socketId=${socket.id}`;
console.log(url);
    return window.open(
      url,
      "",
      `toolbar=no, location=no, directories=no, status=no, menubar=no, 
      scrollbars=no, resizable=no, copyhistory=no, width=${width}, 
      height=${height}, top=${top}, left=${left}`
    );
  };

  const startAuth = () => {
    if (!disabled) {
      popup = openPopup();
      checkPopup();
      setDisabled("disabled");
    }
  };
  const closeCard = () => {
    setUser({});
  };

  return (
    <Box>
      <Flex
        as="nav"
        alignItems={"center"}
        // px="2rem"
        py=".5rem"
        maxW="75rem"
        mx="auto"
        justifyContent={"space-between"}
        w="full"
        // color="#f2ca2b"
      >
        <Flex alignItems={""} gap="2">
          {/* <Box as={motion.div} animation={animation}>
            <Img src="img/egg-2.png" w="clamp(3rem, 7vw, 5rem)" />
          </Box> */}
          <Heading
            fontFamily={"'Mogra', cursive;"}
            fontSize={"1.2rem"}
            color="brand.100"
          >
            $Bridge Token
          </Heading>
        </Flex>
        <Flex gap={"2"}>
          <Button
            bg="brand.bg"
            color={"white"}
            fontSize={"1rem"}
            minW={"unset"}
            h={"unset"}
            px="2"
            py="2"
            rounded={"full"}
          >
            <FaTwitter />
          </Button>
          <Button
            bg="brand.bg"
            color={"white"}
            fontSize={"1rem"}
            minW={"unset"}
            h={"unset"}
            px="2"
            py="2"
            rounded={"full"}
          >
            <FaDiscord />
          </Button>
          <Button
            bg="brand.bg"
            color={"white"}
            fontSize={"1rem"}
            minW={"unset"}
            h={"unset"}
            px="2"
            py="2"
            rounded={"full"}
          >
            <FaLinkedinIn />
          </Button>
          <Button
            bg="brand.bg"
            color={"white"}
            fontSize={"1rem"}
            minW={"unset"}
            h={"unset"}
            px="2"
            py="2"
            rounded={"full"}
          >
            <FaYoutube />
          </Button>
          <Button
            bg="brand.bg"
            color={"white"}
            fontSize={"1rem"}
            minW={"unset"}
            h={"unset"}
            px="2"
            py="2"
            rounded={"full"}
          >
            <FaTelegram />
          </Button>
        </Flex>
        {/* <Spacer /> */}
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
          {user.name ? (
            <div className={"card"}>
              <img src={user.photo} alt={user.name} />
              <FaTimes className={"close"} onClick={closeCard} />
              <h4>{`@${user.name}`}</h4>
            </div>
          ) : (
            <Button
              _hover={{ opacity: ".7" }}
              fontSize={"1.2rem"}
              bg={"brand.bg"}
              color={"white"}
              display={"flex"}
              gap="2"
              px="4"
              alignItems={"center"}
              rounded={"md"}
              py="1"
              fontWeight={"semibold"}
              onClick={startAuth}
              className={`twitter ${disabled}`}
            >
              <FaSignInAlt /> Login
            </Button>
          )}
        </Flex>
      </Flex>
    </Box>
  );
}
