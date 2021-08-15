import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  useDisclosure,
  useColorModeValue,
  Heading,
  Drawer,
  DrawerCloseButton,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  Divider,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

const NavLink = ({ children, HomeRoute }) => (
  <Link
    p={3}
    m={3}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
    href={`/${HomeRoute}/${children}`}
  >
    {children}

    <Divider></Divider>
  </Link>
);

export default function Simple({ Linkst, HomeRoute }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box
      bg={useColorModeValue("gray.100", "gray.900")}
      px={4}
      overscrollY="hidden"
    >
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        <IconButton
          size={"md"}
          icon={<HamburgerIcon />}
          aria-label={"Open Menu"}
          display={{ md: "none" }}
          onClick={isOpen ? onClose : onOpen}
          bg="gray.900"
        />
        <HStack spacing={8} alignItems={"center"}>
          <HStack as={"nav"} spacing={4} display={{ base: "none", md: "flex" }}>
            {Linkst.map((link) => (
              <NavLink key={link} HomeRoute={HomeRoute}>
                {link}
              </NavLink>
            ))}
          </HStack>
        </HStack>
        <Flex alignItems={"center"}>
          <Heading as="h1" size="lg" letterSpacing={"tighter"}>
            Lumberyard
          </Heading>
        </Flex>
      </Flex>

      {isOpen ? (
        <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
          <DrawerOverlay />

          <DrawerContent>
            <DrawerHeader>Menú</DrawerHeader>
            <DrawerCloseButton />
            {Linkst.map((link) => (
              <NavLink key={link} HomeRoute={HomeRoute}>
                {link}
              </NavLink>
            ))}
          </DrawerContent>
        </Drawer>
      ) : null}
    </Box>
  );
}
