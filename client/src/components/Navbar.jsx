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
import React, { useContext, useState } from "react";
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
import { AppContext } from "../App.jsx";

const animationKeyframes = keyframes`
  0% { transform: scale(1) rotate(0); border-radius: 20%; }
  25% { transform: scale(2) rotate(0); border-radius: 20%; }
  50% { transform: scale(2) rotate(270deg); border-radius: 50%; }
  75% { transform: scale(1) rotate(270deg); border-radius: 50%; }
`;
const animation = `${animationKeyframes} 2s ease-in-out infinite`;

export default function Navbar() {
  const [openNav, setOpenNav] = useState(false);

  const { user } = useContext(AppContext);
  console.log(user);
  return (
    <Box>
      <Flex
        as="nav"
        alignItems={"center"}
        // px="2rem"
        px="6"
        py="4"
        maxW="70rem"
        mx="auto"
        justifyContent={"space-between"}
        w="full"
        // color="#f2ca2b"
      >
        <Flex alignItems={"center"} gap="2">
          <Flex as={motion.div} alignItems="center" gap="2">
            <Img src="images/logo.png" w="clamp(1.5rem, 5vw, 3rem)" />
            <Img src="images/bridge2.png" w="clamp(4rem, 8vw, 6rem)" />
          </Flex>
        </Flex>
        <Flex alignItems="center" gap="2">
          <Box color="white" fontWeight="bold" fontFamily="'Play', sans-serif">
            <Text mr="1" fontSize="2rem" as="span">
              0
            </Text>
            Bridge pts.
          </Box>
          {user.photo && (
            <Box>
              <Img
                src={user.photo}
                w="10"
                h="10"
                border="1.5px solid silver"
                rounded="full"
              />
            </Box>
          )}
        </Flex>
      </Flex>
    </Box>
  );
}
