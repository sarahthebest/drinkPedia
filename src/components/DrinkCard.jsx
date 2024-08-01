import {
  CardBody,
  Card,
  CardHeader,
  Heading,
  Tag,
} from "@chakra-ui/react";

const DrinkCard = ({ drink }) => {
  return (
    <Card
      borderRadius="0"
      height="100%"
      display="flex"
      flexDirection="column"
      justifyItems="justify-between"
      boxShadow="none"
      _hover={{
        borderRadius:"20px",
        bg:"white",
        transitionDuration: '0.2s',
        transitionTimingFunction: "ease-in-out"
      }}
    >
      <CardHeader
        width="100%"
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
      >
        <Heading size='lg' className="norm">{drink.strDrink}</Heading>
        <Tag
          height="fit-content"
          padding="2"
          borderRadius="full"
          colorScheme="purple"
        >
          {drink.strCategory}
        </Tag>
      </CardHeader>
      <CardBody>
        <img src={drink.strDrinkThumb} alt={drink.strDrink} />
      </CardBody>
    </Card>
  );
};

export default DrinkCard;
