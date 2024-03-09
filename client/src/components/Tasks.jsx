import {
  Box,
  Stack,
  Flex,
  Heading,
  Text,
  Link,
  Img,
  Grid,
  Button,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useState, useEffect, useContext } from "react";
import { FaXTwitter } from "react-icons/fa6";
import { AppContext } from "../App.jsx";
// console.log(socket)
export default function Tasks({ title, isCentered }) {
  const [openNav, setOpenNav] = useState(false);
  const [disabled, setDisabled] = useState("");
  let popup = null;
  const { socket, API_URL, user, setUser, score, setScore } = useContext(
    AppContext
  );

  useEffect(() => {
    socket.on("user", (user) => {
      console.log(popup);
      popup.close();
      console.log(user);
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
  const incrementScore = () => {
    setScore((prevScore) => prevScore + 2);
  };
  return (
    <Flex
      maxW="65rem"
      mx="auto"
      py="6rem"
      px="6"
      alignItems="center"
      justifyContent={"space-between"}
    >
      {/* <h1>Current tasks</h1> */}
      <script
        type="text/javascript"
        async
        src="https://platform.twitter.com/widgets.js"
      ></script>
      <Box w={{ md: "40%" }}>
        <Heading
          as="h2"
          fontSize={"4rem"}
          color={"white"}
          fontWeight={"semibold"}
          fontFamily={`"Play", sans-serif`}
          letterSpacing={".7rem"}
          // mb="0"
        >
          BRIDGE
        </Heading>
        <Heading
          as="h3"
          fontSize={"2rem"}
          color={"silver"}
          fontWeight={"semibold"}
          fontFamily={`"Play", sans-serif`}
          // letterSpacing={".7rem"}
          // mb="0"
        >
          Airdrop Engagement
        </Heading>

        <Text
          color={"rgb(100,100,100)"}
          fontWeight={"semibold"}
          fontSize={"1.5rem"}
          mt="0"
        >
          Earn rewards for engaging.
        </Text>
        {user.name && (
          <Button
            display="flex"
            alignItems="center"
            gap="2"
            py="6"
            w="full"
            mt="4"
            fontSize="1.5rem"
            onClick={startAuth}
            boxShadow={"5px 5px 3px rgba(200,200,200,.8)"}
            // bg="brand.100"
            transition="all .3s ease"
            _hover={{ bg: "rgba(235,235,235,.8)" }}
          >
            <FaXTwitter mr="2" /> Connect
          </Button>
        )}
        {/* {user.name && ( */}
        <Grid
          gridTemplateColumns={"repeat(2,1fr)"}
          fontWeight={"semibold"}
          gap="4"
          my="5"
        >
          <Link
            _hover={{ color: "rgba(255,255,255,.6)" }}
            fontSize={"1.2rem"}
            bg={"brand.bg"}
            color={"white"}
            display={"flex"}
            gap="2"
            px="4"
            data-show-count="false"
            alignItems={"center"}
            rounded={"md"}
            data-show-screen-name="false"
            py="2"
            target="_blank"
            // className="twitter-follow-button"
            onClick={incrementScore}
            href="https://twitter.com/jefperf?ref_src=twsrc%5Etfw"
          >
            <FaXTwitter /> Follow @jefperf
          </Link>
          <Link
            _hover={{ color: "rgba(255,255,255,.6)" }}
            fontSize={"1.2rem"}
            // bg={"brand.bg"}
            border="1px solid"
            borderColor={"brand.100"}
            color={"brand.100"}
            display={"flex"}
            gap="2"
            px="4"
            alignItems={"center"}
            rounded={"md"}
            py="2"
            onClick={incrementScore}
            href="https://twitter.com/intent/like?tweet_id=463440424141459456"
            target="_blank"
          >
            <FaXTwitter /> Like on Twitter
          </Link>
          <Link
            _hover={{ opacity: ".6" }}
            fontSize={"1.2rem"}
            border="1px solid"
            borderColor={"brand.bg"}
            color={"brand.bg"}
            display={"flex"}
            gap="2"
            px="4"
            alignItems={"center"}
            rounded={"md"}
            py="2"
            target="_blank"
            onClick={incrementScore}
            href="https://twitter.com/intent/retweet?tweet_id=463440424141459456"
          >
            <FaXTwitter /> Retweet
          </Link>
          <Link
            _hover={{ color: "rgba(255,255,255,.6)" }}
            fontSize={"1.2rem"}
            bg={"brand.bg"}
            color={"white"}
            display={"flex"}
            gap="2"
            px="4"
            alignItems={"center"}
            rounded={"md"}
            target="_blank"
            py="1"
            onClick={incrementScore}
            href="https://twitter.com/intent/tweet?in_reply_to=463440424141459456"
          >
            Reply
          </Link>
        </Grid>
        {/* )} */}
      </Box>
      <Box
        w="45%"
        pos="relative"
        pb="30%"
        display={{ base: "none", md: "block" }}
      >
        <Img
          src="images/roadmap.jpg"
          animation="scale 6s ease infinite"
          transition="all 6s ease"
          transform="skew(2deg, 5deg) translate(2rem, -2rem)"
          filter="brightness(.5) blur(3px)"
          pos="absolute"
          top="0"
          w="full"
          alt="jumbo image"
        />
        <Img
          src="images/roadmap.jpg"
          transition="all 6s ease"
          transform="skew(2deg, 5deg)"
          animation="fade 6s ease infinite"
          pos="absolute"
          top="0"
          w="full"
          alt="jumbo image"
        />
      </Box>
    </Flex>
  );
}
