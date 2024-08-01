import {
  Box,
  Container,
  Heading,
  Icon,
  Image,
  Tag,
  Tabs,
  TabList,
  TabPanels,
  TabPanel,
  Tab,
} from "@chakra-ui/react";
import { useParams, useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { useEffect, useState } from "react";

const DrinkPage = () => {
  const { drinkId } = useParams(); 
  const [drink, setDrink] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDrinkDetails = async () => {
      try {
        const res = await fetch(
          `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinkId}`
        );
        if (!res.ok) {
          throw new Error("Error fetching drink details");
        }
        const data = await res.json();
        setDrink(data.drinks[0]);
      } catch (error) {
        console.error("Error fetching drink details:", error);
      }
    };

    fetchDrinkDetails();
  }, [drinkId]);

  if (!drink) {
    return <div>Loading...</div>;
  }

  const ingredients = [];
  const measurements = [];

  for (let i = 1; i <= 20; i++) {
    const ingredient = drink[`strIngredient${i}`];
    const measurement = drink[`strMeasure${i}`];
    if (ingredient && ingredient.trim()) {
      ingredients.push(ingredient);
      measurements.push(measurement);
    }
  }

  const ingredientList = ingredients.map((ingredient, index) => {
    return `${measurements[index]} ${ingredient}`;
  });

  const instructions = drink.strInstructions
    ? drink.strInstructions.split(".").filter((instruction) => instruction.trim())
    : [];

  return (
    <Box
      h={["100%", "100%", "100vh"]}
      display="flex"
      flexDirection={["column", "column", "column", "row"]}
    >
      <Container
        maxWidth={["none", "none", "none", "70%"]}
        width="100%"
        bg="red.50"
        gap="4"
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection={["column", "column", "column", "row"]}
      >
        <button onClick={() => navigate(-1)}>
          <Icon
            color="black.600"
            display="flex"
            w="50px"
            h="50px"
            marginTop={["20px", "20px", "20px", "0"]}
            marginLeft={["0", "0", "0", "40px"]}
            as={IoIosArrowBack}
          />
        </button>
        <Image
          padding={["10px", "20px", "40px"]}
          borderRadius="15%"
          width={["80%", "70%", "60%", "600px"]}
          objectFit="contain"
          src={drink.strDrinkThumb}
          alt={drink.strDrink}
        />
      </Container>
      <Container
        display="flex"
        maxWidth={["none", "none", "70%"]}
        width="100%"
        flexDirection="column"
        justifyContent="center"
        gap="10"
        marginTop={["20px", "20px", "0"]}
      >
        <Box textAlign="center" marginX="auto">
          <Heading
            marginBottom="4"
            maxW="500px"
            fontSize="4.2em"
            className="strong"
            fontWeight="lighter"
            letterSpacing="8px"
          >
            {drink.strDrink}
          </Heading>
          <Tag fontSize="1em" bg="blue.100">
            {drink.strCategory}
          </Tag>
          <Tag fontSize="1em" marginX="2" bg="purple.100">
            {drink.strAlcoholic}
          </Tag>
          <Tag fontSize="1em" bg="green.100">
            {drink.strGlass}
          </Tag>
        </Box>
        <Tabs marginX="auto" isFitted width="300px" height="200px">
          <TabList>
            <Tab>Ingredients</Tab>
            <Tab>Steps</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <ul>
                {ingredientList.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </TabPanel>
            <TabPanel>
              <ul>
                {instructions.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Container>
    </Box>
  );
};

export default DrinkPage;
