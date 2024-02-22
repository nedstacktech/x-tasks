import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Box, Container, Img } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import Tasks from "./components/Tasks";
import Posts from "./components/Posts";


import "./App.css";
import Faq from "./components/Faq";
// import Posts from "./components/Posts";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Container
      maxW={"unset"}
      p={"0"}
      // bg="gray.100"
      // bgGradient="linear(to-r, gray.200, yellow.300, #f2ca2b)"
      // opacity={0.9}
      // bg={"url('stacked-waves.svg') #f2ca2b no-repeat top left"}
      // bgSize={"cover"}
      // overflow={"hidden"}
    >
      <Navbar />
      <Tasks />
      <Posts />
      <Faq />
    </Container>
  );
}

export default App;
