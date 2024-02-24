import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/App2.jsx";
import SignIn from "./components/Test2.jsx";
import AuthPage from "./components/Auth.jsx";
const theme = extendTheme({
  colors: {
    brand: {
      100: "rgb(98, 52, 184)",
      // ...
      900: "#1a202c",
      bg: "linear-gradient(180deg,#7430a0 -59.43%,#5036cc)",
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
