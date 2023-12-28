import { Wrap } from "@chakra-ui/react";
import { ListCard } from "./components/ListCard";

function App() {
  return (
    <Wrap display={"flex"} w={"100%"} justifyContent={"center"} mt={"150px"}>
      <ListCard />
    </Wrap>
  );
}

export default App;
