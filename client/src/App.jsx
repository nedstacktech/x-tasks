import { useState, createContext } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Box, Container, Img } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import Tasks from "./components/Tasks";
import Posts from "./components/Posts";

import "./App.css";
import Faq from "./components/Faq";
import Test from "./components/Test";
import Footer from "./components/Footer";
// import Posts from "./components/Posts";
import { io } from "socket.io-client";
const API_URL = "http://localhost:3000";
const socket = io(API_URL);

export const AppContext = createContext({ socket: socket, API_URL: API_URL });
function App() {
  const [user, setUser] = useState({});

  return (
    <AppContext.Provider
      value={{ socket: socket, API_URL: API_URL, user: user, setUser: setUser }}
    >
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
        <Box pos="relative" overflow="hidden">
          <Box
            bg="url('/images/landscape_falling_logo.jpg')"
            zIndex="-1"
            filter="brightness(.2)"
            inset="0"
            animation="move 6s ease infinite"
            right="0"
            transition="6s ease"
            bottom="0"
            transform="scale(1.3)"
            pos="absolute"
          />

          <Navbar />
          <Test />
          <Tasks />
        </Box>
        <Posts />
        <Faq />
        <Footer />
      </Container>
    </AppContext.Provider>
  );
}

export default App;
