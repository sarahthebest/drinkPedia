import { Box, Heading, Stack, Text } from "@chakra-ui/react";

const Hero = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      position="relative"
      alignItems="center"
      justifyContent={"space-between"}
      height="500px"
      className="hero"
      overflow="hidden"
    >
      <Stack wrap="wrap" direction="row">
        <Heading
          as="h1"
          marginTop={["20px"]}
          marginLeft="20px"
          fontSize={["2em", "3em", "4em", "6em"]}
          className="strong spaced"
          fontStyle="italic"
        >
          Classic Cocktails
        </Heading>
        <div className="circle"></div>
        <Heading
          marginLeft={["20px"]}
          as="h2"
          fontSize={["4em", "6em", "4em"]}
          marginTop={["20px", "20px", "170px","170px"]}
        >
          <Text className="strong">Bold</Text>
          <Text marginLeft="10" className="light spaced">
            & Refreshing
          </Text>
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
