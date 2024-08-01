import { Grid, GridItem } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import DrinkCard from "./DrinkCard";
import { useNavigate } from "react-router-dom";

const DrinkGrid = () => {
  const [drinks, setDrinks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a"
        );
        const data = await response.json();
        setDrinks(data.drinks || []);
      } catch (error) {
        console.error("Error fetching drinks:", error);
      }
    };

    fetchData();

    return () => {
      setDrinks([]);
    };
  }, []);

  const handleDrinkClick = (drinkId) => {
    navigate(`/drink/${drinkId}`);
  };

  return (
    <Grid
      templateColumns={[
        "repeat(1, 1fr)",
        "repeat(2, 1fr)",
        "repeat(3, 1fr)",
        "repeat(4, 1fr)",
      ]}
      marginBottom="10px"
    >
      {drinks.slice(0, 16).map((drink, index) => (
        <GridItem
          key={index}
          borderRadius="0"
          borderBottom="1px solid"
          borderLeft="1px solid"
          _hover={{
            bg: "black",
            transitionDuration: "0.2s",
            transitionTimingFunction: "ease-in-out",
          }}
          onClick={() => handleDrinkClick(drink.idDrink)}
        >
          <DrinkCard drink={drink} />
        </GridItem>
      ))}
    </Grid>
  );
};

export default DrinkGrid;
