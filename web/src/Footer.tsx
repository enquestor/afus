import { Button, Flex, useColorMode } from "@chakra-ui/react";

function Footer() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex
      position="absolute"
      bottom="0"
      w="100vw"
      p="4"
      justifyContent="space-between"
    >
      <Button onClick={toggleColorMode}>
        {colorMode === "light" ? "Dark" : "Light"} Mode
      </Button>
      <Button variant="link" pr="8px">
        GitHub
      </Button>
    </Flex>
  );
}

export default Footer;
