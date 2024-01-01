import { Button, ButtonGroup } from "@chakra-ui/react";
import { useEffect, useState } from "react";

export const ListBtn = ({ arr, getResult, resetItem }) => {
  const [count, setCount] = useState();
  const [result, setResult] = useState();

  const clickHandler = () => {
    const data = arr[~~(Math.random() * arr.length)];
    arr.length > 0 && setCount(3);
    arr.length > 0 && setResult(data);
    arr.length > 0 && getResult("3초후 결과가 나옵니다");
  };

  const resetHandler = () => {
    resetItem();
    setCount();
  };

  useEffect(() => {
    count > 0 &&
      setTimeout(() => {
        setCount(count - 1);
        getResult(count - 1 + "초후 결과가 나옵니다");
      }, 1000);

    count === 0 && getResult(result);

    arr.length === 0 && setCount();
  }, [count, getResult, result, arr]);

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
