import { Box, Heading, Stack, Text } from "@chakra-ui/react";

const Hero = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="space-between"
      height="500px"
      className="hero"
    >
      <Stack direction="row">
        <Heading as="h1" size="3xl" className="norm" fontStyle="italic">
          DrinkPedia
        </Heading>
        <div className="circle"></div>
        <Heading as="h2" size="4xl" marginTop="100px">
          <span className="strong">Strong</span> <br />&
          <span className="light"> Light</span> Drinks
        </Heading>
        <div className="circle2"></div>
      </Stack>
      <Text width="fit-content">Drink responsibly.</Text>
    </Box>
  );
};

export default Hero;
