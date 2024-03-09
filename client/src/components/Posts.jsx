import React, { useContext, useEffect } from "react";
import {
  Box,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
  Heading,
} from "@chakra-ui/react";
import Carousel from "react-multi-carousel";
// import axios from "axios";
// import Twit from "twit";
// import { TwitterApi } from "twitter-api-v2";
import { AppContext } from "../App.jsx";

import "react-multi-carousel/lib/styles.css";

// const twitterClient = new TwitterApi(
//   "AAAAAAAAAAAAAAAAAAAAAOLksQEAAAAA%2BKZosMvCIPMDMS6Q2mCp9uV%2BsVY%3DnMRszS8lIFbKxNicMzdLvOcxxbvTQ1znY6BGl33rY0qw6Y0iCo"
// );
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    // slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    // slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

// const tweets = async () => {
//   let response = await axios.get("https://api.twitter.com/2/tweets", {
//     headers: {
//       Authorization: "Bearer 1754625144096489473",
//     },
//   });
//   console.log(response.json());
// };
// tweets();
// const twitterApiClient = new TwitterClient({
//   apiKey: "bjlpU2VtaUxNVjdQNjMzc2J4Qmw6MTpjaQ",
//   apiSecret: "rZVQbLjmxHUdGJ2FmSwaTYPf41oKLhwOBJxOtvQzh8RCpiqZF3",
//   accessToken: "1754625144096489473-YQcZxB5To4c3zm0sVaNyPFXwf992LB",
//   accessTokenSecret: "C7TYL1AMJIGXJTlBfjKsv8V3ABmzn9bFlrOFtLz7EGrGa",
// });

// // Example: Fetch user timeline
// const tweets = await twitterApiClient.tweets.statusesUserTimeline({ screen_name: 'twitter', count: 10 });
// console.log(tweets);

// const client = new Twitter({
//   version: "2",
//   extension: false,
//   consumer_key: "bjlpU2VtaUxNVjdQNjMzc2J4Qmw6MTpjaQ",
//   consumer_secret: "rZVQbLjmxHUdGJ2FmSwaTYPf41oKLhwOBJxOtvQzh8RCpiqZF3",
//   access_token_key: "1754625144096489473-YQcZxB5To4c3zm0sVaNyPFXwf992LB",
//   access_token_secret: "C7TYL1AMJIGXJTlBfjKsv8V3ABmzn9bFlrOFtLz7EGrGa",
// });

// Fetch tweets from your timeline
// async function fetchTweets() {
//   try {
//     // Make a request to the Twitter API
//     const tweets = await client.get("statuses/user_timeline", {
//       screen_name: "@GefPef4642", // Your Twitter username
//       count: 10, // Number of tweets to fetch
//     });

//     // Process the fetched tweets
//     tweets.forEach((tweet) => {
//       console.log(tweet); // Output tweet text
//     });
//   } catch (err) {
//     console.error("Error fetching tweets:", err);
//   }
// }
// fetchTweets();
function Posts() {
  const { API_URL } = useContext(AppContext);

  let f = async () => {
    const response = await fetch(`${API_URL}/tweets`);
    console.log(response);
  };
  useEffect(() => {
    // f()
  }, []);
  return (
    <Box bg="#ddd" py="10" px="6">
      <Box maxW="70rem" mx="auto">
        <Heading as="h3" fontSize={"1.5rem"} mb="8" onClick={f}>
          Engage with our past Twitter Posts
        </Heading>
        <Carousel
          swipeable={true}
          //         // draggable={false}
          //         // showDots={true}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          keyBoardControl={true}
          customTransition="all .5s"
          transitionDuration={"500ms"}
          //         containerClass="carousel-container"
          //         // removeArrowOnDeviceType={["tablet", "mobile"]}
          //         // deviceType={this.props.deviceType}
          //         // dotListClass="custom-dot-list-style"
          //         itemClass="carousel-item-padding-40-px"
        >
          {[1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
            <Box bg="grey" py="6" key={index} px="6" rounded="lg" shadow={"md"}>
              <Box display={"flex"} justifyContent={"space-between"}>
                <SkeletonCircle size="10" />
                <Box color={"white"}>{index}</Box>
              </Box>
              <Skeleton height={"28"} mt="2" />
              <SkeletonText
                mt="2"
                noOfLines={2}
                spacing="2"
                skeletonHeight="8"
              />
            </Box>
          ))}
          {/* </Skeleton> */}
        </Carousel>
      </Box>
    </Box>
  );
}

export default Posts;
