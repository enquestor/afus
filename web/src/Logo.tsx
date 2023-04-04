import { Flex, Heading, Text } from "@chakra-ui/react";

function Logo() {
  return (
    <Flex direction="column" alignItems="center">
      <Heading
        as="h1"
        fontSize={90}
        mb={1}
        userSelect="none"
        _hover={{ cursor: "default" }}
      >
        Afus
      </Heading>
      <Text
        fontSize="2xl"
        color="gray.600"
        pb={10}
        userSelect="none"
        _hover={{ cursor: "default" }}
      >
        A fucking URL shortener.
      </Text>
    </Flex>
  );
}

export default Logo;
