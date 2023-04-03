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

function Logo() {
  const [count, setCount] = useState(0);

  return (
    <Flex direction="column" alignItems="center">
      <Heading
        as="h1"
        fontSize={100}
        mb={2}
        userSelect="none"
        _hover={{ cursor: "default" }}
      >
        Afus
      </Heading>
      <Text
        fontSize="2xl"
        color="gray.600"
        pb={12}
        userSelect="none"
        _hover={{ cursor: "default" }}
      >
        A fucking URL shortener.
      </Text>
    </Flex>
  );
}

export default Logo;
