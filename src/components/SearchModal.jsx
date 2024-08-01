import {
  Modal,
  ModalOverlay,
  ModalContent,
  Input,
  ModalBody,
  Button,
  Icon,
  InputLeftAddon,
  InputGroup,
} from "@chakra-ui/react";
import { CiSearch } from "react-icons/ci";
import { useDisclosure } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const SearchModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();

  function onSearch(searchString) {
    fetch(
      "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + searchString
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error("There was an error searching for the drink");
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
        navigate("/SearchResults", {
          state: { searchTerm: searchString, searchResult: data.drinks },
        });
      })
      .catch((err) => {
        console.error("Fetch error:", err);
      });
  }

  return (
    <>
      <Button
        onClick={onOpen}
        borderRadius="full"
        w="40px"
        h="40px"
        bg="lightgrey"
      >
        <Icon as={CiSearch} />
      </Button>
      <Modal size="sm" isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalBody>
            <InputGroup>
              <InputLeftAddon>
                <Icon as={CiSearch} />
              </InputLeftAddon>
              <Input
                type="search"
                placeholder="Search..."
                onKeyUp={(e) => {
                  if (e.key === "Enter") {
                    onSearch(e.target.value);
                  }
                }}
              />
            </InputGroup>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default SearchModal;
