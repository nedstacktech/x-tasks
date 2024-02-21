import { Box, Stack, Button } from "@chakra-ui/react";

import React from "react";

export default function Tasks({ title, isCentered }) {
  return (
    <Box>
      <h1>Current tasks</h1>
      <script
        type="text/javascript"
        async
        src="https://platform.twitter.com/widgets.js"
      ></script>

      <Stack direction="row" spacing={4} align="center">
        <Button colorScheme="teal" variant="link">
          <a class="twitter-follow-button" href="https://twitter.com/jefperf">
            Follow
          </a>
        </Button>
        <Button colorScheme="teal" variant="solid">
          <a
            href="https://twitter.com/intent/like?tweet_id=463440424141459456"
            target="blank"
          >
            Like
          </a>
        </Button>
        <Button colorScheme="teal" variant="outline">
          <a href="https://twitter.com/intent/retweet?tweet_id=463440424141459456">
            Retweet
          </a>
        </Button>
        <Button colorScheme="teal" variant="ghost">
          <a href="https://twitter.com/intent/tweet?in_reply_to=463440424141459456">
            Repost
          </a>
        </Button>
      </Stack>
    </Box>
  );
}
