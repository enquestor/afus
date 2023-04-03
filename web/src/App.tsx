import { useState } from "react";
import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import { LinkIcon } from "@chakra-ui/icons";
import Footer from "./Footer";
import Logo from "./Logo";

function App() {
  const [url, setUrl] = useState("");
  const [isGeneratingUrl, setIsGeneratingUrl] = useState(false);
  const [code, setCode] = useState("");

  const handleUrlChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setUrl(e.target.value);

  const handleUrlGeneration = async () => {
    setIsGeneratingUrl(true);

    try {
      const result = await fetch("http://localhost:3000/", {
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

    setIsGeneratingUrl(false);
  };

  const handleModalClose = () => {
    setCode("");
  };

  return (
    <>
      <Center h="100vh" w="100vw">
        <Flex direction="column" alignItems="center">
          <Logo />
          <InputGroup alignItems="center">
            <Input
              value={url}
              onChange={handleUrlChange}
              size="lg"
              w="500px"
              placeholder="Link"
              focusBorderColor="black"
            />
            <InputRightElement top="-moz-initial" pr="2">
              <Button
                isLoading={isGeneratingUrl}
                onClick={handleUrlGeneration}
                variant="ghost"
              >
                <LinkIcon color="gray.400" />
              </Button>
            </InputRightElement>
          </InputGroup>
        </Flex>
      </Center>
      <Footer />
      <Modal isCentered isOpen={code != ""} onClose={handleModalClose}>
        <ModalOverlay
          bg="blackAlpha.300"
          backdropFilter="blur(10px) hue-rotate(90deg)"
        />
        <ModalContent>
          <ModalBody>
            <Text>
              {window.location.origin}/{code}
            </Text>
          </ModalBody>
          <ModalFooter>
            <Button onClick={handleModalClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default App;
