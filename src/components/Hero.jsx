import { Box, Heading, Stack, Text } from "@chakra-ui/react";

const Hero = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      position="relative"
      alignItems="center"
      justifyContent="space-between"
      height="500px"
      className="hero"
      overflow="hidden"
    >
      <Stack wrap="wrap" direction="row">
        <Heading
          as="h1"
          fontSize="8em"
          className="norm spaced"
          fontStyle="italic"
        >
          Cocktails
        </Heading>
        <div className="circle"></div>
        <Heading as="h2" size="4xl" marginTop="170px">
          <Text className="strong">Strong</Text>
          <Text marginLeft="10" marginTop="7" className="light spaced">& Light</Text>
        </Heading>
        <div className="circle2"></div>
      </Stack>
      <Text alignSelf="end" width="fit-content">
        Drink responsibly.
      </Text>
    </Box>
  );
};

export default Hero;
