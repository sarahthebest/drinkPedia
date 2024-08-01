import { Box, HStack, Image } from "@chakra-ui/react";
import SearchModal from "./SearchModal";
import { Link } from "react-router-dom";
import FilterModal from "./FilterModal";

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
          <Link to="/">
            <Image src="src/assets/img/logo.png" boxSize="50px" />
          </Link>
          <SearchModal />
          <FilterModal />
        </HStack>
      </Box>
  );
};

export default Nav;
