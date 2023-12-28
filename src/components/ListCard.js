import { Card, CardBody, CardFooter, Divider } from "@chakra-ui/react";
import { ListHeader } from "./ListHeader";
import { Item } from "./Item";
import { ListBtn } from "./ListBtn";
import { ListForm } from "./ListForm";
import { useEffect, useState } from "react";
import { ListResult } from "./ListResult";

export const ListCard = () => {
  const [itemArr, setItemArr] = useState([]);
  const [result, setResult] = useState();

  useEffect(() => {
    itemArr.length === 0 && setResult();
  }, [itemArr.length]);

  const getItem = (data) => {
    setItemArr((prev) => [...prev, data]);
  };

  const getResult = (data) => {
    setResult(data);
  };

  const deleteItem = (data) => {
    setItemArr((prev) => prev.filter((_, index) => index !== data));
  };

  const resetItem = () => {
    setItemArr([]);
  };

  return (
    <>
      <Card w={"400px"}>
        <CardBody>
          <ListHeader />
          <Item arr={itemArr} deleteItem={deleteItem} />
          <ListResult arr={itemArr} result={result} />
        </CardBody>

        <Divider w={"100%"} height={"1px"} bg={"#dcdcdc"} />

        <CardFooter display={"flex"} flexDirection={"column"}>
          <ListBtn arr={itemArr} getResult={getResult} resetItem={resetItem} />
          <ListForm getItem={getItem} />
        </CardFooter>
      </Card>
    </>
  );
};
