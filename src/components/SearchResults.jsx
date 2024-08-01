import { Box, Grid, GridItem, Heading } from "@chakra-ui/react";
import DrinkCard from "./DrinkCard";
import { useLocation, useNavigate } from "react-router-dom";
import Hero from "./Hero";
import Footer from "./Footer";
import Nav from "./Nav";

const SearchResults = () => {
  const location = useLocation();
  const searchTerm = location.state?.searchTerm;
  const searchResult = location.state?.searchResult;
  const filterResult = location.state?.filterResult;
  const results = searchResult || filterResult;
  const navigate = useNavigate();

  if (!results) {
    return <div>No drinks found, try again.</div>;
  }

  const headingText = searchTerm
    ? `Search Results for: ${searchTerm}`
    : filterResult
    ? `  ${location.state.category}`
    : "Results";
    
  const handleDrinkClick = (drinkId) => {
    navigate(`/drink/${drinkId}`);
  };
  return (
    <>
      <Nav />
      <Hero />
      <Box borderBottom="1px" padding="10">
        <Heading size="lg" className="norm">
          {headingText}
        </Heading>
      </Box>
      <Grid
        templateColumns={[
          "repeat(1, 1fr)",
          "repeat(2, 1fr)",
          "repeat(3, 1fr)",
          "repeat(4, 1fr)",
        ]}
        marginBottom="10px"
      >
        {results.map((drink, index) => (
           <GridItem
           key={index}
           borderRadius="0"
           borderBottom="1px solid"
           borderLeft="1px solid"
           borderRight={index === results.length - 1 ? "1px solid" : "none"}
           _hover={{
             bg: "black",
             transitionDuration: '0.2s',
             transitionTimingFunction: "ease-in-out"
           }}
           onClick={() => handleDrinkClick(drink.idDrink)}
         >
           <DrinkCard drink={drink} />
         </GridItem>
        ))}
      </Grid>
      <Footer />
    </>
  );
};

export default SearchResults;
