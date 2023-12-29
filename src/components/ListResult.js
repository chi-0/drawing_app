import { Text } from "@chakra-ui/react";

export const ListResult = ({ arr, result }) => {
  return (
    <>
      {arr.length !== 0 && (
        <>
          <Text mb={"5px"} fontSize={"15px"} fontWeight={"500"}>
            개수: {arr.length}
          </Text>
          <Text fontSize={"20px"} fontWeight={"600"}>
            결과: {result}
          </Text>
        </>
      )}
    </>
  );
};
