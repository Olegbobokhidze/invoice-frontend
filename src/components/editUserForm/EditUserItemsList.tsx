import React from "react";
import { Ref } from "react-hook-form";
import {
  Delete,
  HolderItem,
  NumberInput,
  Paragraph,
  TextInput,
} from "../userForm/UserForm.styled";
import DeleteIcon from "../../assets/icon-delete.svg";
import { UseFormReturn } from "react-hook-form";
type Prop = {
  register: any;
  errors: any;
  watch: any;
  control: any;
  item: any;
};
export const UserItemsList = ({
  register,
  errors,
  watch,
  control,
  item,
}: Prop) => {
  const quantity = watch("quantity");
  const price = watch("price");
  const result =
    price > 0 && price < 10000 && quantity > 0 && quantity < 10
      ? (price * quantity).toFixed(2)
      : 0;
  return (
    <>
      <Paragraph>Item Name</Paragraph>
      <TextInput
        style={errors.itemName ? { border: "1px solid red" } : {}}
        {...register("itemName", { required: true })}
        defaultValue={item.itemName}
      />
      <HolderItem>
        <Paragraph>Qty.</Paragraph>
        <Paragraph>Price</Paragraph>
        <Paragraph>Total</Paragraph>
        <NumberInput
          type="number"
          {...register("quantity", { required: true })}
          defaultValue={item.quantity}
          style={
            errors.quantity
              ? { border: "1px solid red", width: "64px" }
              : { width: "64px" }
          }
        />
        <NumberInput
          type="number"
          {...register("price", { required: true, maxLength: 4 })}
          style={
            errors.price
              ? { border: "1px solid red", width: "100px" }
              : { width: "100px" }
          }
          defaultValue={item.price}
        />

        <Paragraph>€{result}</Paragraph>
        {quantity > 9 || quantity === 0 ? (
          <span style={{ color: "red", fontSize: "10px" }}>Max Qty. 9</span>
        ) : null}
        {price > 9999 || quantity === 0 ? (
          <span style={{ color: "red", fontSize: "10px" }}>
            Max price. 9999
          </span>
        ) : null}
      </HolderItem>
    </>
  );
};
