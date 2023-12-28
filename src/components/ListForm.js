import { FormControl, FormLabel, Input } from "@chakra-ui/react";
import { useForm } from "react-hook-form";

export const ListForm = ({ getItem }) => {
  const { register, handleSubmit, reset } = useForm();

  const submitHandler = (data) => {
    const { value } = data;
    value.trim().length > 0 && getItem(value);
    reset({ value: "" });
  };

  return (
    <>
      <FormControl as={"form"} onSubmit={handleSubmit(submitHandler)}>
        <FormLabel htmlFor="텍스트입력" />
        <Input
          type="text"
          placeholder="입력하세요"
          isInvalid
          errorBorderColor="#dcdcdc"
          {...register("value", {
            required: "값을 입력해주세요",
          })}
        />
      </FormControl>
    </>
  );
};
