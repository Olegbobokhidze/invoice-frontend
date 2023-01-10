import React from "react";
import styled from "styled-components";

const Holder = styled.div`
  position: absolute;
  background-color: ${(props) => props.theme.item};
  box-shadow: ${(props) => props.theme.boxShadow};
  display: flex;
  flex-direction: column;
  width: 12rem;
  padding: 10px;
  gap: 1rem;
  border-radius: 5px;
  top: 60px;
  z-index: 100;
`;
const Input = styled.input`
  margin-right: 8px;
  cursor: pointer;
  background-color: initial;
`;
const Paragraph = styled.p`
  color: ${(props) => props.theme.fontColor};
  font-weight: bold;
  font-size: 15px;
`;
const Hold = styled.div`
  display: flex;
`;
type Prop = {
  status: string;
  setStatus: (val: string) => void;
};
export const StatusModule = ({ status, setStatus }: Prop) => {
  return (
    <Holder>
      <Hold>
        <Input
          type="checkbox"
          value="all"
          checked={status === "all"}
          onChange={() => setStatus("all")}
        />
        <Paragraph>All</Paragraph>
      </Hold>
      <Hold>
        <Input
          type="checkbox"
          value="paid"
          checked={status === "paid"}
          onChange={() => setStatus("paid")}
        />
        <Paragraph>Paid</Paragraph>
      </Hold>
      <Hold>
        <Input
          type="checkbox"
          value="pending"
          checked={status === "pending"}
          onChange={() => setStatus("pending")}
        />
        <Paragraph>Pending</Paragraph>
      </Hold>
    </Holder>
  );
};
