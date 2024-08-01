import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  Button,
  Icon,
  Radio,
  RadioGroup,
  Grid,
  ModalHeader,
  ModalFooter,
  useDisclosure,
} from "@chakra-ui/react";
import { CiFilter } from "react-icons/ci";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const FilterModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [filters, setFilters] = useState([]);
  const selectedFilterRef = useRef("");
  const navigate = useNavigate();

  useEffect(() => {
    const getFilters = async () => {
      try {
        const res = await fetch(
          "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list"
        );
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await res.json();
        setFilters(data.drinks || []);
      } catch (error) {
        console.error("Error fetching filters:", error);
      }
    };

    getFilters();
  }, []);

  const onFilter = () => {
    const selectedFilter = selectedFilterRef.current; 
    if (selectedFilter) {
      console.log(selectedFilter);
      fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${encodeURIComponent(
          selectedFilter
        )}`
      )
        .then((res) => {
          if (!res.ok) {
            throw new Error("There was an error filtering");
          }
          return res.json();
        })
        .then((data) => {
          navigate("/SearchResults", {
            state: { filterResult: data.drinks, category: selectedFilter },
          });
        })
        .catch((err) => {
          console.error("Fetch error:", err);
        });
    } else {
      console.error("No filter selected");
    }
  };

  return (
    <>
      <Button
        onClick={onOpen}
        borderRadius="full"
        w="40px"
        h="40px"
        bg="lightgrey"
      >
        <Icon as={CiFilter} />
      </Button>
      <Modal size="xl" isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>List of Categories</ModalHeader>
          <ModalBody>
            <RadioGroup
              onChange={(value) => {
                selectedFilterRef.current = value; 
              }}
            >
              <Grid
                gap="4"
                templateColumns={[
                  "repeat(1, 1fr)",
                  "repeat(2, 1fr)",
                  "repeat(3, 1fr)",
                  "repeat(4, 1fr)",
                ]}
              >
                {filters.length > 0 ? (
                  filters.map((filter, index) => (
                    <Radio key={index} value={filter.strCategory}>
                      {filter.strCategory}
                    </Radio>
                  ))
                ) : (
                  <Radio isDisabled>Categories not available</Radio>
                )}
              </Grid>
            </RadioGroup>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onFilter} marginX="auto">
              Apply filter
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default FilterModal;
