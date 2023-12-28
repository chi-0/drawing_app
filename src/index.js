import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ChakraBaseProvider } from "@chakra-ui/react";
import { _theme } from "./style/style";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ChakraBaseProvider theme={_theme}>
      <App />
    </ChakraBaseProvider>
  </React.StrictMode>
);
