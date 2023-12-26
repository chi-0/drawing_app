import { useState } from "react";

export const Main = () => {
  const [randomArr, setRandomArr] = useState([]);
  const [item, setItem] = useState();
  const [inputValue, setInputValue] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    setRandomArr((prev) => {
      return [...prev, inputValue];
    });
    setInputValue("");
  };

  const clickHandler = () => {
    setItem(randomArr[~~(Math.random() * randomArr.length)]);
  };

  const deleteHandler = (e) => {
    const removeItem = e.currentTarget.previousSibling.innerText;
    const getItem = randomArr.lastIndexOf(removeItem);

    setRandomArr(randomArr.filter((_, index) => index !== getItem));
  };

  const changeHandler = (e) => {
    setInputValue(e.target.value);
  };

  const allRemoveHandler = () => {
    setRandomArr([]);
    setItem("");
  };

  return (
    <>
      <ul>
        {randomArr.map((data, index) => (
          <div key={index}>
            <li>{data}</li>
            <button onClick={deleteHandler}>삭제</button>
          </div>
        ))}
      </ul>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="아이템을 입력해주세요"
          value={inputValue}
          onChange={changeHandler}
        />
        <button type="submit">등록</button>
      </form>
      <button onClick={clickHandler}>뽑기</button>
      <button onClick={allRemoveHandler}>초기화</button>
      <p>{item}</p>
    </>
  );
};
