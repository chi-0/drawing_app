import { Button, ButtonGroup } from "@chakra-ui/react";

export const ListBtn = ({ arr, getResult, resetItem }) => {
  const clickHandler = () => {
    const data = arr[~~(Math.random() * arr.length)];
    getResult(data);
  };

  const resetHandler = () => {
    resetItem();
  };

  return (
    <>
      <ButtonGroup spacing={"10px"} mb={"10px"}>
        <Button onClick={clickHandler}>뽑기</Button>
        <Button onClick={resetHandler}>초기화</Button>
      </ButtonGroup>
    </>
  );
};
