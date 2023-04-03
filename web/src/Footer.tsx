import { useState } from "react";
import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import { LinkIcon } from "@chakra-ui/icons";

function Footer() {
  const [count, setCount] = useState(0);

  return (
    <Flex
      position="absolute"
      bottom="0"
      w="100vw"
      p="4"
      justifyContent="center"
    >
      <Button variant="link">GitHub</Button>
    </Flex>
  );
}

export default Footer;
