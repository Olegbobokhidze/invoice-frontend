export function DateReciever(dateString: string, daysString: string): string {
  const [, days] = daysString.split(" ");
  const numberOfDays = Number(days);
  const date = new Date(dateString);
  date.setDate(date.getDate() + numberOfDays);
  const options = {
    day: "numeric" as const,
    month: "short" as const,
    year: "numeric" as const,
  };
  return date.toLocaleDateString("en-US", options);
}
export function GetShortId(id: string) {
  if (id === undefined) {
    return;
  } else {
    return id.substring(0, 7).toUpperCase();
  }
}
export function FormatDate(date: string) {
  if (date === undefined) {
    return;
  } else {
    const dateObject = new Date(date);
    const options = {
      day: "numeric" as const,
      month: "short" as const,
      year: "numeric" as const,
    };
    return dateObject.toLocaleDateString("en-US", options);
  }
}
export const InvoiceLength = (invoices: any, status: string) => {
  const PaidInvoice = invoices.filter((inv: any) => inv.status === "paid");
  const PendingInvoice = invoices.filter(
    (inv: any) => inv.status === "pending"
  );
  if (invoices.length === 0 && status === "all") {
    return "There are no invoices";
  } else if (invoices.length === 1 && status === "all") {
    return "There is 1 invoice";
  } else if (invoices.length > 1 && status === "all") {
    return `There are ${invoices.length} invoices`;
  } else if (PaidInvoice.length === 0 && status === "paid") {
    return "There are no Paid invoices";
  } else if (PaidInvoice.length === 1 && status === "paid") {
    return "There is 1 Paid invoice";
  } else if (PaidInvoice.length > 1 && status === "paid") {
    return `There are ${PaidInvoice.length} Paid invoices`;
  } else if (PendingInvoice.length === 0 && status === "pending") {
    return "There are no Pending invoices";
  } else if (PendingInvoice.length === 1 && status === "pending") {
    return "There is 1 Pending invoice";
  } else if (PendingInvoice.length > 1 && status === "pending") {
    return `There are ${PendingInvoice.length} Pending invoices`;
  }
};
