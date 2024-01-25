import { Box, Flex, Text, useDisclosure } from "@chakra-ui/react";
import { Todo } from "../model";
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import { FaCheck } from "react-icons/fa";
import useTask from "../store/useTask";
import ModalEdit from "./ModalEdit";

interface Props {
  tasking: Todo;
}

const ProgressClear = ({ tasking }: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const task = useTask((state) => state.tasks);
  const checkIn = useTask((state) => state.checkedTasK);
  const handleClear = (id: number) => {
    const isClear = task.map((item) => {
      if (item.id === id) {
        return { ...item, completed: !item.completed };
      } else {
        return item;
      }
    });
    localStorage.setItem("tasks", JSON.stringify(isClear));
    checkIn(isClear);
  };
  const handleDelete = (id: number) => {
    if (!window.confirm("Are you sure?")) return;
    const deleteTask = task.filter((item) => item.id !== id);
    localStorage.setItem("tasks", JSON.stringify(deleteTask));
    checkIn(deleteTask);
  };
  return (
    <>
      <Flex
        w="full"
        justifyContent="space-evenly"
        mt={"10px"}
        alignItems="start"
        bg="green.300"
        px="2"
        py="5"
        rounded="xl">
        <Text flex="1" fontSize="1.1rem" fontWeight={"bold"} mr={"10px"}>
          {tasking.text}
        </Text>
        <Flex flex="1" cursor="pointer" justifyContent="center" gap="5">
          {tasking.completed && (
            <>
              <Box onClick={() => handleDelete(tasking.id)}>
                <MdDelete />
              </Box>
            </>
          )}
          {!tasking.completed && (
            <>
              <Box onClick={onOpen}>
                <CiEdit />
              </Box>
              <Box onClick={() => handleDelete(tasking.id)}>
                <MdDelete />
              </Box>
              <Box onClick={() => handleClear(tasking.id)}>
                <FaCheck />
              </Box>
            </>
          )}
        </Flex>
      </Flex>
      {onOpen && (
        <ModalEdit isOpen={isOpen} onClose={onClose} tasking={tasking} />
      )}
    </>
  );
};

export default ProgressClear;
