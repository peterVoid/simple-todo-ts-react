import { Box, Flex } from "@chakra-ui/react";
import { useTask } from "../store/useTask";
import ProgressClear from "./ProgressClear";

const ContainerTodos = () => {
  const task = useTask((state) => state.tasks);
  const filterTaskClearIsTrue = task.filter((task) => task.completed === true);
  const filterTaskClearIsFalse = task.filter(
    (task) => task.completed === false
  );
  console.log(filterTaskClearIsFalse);
  console.log(filterTaskClearIsTrue);
  return (
    <Box w="900px" maxW={"1100px"} ml={"auto"} mr={"auto"} p={4}>
      <Flex w="full" gap="10" alignItems="start">
        <Box flex="1" bg="blue.400" rounded={"md"} p={4}>
          <Box fontWeight={"bold"} fontSize={"3xl"}>
            Progress
          </Box>
          {filterTaskClearIsFalse.map((task) => (
            <ProgressClear tasking={task} />
          ))}
        </Box>
        <Box flex="1" bg="green.400" rounded={"md"} p={4}>
          <Box fontWeight={"bold"} fontSize={"3xl"}>
            Completed
            {filterTaskClearIsTrue.map((task) => (
              <ProgressClear tasking={task} />
            ))}
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default ContainerTodos;
