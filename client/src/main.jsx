import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import App2 from "./components/App2.jsx";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";


const theme = extendTheme({
  colors: {
    fonts: {
      heading: `"Play", sans-serif`,
      body: "'Play', sans-serif",
    },
    brand: {
      100: "silver",
      // ...
      900: "#2a0001",
      bg: "silver",
    },
  },
});
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  // {
  //   path: "/auth-page",
  //   element: <AuthPage />,
  // },
  // {
  //   path: "/home",
  //   element: <Home />,
  // },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
        <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>
);
