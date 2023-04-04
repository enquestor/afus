import { Flex, Heading, Text } from "@chakra-ui/react";

function Logo() {
  const title = import.meta.env.VITE_TITLE || "Afus";
  const subtitle = import.meta.env.VITE_SUBTITLE || "A fucking URL shortener.";

  return (
    <Flex direction="column" alignItems="center">
      <Heading
        as="h1"
        fontSize={90}
        mb={1}
        userSelect="none"
        _hover={{ cursor: "default" }}
      >
        {title}
      </Heading>
      <Text
        fontSize="2xl"
        color="gray.500"
        pb={10}
        userSelect="none"
        _hover={{ cursor: "default" }}
      >
        {subtitle}
      </Text>
    </Flex>
  );
}

export default Logo;
