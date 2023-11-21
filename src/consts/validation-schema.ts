import { object, string, number } from "yup";

export const dayBookEntryFormSchema = object().shape({
  name: string().optional(),
  place: string().optional(),
  contactNumber: string().optional(),
  productName: string().required("Required"),
  productValue: number().min(1, "Minimum value is reuired").required("Reuired"),
  description: string().optional(),
});
