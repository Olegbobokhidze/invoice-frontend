import React from "react";
import { Link } from "react-router-dom";
import ArrowRight from "../../assets/icon-arrow-right.svg";
import useStore from "../../zustand/store";
import { DateReciever, GetShortId } from "../helperFunctions";
import {
  Holder,
  ID,
  DateP,
  Price,
  NameSurname,
  Paid,
  DatePriceHolder,
  Paragraph,
  Circle,
  Arrow,
  Pending,
} from "./styled";
type Props = {
  status: string;
  setStatus: (val: string) => void;
};
export const Item = ({ status, setStatus }: Props) => {
  const { invoices } = useStore();
  return (
    <>
      {React.Children.toArray(
        invoices.map((invoice: any) => {
          if (status === "all") {
            return (
              <Link
                to={`/invoice/${invoice._id}`}
                style={{ textDecoration: "none" }}
              >
                <Holder>
                  <ID>
                    #<strong>{invoice ? GetShortId(invoice._id) : null}</strong>
                  </ID>
                  <NameSurname>{invoice.clientName}</NameSurname>
                  <DatePriceHolder>
                    <DateP>
                      Due to{" "}
                      {invoice
                        ? DateReciever(invoice.date, invoice.options)
                        : null}
                    </DateP>
                    <Price>€ {invoice.price * invoice.quantity}</Price>
                  </DatePriceHolder>
                  {invoice.status === "pending" ? (
                    <Pending>
                      <Circle
                        style={{ background: "#FF8F00", marginRight: "10px" }}
                      ></Circle>
                      <Paragraph style={{ color: "#FF8F00" }}>
                        Pending
                      </Paragraph>
                    </Pending>
                  ) : (
                    <Paid>
                      <Circle
                        style={{ background: "#33D69F", marginRight: "10px" }}
                      ></Circle>
                      <Paragraph style={{ color: "#33D69F" }}>Paid</Paragraph>
                    </Paid>
                  )}
                  <Arrow src={ArrowRight} />
                </Holder>
              </Link>
            );
          } else if (invoice.status === status) {
            return (
              <Link
                to={`/invoice/${invoice._id}`}
                style={{ textDecoration: "none" }}
              >
                <Holder>
                  <ID>
                    #<strong>{invoice ? GetShortId(invoice._id) : null}</strong>
                  </ID>
                  <NameSurname>{invoice.clientName}</NameSurname>
                  <DatePriceHolder>
                    <DateP>
                      Due to{" "}
                      {invoice
                        ? DateReciever(invoice.date, invoice.options)
                        : null}
                    </DateP>
                    <Price>€ {invoice.price * invoice.quantity}</Price>
                  </DatePriceHolder>
                  {invoice.status === "pending" ? (
                    <Pending>
                      <Circle
                        style={{ background: "#FF8F00", marginRight: "10px" }}
                      ></Circle>
                      <Paragraph
                        style={{ color: "#FF8F00", fontWeight: "bold" }}
                      >
                        Pending
                      </Paragraph>
                    </Pending>
                  ) : (
                    <Paid>
                      <Circle
                        style={{ background: "#33D69F", marginRight: "10px" }}
                      ></Circle>
                      <Paragraph
                        style={{ color: "#33D69F", fontWeight: "bold" }}
                      >
                        Paid
                      </Paragraph>
                    </Paid>
                  )}
                  <Arrow src={ArrowRight} />
                </Holder>
              </Link>
            );
          }
        })
      )}
    </>
  );
};
