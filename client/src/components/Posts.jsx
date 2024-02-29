import React from "react";
import { Box, Skeleton, SkeletonCircle, SkeletonText, Heading } from "@chakra-ui/react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

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
function Posts() {
  return (
    <Box bg="#ddd" py="10" px="6">
    <Box maxW="70rem" mx="auto" >
      <Heading as="h3" fontSize={"1.5rem"} mb="8">Engage with our past Twitter Posts</Heading>
      <Carousel
        swipeable={true}
//         // draggable={false}
//         // showDots={true}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
infinite={true}
        keyBoardControl={true}
        customTransition="all .5s"
        transitionDuration={'500ms'}
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
            <SkeletonText mt="2" noOfLines={2} spacing="2" skeletonHeight="8" />
          </Box>
        ))}
        {/* </Skeleton> */}
      </Carousel>
      
    </Box>
    </Box>
  );
}

export default Posts;
