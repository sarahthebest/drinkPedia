import { Box, Button, HStack, Icon, Image, Link } from "@chakra-ui/react";
import {  CiFilter  } from "react-icons/ci";
import SearchModal from "./SearchModal";

const Nav = () => {
  return (
      <Box
        width="fit-content"
        paddingX='8px'
        borderRadius="full"
        position="sticky"
        className="border nav"
        top='4'
        left='4'
      >
        <HStack spacing='2'>
          <Link>
            <Image src="src/assets/img/logo.png" boxSize="50px" />
          </Link>
          <SearchModal />
          <Button borderRadius='full' w="40px" h="40px" bg='lightgrey'>
            <Icon as={CiFilter} />
          </Button>
        </HStack>
      </Box>
  );
};

export default Nav;
