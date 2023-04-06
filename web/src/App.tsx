import { useState } from "react";
import {
  Box,
  Center,
  Flex,
  Input,
  InputGroup,
  InputRightElement,
  Kbd,
  useToast,
} from "@chakra-ui/react";
import Footer from "./Footer";
import Logo from "./Logo";
import Result from "./Result";
import config from "./config";

function App() {
  const [url, setUrl] = useState("");
  const [code, setCode] = useState("");
  const [isGeneratingUrl, setIsGeneratingUrl] = useState(false);
  const toast = useToast();

  const handleUrlChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setUrl(e.target.value);

  const handleUrlGeneration = async () => {
    if (isGeneratingUrl) return;
    setIsGeneratingUrl(true);

    try {
      const result = await fetch(config.AFUS_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url }),
      });

      const parsed = await result.json();
      if (result.ok) {
        setCode(parsed.code);
      } else {
        toast({
          title: "Error",
          description: parsed.message,
          status: "error",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Request failed",
        status: "error",
      });
    }

    setIsGeneratingUrl(false);
  };

  return (
    <Box h="100dvh" w="100vw">
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
              isDisabled={isGeneratingUrl}
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
