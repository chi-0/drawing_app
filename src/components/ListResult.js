import { Text } from "@chakra-ui/react";

export const ListResult = ({ arr, result }) => {
  return (
    <>
      {arr.length !== 0 && (
        <>
          <Text fontSize={"20px"} fontWeight={"600"}>
            결과: {result}
          </Text>
        </>
      )}
    </>
  );
};
