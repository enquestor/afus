import { Flex, Heading, Text } from "@chakra-ui/react";
import config from "./config";

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
        {config.AFUS_TITLE}
      </Heading>
      <Text
        fontSize="2xl"
        color="gray.500"
        pb={10}
        userSelect="none"
        _hover={{ cursor: "default" }}
      >
        {config.AFUS_SUBTITLE}
      </Text>
    </Flex>
  );
}

export default Logo;
