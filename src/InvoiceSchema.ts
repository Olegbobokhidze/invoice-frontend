import * as z from "zod";
const Options = z.enum([
  "Net 1 Day",
  "Net 7 Days",
  "Net 14 Days",
  "Net 30 Days",
]);
export const UserSchema = z
  .object({
    fromStreetAddress: z.string(),
    fromCity: z.string(),
    fromPostCode: z.string(),
    fromCountry: z.string(),
    clientName: z.string(),
    clientMail: z.string().email(),
    toStreetAddress: z.string(),
    toCity: z.string(),
    toPostCode: z.string(),
    toCountry: z.string(),
    date: z.string(),
    options: Options,
    project: z.string(),
    itemName: z.string(),
    quantity: z.number(),
    price: z.number(),
    status: z.string(),
  })
  .required();
export type FormSchemaType = z.infer<typeof UserSchema>;
