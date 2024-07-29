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
import { useState } from "react";

const SearchModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [searchTerm, SetSearchTerm] = useState("");

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
              <Input type="text" placeholder="Search..." />
            </InputGroup>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default SearchModal;
