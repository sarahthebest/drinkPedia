import { Box, Heading, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Box w="full" h="40" display="flex" flexDirection="column">
      <Heading padding="4" className="strong">
        DrinkPedia
      </Heading>
      <Box paddingLeft="4" display="flex" gap="2" flexDir="row">
        <Text>
          Welcome to DrinkPedia. Built with React + ChakraUI using:
        </Text>
        <Link to="https://www.thecocktaildb.com/">TheCocktailDB</Link>
        <br/>
        <Link to="https://github.com/sarahthebest/drinkPedia">GitHub</Link>
      </Box>
    </Box>
  );
};

export default Footer;
