import {
  Box,
  Stack,
  Flex,
  Heading,
  Text,
  Link,
  Img,
  Grid,
} from "@chakra-ui/react";
import axios from 'axios';
import React from "react";
import {FaXTwitter} from "react-icons/fa6";
export default function Tasks({ title, isCentered }) {
  const handleLogin = async () => {
    try {
      const response = await axios.get('http://localhost:3000/auth/twitter');
      console.log(response);
      // setAuthenticated(true);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Flex maxW="75rem" mx="auto" py="3rem" justifyContent={"space-between"}>
      {/* <h1>Current tasks</h1> */}
      <script
        type="text/javascript"
        async
        src="https://platform.twitter.com/widgets.js"
      ></script>
      <Box>
      
      <Heading
        as="h2"
        fontSize={"4rem"}
        color={"black"}
        fontWeight={"semibold"}
      >
        <Text color={"brand.100"}>Bridge Token</Text>
        Engagement Airdrop
      </Heading>
      <Text
        color={"rgb(100,100,100)"}
        fontWeight={"semibold"}
        fontSize={"1.5rem"}
        mt="5"
      >
        Earn rewards for engaging.
      </Text>
      <Grid
        gridTemplateColumns={"repeat(2,1fr)"}
        // fontWeight={"semibold"}
        gap="4"
        my="5"
      >
       {/* <form action="http://localhost:3000/auth/twitter"> */}
        <button type="submit" onClick={handleLogin}>Connect</button>
       {/* </form> */}
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
          py="2"
          className="twitter-follow-button"
          href="https://twitter.com/jefperf"
        >
         <FaXTwitter /> Follow on Twitter
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
          href="https://twitter.com/intent/like?tweet_id=463440424141459456"
          target="blank"
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
          py="1"
          href="https://twitter.com/intent/tweet?in_reply_to=463440424141459456"
        >
          Repost
        </Link>
      </Grid>
      </Box>
      <Box>
        <Img src="/jumbo-bg.svg" w="full" alt="jumbo image" />
      </Box>
    </Flex>
  );
}
