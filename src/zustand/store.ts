import axios from "axios";
import create from "zustand";

import { FormSchemaType as Invoice } from "../InvoiceSchema";
interface InvoiceState {
  invoices: Invoice[];
  addInvoice: (invoice: Invoice) => void;
  fetchInvoices: () => void;
  deleteInvoice: (id: string) => void;
  editInvoice: (id: any, data: any) => void;
}
const useStore = create<InvoiceState>((set) => ({
  invoices: [],
  addInvoice: async (invoice: Invoice) => {
    try {
      const response = await axios.post(
        "http://localhost:3009/api/invoices",
        invoice
      );
      set((state) => ({
        invoices: [...state.invoices, response.data],
      }));
    } catch (error) {
      console.error(error);
    }
  },
  fetchInvoices: async () => {
    try {
      const response = await axios.get("http://localhost:3009/invoices");
      set((state) => ({
        invoices: response.data,
      }));
    } catch (error) {
      console.error(error);
    }
  },
  deleteInvoice: (id: string) => {
    axios.delete(`http://localhost:3009/invoices/${id}`).then(() => {
      set((state: InvoiceState) => {
        const invoices = state.invoices.filter((item: any) => item._id !== id);
        return { invoices };
      });
    });
  },
  editInvoice: async (id: any, data: any) => {
    await axios
      .put(`http://localhost:3009/editInvoice/${id}`, data)
      .then((res: any) => {
        set((state: InvoiceState) => {
          return { ...state, res };
        });
      });
  },
}));

export default useStore;
