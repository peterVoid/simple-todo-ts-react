import {
  Box,
  Button,
  Container,
  Flex,
  Highlight,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { BsFillSendArrowDownFill } from "react-icons/bs";
import { useState } from "react";
import useAddTask from "./hooks/useAddTask";
import ContainerTodos from "./components/ContainerTodos";

const App = () => {
  const [input, setInput] = useState<string>("");
  const handleSubmit = useAddTask();

  return (
    <Box w="100%" height="100vh" bg="gray.100">
      <Container maxW="container.xxl" textAlign={"center"} pt={16}>
        <Flex flexDir="column" alignItems={"center"} justifyContent={"center"}>
          <Box fontWeight={"bold"} fontSize={"5xl"}>
            <Highlight
              query="Todo"
              styles={{ px: "2", py: "1", rounded: "full", bg: "red.400" }}>
              My Todo
            </Highlight>
          </Box>
          <Box pt="100px" w="700px" maxW="1100px">
            <InputGroup size="md">
              <Input
                onChange={(e) => setInput(e.target.value)}
                pr="4.5rem"
                placeholder="Enter password"
                outline={"1px solid gray"}
                _focus={{ border: "none" }}
              />
              <InputRightElement width="4.5rem">
                <Button
                  h="1.75rem"
                  size="sm"
                  cursor={"pointer"}
                  onClick={() => handleSubmit({ input, setInput })}>
                  <BsFillSendArrowDownFill />
                </Button>
              </InputRightElement>
            </InputGroup>
          </Box>
        </Flex>

        <ContainerTodos />
      </Container>
    </Box>
  );
};

export default App;
