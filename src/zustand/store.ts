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
        "https://invoice-api-0wdz.onrender.com/api/invoices",
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
      const response = await axios.get(
        "https://invoice-api-0wdz.onrender.com/invoices"
      );
      set((state) => ({
        invoices: response.data,
      }));
    } catch (error) {
      console.error(error);
    }
  },
  deleteInvoice: (id: string) => {
    axios
      .delete(`https://invoice-api-0wdz.onrender.com/invoices/${id}`)
      .then(() => {
        set((state: InvoiceState) => {
          const invoices = state.invoices.filter(
            (item: any) => item._id !== id
          );
          return { invoices };
        });
      });
  },
  editInvoice: async (id: any, data: any) => {
    await axios
      .put(`https://invoice-api-0wdz.onrender.com/editInvoice/${id}`, data)
      .then((res: any) => {
        set((state: InvoiceState) => {
          return { ...state, res };
        });
      });
  },
}));

export default useStore;
