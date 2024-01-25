import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Input,
} from "@chakra-ui/react";
import { useState } from "react";
import { Todo } from "../model";
import useTask from "../store/useTask";

interface Props {
  tasking: Todo;
  isOpen: any;
  onClose: any;
}

const ModalEdit = ({ isOpen, onClose, tasking }: Props) => {
  const [newText, setNewText] = useState<string>(tasking.text);
  const taskNow = useTask((state) => state.tasks);
  const editTasking = useTask((state) => state.checkedTasK);
  const handleEdit = () => {
    const editTask = taskNow.map((item) => {
      if (item.id === tasking.id) {
        return { ...item, text: newText };
      } else {
        return item;
      }
    });
    localStorage.setItem("tasks", JSON.stringify(editTask));
    editTasking(editTask);
    onClose();
  };
  return (
    <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Edit Task</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Input value={newText} onChange={(e) => setNewText(e.target.value)} />
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="red" mr={3} onClick={() => handleEdit()}>
            Edit
          </Button>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ModalEdit;
