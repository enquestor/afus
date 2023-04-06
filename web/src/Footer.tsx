import { Button, Flex, Link, useColorMode } from "@chakra-ui/react";

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
      <Button
        as={Link}
        href="https://github.com/Enquestor/afus"
        isExternal
        variant="link"
        pr="16px"
      >
        GitHub
      </Button>
    </Flex>
  );
}

export default Footer;
