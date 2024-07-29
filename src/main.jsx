import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import App from "./components/App.jsx";
import './assets/css/index.css'

const colors = {
  main: {
    primary: "#1a365d",
    secondary: "#1a365d",
    accent: "#1a365d",
  },
};
const theme = extendTheme({ colors });

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
