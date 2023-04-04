import { useState } from "react";
import {
  Box,
  Center,
  Flex,
  Input,
  InputGroup,
  InputRightElement,
  Kbd,
} from "@chakra-ui/react";
import Footer from "./Footer";
import Logo from "./Logo";
import Result from "./Result";

function App() {
  const [url, setUrl] = useState("");
  const [code, setCode] = useState("");

  const handleUrlChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setUrl(e.target.value);

  const handleUrlGeneration = async () => {
    try {
      const result = await fetch(window.location.origin, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url }),
      });

      const parsed = await result.json();
      setCode(parsed.code);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box h="100vh" w="100vw">
      <Center h="100%" w="100%">
        <Flex
          direction="column"
          alignItems="center"
          h="90%"
          w="90%"
          maxW="500px"
        >
          <Box h="20%" />
          <Logo />
          <InputGroup alignItems="center" pb="32px">
            <Input
              autoFocus
              value={url}
              onChange={handleUrlChange}
              size="lg"
              placeholder="Link"
              focusBorderColor="gray.500"
              onKeyDown={(e) => e.key === "Enter" && handleUrlGeneration()}
            />
            <InputRightElement top="-moz-initial" pr="9">
              <Kbd userSelect="none" _hover={{ cursor: "default" }}>
                enter
              </Kbd>
            </InputRightElement>
          </InputGroup>
          <Result code={code} />
        </Flex>
      </Center>
      <Footer />
    </Box>
  );
}

export default App;
