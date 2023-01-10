import React, { useState } from "react";
import {
  Button,
  ButtonFilterDiv,
  HeaderHolder,
  Holder,
  Paragraph,
  Title,
  PlusDiv,
  PlusImg,
  ArrowParagraphHolder,
  ArrowImg,
  ParagraphDesktop,
  ParagraphMobile,
} from "./Header.styled";
import PlusImage from "../../assets/icon-plus.svg";
import Arrow from "../../assets/icon-arrow-down.svg";
import { StatusModule } from "./StatusModule";
import { Link } from "react-router-dom";
import useStore from "../../zustand/store";
import { InvoiceLength } from "../helperFunctions";
type Props = {
  status: string;
  setStatus: (val: string) => void;
};
export const HeaderInvoice = ({ status, setStatus }: Props) => {
  const [showStatus, setShowStatus] = useState<boolean>(false);
  const { invoices } = useStore();
  return (
    <HeaderHolder>
      <Holder>
        <Title>Invoices</Title>
        <Paragraph style={{ opacity: 0.5 }}>
          {InvoiceLength(invoices, status)}
        </Paragraph>
      </Holder>
      <ButtonFilterDiv>
        <ArrowParagraphHolder>
          <ParagraphDesktop style={{ opacity: 1, fontSize: "12px" }}>
            Filter by status
          </ParagraphDesktop>
          <ParagraphMobile style={{ opacity: 1, fontSize: "18px" }}>
            Filter
          </ParagraphMobile>
          <ArrowImg
            src={Arrow}
            alt="arrow"
            showStatus={showStatus}
            onClick={() => setShowStatus((prev) => !prev)}
          />
          {showStatus ? (
            <StatusModule status={status} setStatus={setStatus} />
          ) : null}
        </ArrowParagraphHolder>
        <Link
          to="/createInvoice"
          style={{
            textDecoration: "none",
          }}
        >
          <Button>
            <PlusDiv>
              <PlusImg src={PlusImage} alt="plus image" />
            </PlusDiv>
            New Invoice
          </Button>
        </Link>
      </ButtonFilterDiv>
    </HeaderHolder>
  );
};
