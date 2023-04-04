import { ChakraProvider, extendTheme, ThemeConfig } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const colors = {};
const config: ThemeConfig = {
  initialColorMode: "system",
  useSystemColorMode: false,
};

const theme = extendTheme({ colors, config });

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
