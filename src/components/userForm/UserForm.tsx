import React from "react";
import { useForm } from "react-hook-form";
import {
  ArrowImg,
  BillParagraph,
  ButtonsHolder,
  CancelButton,
  Holder,
  InputsPage,
  Paragraph,
  SaveButton,
  Select,
  TextInput,
  Title,
  HolderBack,
} from "./UserForm.styled";
import { FormSchemaType, UserSchema } from "../../InvoiceSchema";
import { UserItemsList } from "./UserItemsList";
import Arrow from "../../assets/icon-arrow-left.svg";
import useStore from "../../zustand/store";
import { Link, useNavigate } from "react-router-dom";
export const UserForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    watch,
    control,
  } = useForm<FormSchemaType>();
  const navigate = useNavigate();
  const formData = watch();

  const hasError = Object.values(formData).some((value) => !value);
  const { addInvoice } = useStore();
  const onSubmit = (data: FormSchemaType): void => {
    UserSchema.safeParse(data);
    try {
      addInvoice(data);
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <InputsPage>
        <Link to="/">
          <HolderBack>
            <ArrowImg src={Arrow} />
            <Paragraph style={{ fontWeight: "bold" }}>Back</Paragraph>
          </HolderBack>
        </Link>
        <Title>New Invoice</Title>
        <BillParagraph>Bill From</BillParagraph>
        <input type="hidden" {...register("status")} defaultValue="pending" />
        <Paragraph>Street Address</Paragraph>
        <TextInput
          placeholder="Street Address"
          {...register("fromStreetAddress", { required: true })}
          style={errors.fromStreetAddress ? { border: "1px solid red" } : {}}
        />
        <Holder>
          <Paragraph>City</Paragraph>
          <Paragraph>Post Code</Paragraph>
          <TextInput
            placeholder="City"
            {...register("fromCity", { required: true })}
            style={
              errors.fromCity
                ? { width: "152px", height: "48px", border: "1px solid red" }
                : { width: "152px", height: "48px" }
            }
          />
          <TextInput
            style={
              errors.fromPostCode
                ? { width: "152px", height: "48px", border: "1px solid red" }
                : { width: "152px", height: "48px" }
            }
            placeholder="Post Code"
            {...register("fromPostCode", { required: true })}
          />
        </Holder>
        <Paragraph>Country</Paragraph>
        <TextInput
          placeholder="Country"
          {...register("fromCountry", { required: true })}
          style={errors.fromCountry ? { border: "1px solid red" } : {}}
        />
        <BillParagraph>Bill To</BillParagraph>
        <Paragraph>Client's Name</Paragraph>
        <TextInput
          placeholder="Client Name"
          {...register("clientName", { required: true })}
          style={errors.clientName ? { border: "1px solid red" } : {}}
        />
        <Paragraph>Client's Email</Paragraph>
        <TextInput
          type="email"
          placeholder="Client Mail"
          {...register("clientMail", { required: true })}
          style={errors.clientMail ? { border: "1px solid red" } : {}}
        />
        <Paragraph>Street Address</Paragraph>
        <TextInput
          placeholder="Street Address"
          {...register("toStreetAddress", { required: true })}
          style={errors.toStreetAddress ? { border: "1px solid red" } : {}}
        />
        <Holder>
          <Paragraph>City</Paragraph>
          <Paragraph>Post Code</Paragraph>
          <TextInput
            style={
              errors.toCity
                ? { width: "152px", height: "48px", border: "1px solid red" }
                : { width: "152px", height: "48px" }
            }
            placeholder="City"
            {...register("toCity", { required: true })}
          />
          <TextInput
            style={
              errors.toPostCode
                ? { width: "152px", height: "48px", border: "1px solid red" }
                : { width: "152px", height: "48px" }
            }
            placeholder="Post Code"
            {...register("toPostCode", { required: true })}
          />
        </Holder>
        <Paragraph>Country</Paragraph>
        <TextInput
          placeholder="Country"
          {...register("toCountry", { required: true })}
          style={errors.toCountry ? { border: "1px solid red" } : {}}
        />
        <Paragraph>Invoice Date</Paragraph>
        <TextInput
          type="date"
          {...register("date", { required: true })}
          style={errors.date ? { border: "1px solid red" } : {}}
        />
        <Paragraph>Payment Terms</Paragraph>
        <Select
          {...register("options", { required: true })}
          style={errors.options ? { border: "1px solid red" } : {}}
        >
          <option value="Net 1 Day">Net 1 Day</option>
          <option value="Net 7 Days">Net 7 Days</option>
          <option value="Net 14 Days">Net 14 Days</option>
          <option value="Net 30 Days">Net 30 Days</option>
        </Select>
        <Paragraph>Project Description</Paragraph>
        <TextInput
          placeholder="Project Description"
          {...register("project", { required: true })}
          style={errors.project ? { border: "1px solid red" } : {}}
        />
        <Paragraph
          style={{
            fontSize: "32px",
            textAlign: "left",
            width: "330px",
            marginTop: "30px",
          }}
        >
          Item List
        </Paragraph>
        <UserItemsList
          watch={watch}
          register={register}
          errors={errors}
          control={control}
        />
        <ButtonsHolder>
          <Link to="/">
            <CancelButton>Cancel</CancelButton>
          </Link>

          <SaveButton type="submit">Save</SaveButton>
        </ButtonsHolder>
        {hasError ? (
          <span
            style={{
              width: "330px",
              color: "red",
              fontSize: "15px",
              marginTop: "20px",
              fontWeight: "bold",
              textAlign: "left",
            }}
          >
            - All fields Must be filled
          </span>
        ) : null}
      </InputsPage>
    </form>
  );
};
