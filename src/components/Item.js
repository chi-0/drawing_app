import { Button, ListItem, Text, UnorderedList } from "@chakra-ui/react";

export const Item = ({ arr, deleteItem }) => {
  const deleteHandler = (e) => {
    const target = e.currentTarget.previousSibling.innerText.slice(2);
    const removeIndex = arr.lastIndexOf(target);
    deleteItem(removeIndex);
  };

  return (
    <>
      <UnorderedList p={"20px"} m={"0"}>
        {arr.length === 0 ? (
          <>
            <ListItem textAlign={"center"}>
              <Text fontSize={"15px"} opacity={"0.4"}>
                리스트가 없습니다.
              </Text>
            </ListItem>
          </>
        ) : (
          <>
            {arr.map((data, index) => (
              <ListItem
                display={"flex"}
                alignItems={"center"}
                justifyContent={"space-between"}
                key={index}
              >
                <Text fontSize={"20px"}>- {data}</Text>
                <Button
                  w={"fit-content"}
                  h={"fit-content"}
                  p={"2px"}
                  fontSize={"15px"}
                  fontWeight={"400"}
                  colorScheme={"red"}
                  onClick={deleteHandler}
                >
                  삭제
                </Button>
              </ListItem>
            ))}
          </>
        )}
      </UnorderedList>
    </>
  );
};
