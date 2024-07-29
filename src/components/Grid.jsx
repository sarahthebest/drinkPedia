import { Grid, GridItem } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import DrinkCard from "./DrinkCard";

const DrinkGrid = () => {
  const [drinks, setDrinks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a");
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

  return (
<Grid templateColumns="repeat(4, 1fr)" marginBottom='10px'>
  {drinks.slice(0, 16).map((drink, index) => (
    <GridItem key={index} borderRadius='0' borderBottom='1px solid' borderLeft='1px solid'>
      <DrinkCard drink={drink} />
    </GridItem>
  ))}
</Grid>

  );
};

export default DrinkGrid;
