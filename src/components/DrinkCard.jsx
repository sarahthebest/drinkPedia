import {
  CardBody,
  Card,
  CardFooter,
  CardHeader,
  Badge,
  Heading,
} from "@chakra-ui/react";

const DrinkCard = ({ drink }) => {
  return (
    <Card
      borderRadius="0"
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      <CardHeader
        width="100%"
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
      >
        <Heading size='md' className="strong">{drink.strDrink}</Heading>
        <Badge
          height="fit-content"
          padding="1"
          borderRadius="full"
          colorScheme="purple"
        >
          {drink.strCategory}
        </Badge>
      </CardHeader>
      <CardBody>
        <img src={drink.strDrinkThumb} alt="" />
      </CardBody>
      <CardFooter></CardFooter>
    </Card>
  );
};

export default DrinkCard;
