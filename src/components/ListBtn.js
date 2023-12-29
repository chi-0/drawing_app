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
        <Button onClick={clickHandler} bgColor={"green.300"}>
          뽑기
        </Button>
        <Button
          onClick={resetHandler}
          bgColor={"transparent"}
          border={"1px solid rgba(0,0,0,0.1)"}
          color={"gray"}
        >
          초기화
        </Button>
      </ButtonGroup>
    </>
  );
};
