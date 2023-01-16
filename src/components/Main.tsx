import React, { useEffect, useState } from "react";
import { HeaderInvoice } from "./invoiceHeader/HeaderInvoice";
import { Item } from "./items/Item";
import styled from "styled-components";
import { EmptyPage } from "./emptypage/EmptyPage";
import { UserForm } from "./userForm/UserForm";
import { InvoicePage } from "./invoicePage/InvoicePage";
import useStore from "../zustand/store";
import { Route, Routes } from "react-router-dom";
import { EditUserForm } from "./editUserForm/EditUserForm";
const Holder = styled.div`
  position: relative;
  @media screen and (min-width: 820px) {
    padding: 100px;
  }
  @media screen and (min-width: 1440px) {
    padding-left: 380px;
    padding-right: 380px;
  }
`;
export const Main = () => {
  const [status, setStatus] = useState<string>("all");
  const { invoices, fetchInvoices } = useStore();
  const PaidLength = invoices.filter((inv) => inv.status === "paid");
  const PendingLength = invoices.filter((inv) => inv.status === "pending");
  const invStatus = invoices.filter((inv) => inv.status);
  useEffect(() => {
    if (status === "all") {
      document.title = `Invoices (${invoices.length})`;
    } else if (status === "paid") {
      document.title = `Invoices (${PaidLength.length})`;
    } else if (status === "pending") {
      document.title = `Invoices (${PendingLength.length})`;
    }
    fetchInvoices();
  }, [
    fetchInvoices,
    invoices.length,
    status,
    PaidLength.length,
    PendingLength.length
  ]);
  const filteredInvoices = invoices.filter((invoice) => {
    if (status === "all") {
      return true;
    } else {
      return invoice.status === status;
    }
  });

  return (
    <Holder>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HeaderInvoice status={status} setStatus={setStatus} />
              {filteredInvoices.length > 0 ? (
                <Item status={status} setStatus={setStatus} />
              ) : (
                <EmptyPage />
              )}
            </>
          }
        />
        <Route path="/createInvoice" element={<UserForm />} />
        <Route path="/invoice/:id" element={<InvoicePage />} />
        <Route path="/editInvoice/:id" element={<EditUserForm />} />
      </Routes>
    </Holder>
  );
};
