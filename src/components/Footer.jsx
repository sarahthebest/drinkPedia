import { Box, Heading, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Box fontSize="1.1em" w="full" h="40" display="flex" flexDirection="column">
      <Heading padding="4" className="strong">
        DrinkPedia
      </Heading>
      <Box paddingLeft="4" display="flex" gap="2" flexDir="row">
        <Text>
          Welcome to DrinkPedia. Built with React + ChakraUI using:
        </Text>
        <Link className="linkDecoration" to="https://www.thecocktaildb.com/">TheCocktailDB</Link>
        <br/>
        <Link className="linkDecoration" to="https://github.com/sarahthebest/drinkPedia">GitHub</Link>
      </Box>
    </Box>
  );
};

export default Footer;
