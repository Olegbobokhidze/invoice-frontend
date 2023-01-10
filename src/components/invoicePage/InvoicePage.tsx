import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import useStore from "../../zustand/store";
import {
  Button,
  HeaderHolder,
  HolderFrom,
  Holder,
  HolderToItems,
  IdProjectHolder,
  Invoice,
  Page,
  Paragraph,
  BoldText,
  HolderMail,
  TotalHolder,
  ArrowLeft,
  ArrowBack,
  ButtonsHolder,
} from "./styled";
import Arrow from "../../assets/icon-arrow-left.svg";
import { DateReciever, FormatDate, GetShortId } from "../helperFunctions";
import { useForm } from "react-hook-form";
import { Circle, Paid, Pending } from "../items/styled";

export const InvoicePage = () => {
  const { id } = useParams();
  const { invoices, deleteInvoice, editInvoice } = useStore();
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const MarkAsPaid = (data: any) => {
    navigate("/");
    editInvoice(id, data);
  };
  return (
    <Page>
      {React.Children.toArray(
        invoices
          .filter((invoice: any) => invoice._id === id)
          .map((item: any) => {
            return (
              <>
                <HeaderHolder>
                  <ArrowBack onClick={() => navigate("/")}>
                    <ArrowLeft src={Arrow} />
                    <Paragraph style={{ fontWeight: "bold" }}>Back</Paragraph>
                  </ArrowBack>
                  <ButtonsHolder>
                    {item.status === "pending" ? (
                      <Pending>
                        <Circle
                          style={{
                            background: "#FF8F00",
                            marginRight: "10px",
                            opacity: "1",
                          }}
                        ></Circle>
                        <Paragraph
                          style={{
                            color: "#FF8F00",
                            fontWeight: "bold",
                            opacity: "1",
                          }}
                        >
                          Pending
                        </Paragraph>
                      </Pending>
                    ) : (
                      <Paid>
                        <Circle
                          style={{
                            background: "#33D69F",
                            marginRight: "10px",
                            opacity: "1",
                          }}
                        ></Circle>
                        <Paragraph
                          style={{
                            color: "#33D69F",
                            fontWeight: "bold",
                            opacity: "1",
                          }}
                        >
                          Paid
                        </Paragraph>
                      </Paid>
                    )}
                    <Link to={`/editInvoice/${item._id}`}>
                      <Button
                        style={{ background: "#F9FAFE", color: "#7E88C3" }}
                      >
                        Edit
                      </Button>
                    </Link>
                    <Link to="/" onClick={() => deleteInvoice(item._id)}>
                      <Button
                        style={{
                          background: "#EC5757",
                          width: "89px",
                        }}
                      >
                        Delete
                      </Button>
                    </Link>
                    {item.status === "paid" ? null : (
                      <form onSubmit={handleSubmit(MarkAsPaid)}>
                        <input
                          type="hidden"
                          {...register("status")}
                          defaultValue="paid"
                        />
                        <Button
                          style={{
                            background: "#7C5DFA",
                            width: "149px",
                          }}
                          type="submit"
                        >
                          Mark as Paid
                        </Button>
                      </form>
                    )}
                  </ButtonsHolder>
                </HeaderHolder>
                <Invoice>
                  <IdProjectHolder>
                    <Paragraph>
                      #<strong>{GetShortId(item._id)}</strong>
                    </Paragraph>
                    <Paragraph>{item.project}</Paragraph>
                  </IdProjectHolder>
                  <HolderFrom>
                    <Paragraph>{item.fromStreetAddress}</Paragraph>
                    <Paragraph>{item.fromCity}</Paragraph>
                    <Paragraph>{item.fromPostCode}</Paragraph>
                    <Paragraph>{item.fromCountry}</Paragraph>
                  </HolderFrom>
                  <HolderToItems>
                    <Holder>
                      <Paragraph>Invoice Date</Paragraph>
                      <BoldText>{FormatDate(item.date)}</BoldText>
                    </Holder>
                    <Holder>
                      <Paragraph>Bill To</Paragraph>
                      <BoldText>{item.clientName}</BoldText>
                    </Holder>
                    <Holder>
                      <Paragraph>Payment Due</Paragraph>
                      <BoldText>
                        {DateReciever(item.date, item.options)}
                      </BoldText>
                    </Holder>
                    <Holder>
                      <Paragraph>{item.toStreetAddress}</Paragraph>
                      <Paragraph>{item.toCity}</Paragraph>
                      <Paragraph>{item.toPostCode}</Paragraph>
                      <Paragraph>{item.fromCountry}</Paragraph>
                    </Holder>
                  </HolderToItems>
                  <HolderMail>
                    <Paragraph>Sent to</Paragraph>
                    <BoldText>{item.clientMail}</BoldText>
                  </HolderMail>
                  <TotalHolder>
                    <Paragraph style={{ color: "white", fontWeight: "bold" }}>
                      Total
                    </Paragraph>
                    <BoldText style={{ color: "white" }}>
                      $ {(+item.price * +item.quantity).toFixed(2)}
                    </BoldText>
                  </TotalHolder>
                </Invoice>
              </>
            );
          })
      )}
    </Page>
  );
};
