import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate, useParams } from "react-router-dom";
import { FormSchemaType, UserSchema } from "../../InvoiceSchema";
import Arrow from "../../assets/icon-arrow-left.svg";
import { UserItemsList } from "./EditUserItemsList";
import useStore from "../../zustand/store";
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
} from "../userForm/UserForm.styled";
export const EditUserForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    watch,
    control,
  } = useForm<FormSchemaType>();
  const { id } = useParams();
  const { invoices, editInvoice } = useStore();
  const formData = watch();
  const hasError = Object.values(formData).some((value) => !value);
  const navigate = useNavigate();
  const onSubmit = (data: any): void => {
    UserSchema.safeParse(data);
    try {
      editInvoice(id, data);
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      {React.Children.toArray(
        invoices
          .filter((invoice: any) => invoice._id === id)
          .map((item: any) => {
            return (
              <form onSubmit={handleSubmit(onSubmit)}>
                <InputsPage>
                  <Link to="/">
                    <HolderBack>
                      <ArrowImg src={Arrow} />
                      <Paragraph style={{ fontWeight: "bold" }}>Back</Paragraph>
                    </HolderBack>
                  </Link>
                  <Title>Edit Invoice</Title>
                  <BillParagraph>Bill From</BillParagraph>
                  <Paragraph>Street Address</Paragraph>
                  <input
                    type="hidden"
                    {...register("status")}
                    defaultValue={item.status}
                  />
                  <TextInput
                    placeholder="Street Address"
                    {...register("fromStreetAddress", { required: true })}
                    defaultValue={item.fromStreetAddress}
                    style={
                      errors.fromStreetAddress
                        ? { border: "1px solid red" }
                        : {}
                    }
                  />
                  <Holder>
                    <Paragraph>City</Paragraph>
                    <Paragraph>Post Code</Paragraph>
                    <TextInput
                      placeholder="City"
                      {...register("fromCity", { required: true })}
                      defaultValue={item.fromCity}
                      style={
                        errors.fromCity
                          ? {
                              width: "152px",
                              height: "48px",
                              border: "1px solid red",
                            }
                          : { width: "152px", height: "48px" }
                      }
                    />
                    <TextInput
                      style={
                        errors.fromPostCode
                          ? {
                              width: "152px",
                              height: "48px",
                              border: "1px solid red",
                            }
                          : { width: "152px", height: "48px" }
                      }
                      placeholder="Post Code"
                      {...register("fromPostCode", { required: true })}
                      defaultValue={item.fromPostCode}
                    />
                  </Holder>
                  <Paragraph>Country</Paragraph>
                  <TextInput
                    placeholder="Country"
                    {...register("fromCountry", { required: true })}
                    style={
                      errors.fromCountry ? { border: "1px solid red" } : {}
                    }
                    defaultValue={item.fromCountry}
                  />
                  <BillParagraph>Bill To</BillParagraph>
                  <Paragraph>Client's Name</Paragraph>
                  <TextInput
                    placeholder="Client Name"
                    {...register("clientName", { required: true })}
                    style={errors.clientName ? { border: "1px solid red" } : {}}
                    defaultValue={item.clientName}
                  />
                  <Paragraph>Client's Email</Paragraph>
                  <TextInput
                    type="email"
                    placeholder="Client Mail"
                    {...register("clientMail", { required: true })}
                    style={errors.clientMail ? { border: "1px solid red" } : {}}
                    defaultValue={item.clientMail}
                  />

                  <Paragraph>Street Address</Paragraph>
                  <TextInput
                    placeholder="Street Address"
                    {...register("toStreetAddress", { required: true })}
                    style={
                      errors.toStreetAddress ? { border: "1px solid red" } : {}
                    }
                    defaultValue={item.toStreetAddress}
                  />
                  <Holder>
                    <Paragraph>City</Paragraph>
                    <Paragraph>Post Code</Paragraph>
                    <TextInput
                      style={
                        errors.toCity
                          ? {
                              width: "152px",
                              height: "48px",
                              border: "1px solid red",
                            }
                          : { width: "152px", height: "48px" }
                      }
                      placeholder="City"
                      {...register("toCity", { required: true })}
                      defaultValue={item.toCity}
                    />
                    <TextInput
                      style={
                        errors.toPostCode
                          ? {
                              width: "152px",
                              height: "48px",
                              border: "1px solid red",
                            }
                          : { width: "152px", height: "48px" }
                      }
                      placeholder="Post Code"
                      {...register("toPostCode", { required: true })}
                      defaultValue={item.toPostCode}
                    />
                  </Holder>
                  <Paragraph>Country</Paragraph>
                  <TextInput
                    placeholder="Country"
                    {...register("toCountry", { required: true })}
                    style={errors.toCountry ? { border: "1px solid red" } : {}}
                    defaultValue={item.toCountry}
                  />
                  <Paragraph>Invoice Date</Paragraph>
                  <TextInput
                    type="date"
                    {...register("date", { required: true })}
                    style={errors.date ? { border: "1px solid red" } : {}}
                    defaultValue={item.date}
                  />
                  <Paragraph>Payment Terms</Paragraph>
                  <Select
                    {...register("options", { required: true })}
                    style={errors.options ? { border: "1px solid red" } : {}}
                    defaultValue={item.options}
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
                    defaultValue={item.project}
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
                    item={item}
                  />
                  <ButtonsHolder>
                    <Link to="/">
                      <CancelButton>Cancel</CancelButton>
                    </Link>
                    <SaveButton type="submit">save</SaveButton>
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
          })
      )}
    </>
  );
};
